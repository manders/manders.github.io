import Util from "./util";

export default class FeatureLayer {
    // After running 'loadLayerRenderingData', this array will contain objects of 3 types
    //    _serviceUrl - current feature service URL, for finding icons
    //    _layerTitle - current layer title  (groups legend items)
    //    (otherwise) its render drawingInfo data
    //
    // A title followed by another title makes the 1st one a Section title
    //
    static set url(o) {
        this._url = o;
    }

    static get url() {
        return this.hasOwnProperty(_url) ? this._url : null;
    }

    static set data(o) {
        this._data = o;
    }

    static get data() {
        return this.hasOwnProperty('_data') ? this._data : null;
    }

    static set dataReady(o) {
        this._dataReady = o;
    }

    static get dataReady() {
        return this.hasOwnProperty(_dataReady) ? this._dataReady : null;
    }

    static set minimumSymbolSize(o) {
        this._minimumSymbolSize = o;
    }

    static get minimumSymbolSize() {
        return this.hasOwnProperty(_minimumSymbolSize) ? this._minimumSymbolSize : null;
    }

    static set workingLayerObjectsQueue(o) {
        this._workingLayerObjectsQueue = o;
    }

    static get workingLayerObjectsQueue() {
        return this.hasOwnProperty(_workingLayerObjectsQueue) ? this._workingLayerObjectsQueue : null;
    }

    static set workingLegendTimer(o) {
        this._workingLegendTimer = o;
    }

    static get workingLegendTimer() {
        return this.hasOwnProperty(_workingLegendTimer) ? this._workingLegendTimer : null;
    }

    static set workingLegendElapsedWaitTimer(o) {
        this._workingLegendElapsedWaitTimer = o;
    }

    static get workingLegendElapsedWaitTimer() {
        return this.hasOwnProperty(_workingLegendElapsedWaitTimer) ? this._workingLegendElapsedWaitTimer : null;
    }
    static get TimeOut(){
        return 8000;
    }


    static reset() {
        FeatureLayer.data = [];

        FeatureLayer._dataReady = false;

        FeatureLayer.workingLayerObjectsQueue = null;
        if (FeatureLayer._workingLegendTimer) {
            clearTimeout(FeatureLayer.workingLegendTimer);
            FeatureLayer.workingLegendTimer = null;
        }
        if (FeatureLayer.workingLegendElapsedWaitTimer) {
            clearTimeout(FeatureLayer.workingLegendElapsedWaitTimer);
            FeatureLayer.workingLegendElapsedWaitTimer = null;
        }

    }

    //------------------------------------------------------------------------------------
    // Requests layers in a Map Service
    //
    // This will pull out the layer definition drawingInfo of any layers in a map service
    //
    static async _requestMapService (url, ignoreErrors) {
        var token    = Util.Token;
        ignoreErrors = ignoreErrors || true;

        try {
            let response = await $j.ajax({
                url     : url,
                data    : {
                    f    : 'json',
                    token: token
                },
                datatype: 'json',
                timeout : Math.floor(FeatureLayer.TimeOut / 2)
            });

            var layers = [], j, u;
            var obj    = JSON.parse(response);
            if (!obj.error && obj.layers) {
                layers = [];
                for (j = 0; j < obj.layers.length; j++) {
                    if (Util.isDef(obj.layers[0].id)) {
                        u = url + '/' + obj.layers[j].id;
                        layers.push(u);
                    }
                }
                // process all the service layers as urls
                await FeatureLayer.loadLayerRenderingData(layers, ignoreErrors);

            }
            else if (!ignoreErrors) {
                    console.log(obj.error);
            }
        }
        catch(ex){
            console.log(ex);
        }
    }


    //------------------------------------------------------------------------------------
    // Make the request to fetch layer definition(s)
    // Handles layer types FeatureCollection, FeatureLayer, or MapServer
    //
    static async _requestLayer (url, ignoreErrors) {
        ignoreErrors = ignoreErrors || true;

        try {
            if (Util.hasText(url)) {
                if (Util.endsWith(url, "MapServer")) {
                    await FeatureLayer._requestMapService(url, ignoreErrors);

                } else {
                    // feature layer
                    let response = await $j.ajax({
                        url     : url,
                        data    : {
                            f    : 'json',
                            token: BA.TokenProvider.getSavedToken()
                        },
                        datatype: 'json',
                        timeout : Math.floor(BA.LegendHelper._timeout / 2)
                    });

                    var obj = JSON.parse(response);
                    if (!obj.error) {
                        await FeatureLayer._processLegendLayer(obj);

                    } else if (!ignoreErrors) {
                        console.log(obj.error);
                    }
                }
            }
            else {
                var msg = 'LegendHelper: empty layer URL';
                console.log.error(msg);
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    //------------------------------------------------------------------------------------
    // Inspect a layer object
    // This will pull out the layer definition drawingInfo if it is already there,
    // or it will make the request to fetch it from the server.  Handles layer types
    // for FeatureCollections or FeatureLayers
    //
    static async _processLegendLayer(layerObject) {
        var ignoreErrors = true;

        var title;
        try {
            var fc  = layerObject.featureCollection;
            var def = layerObject.layerDefinition;

            // capture title
            if (fc) {
                title = layerObject.title;
            } else if (def && def.name) {
                title = def.name;
            } else if (layerObject.title) {
                title = layerObject.title;
            }
            if (title) {
                FeatureLayer.data.push({_layerTitle: title});
            }
            // capture service url
            if (layerObject.url) {
                // no serviceUrl
                FeatureLayer.data.push({_serviceUrl: layerObject.url});
            } else {
                // no serviceUrl
                FeatureLayer.data.push({_serviceUrl: ' '});
            }

            // handle FeatureCollection
            if (fc && fc.layers && fc.layers.length > 0) {
                await FeatureLayer._processLegendLayers(fc.layers);
            }
            else if (layerObject.drawingInfo) {
                // found render data
                FeatureLayer.data.push(layerObject.drawingInfo);
            }
            else if (def && def.drawingInfo) {
                // found render data
                FeatureLayer.data.push(def.drawingInfo);
            }
            else if (layerObject.url) {

                // another layer url
                await FeatureLayer._requestLayer(layerObject.url)
            }
        } catch (ex) {
            console.log(ex);
        }
    }

    //------------------------------------------------------------------------------------
    // Use this to request features and rendering information from a layer
    //
    // Processes one or more layers rendering information and add it to the data object.
    //
    // layerObjects = Array of URLs or layer objects from webmap (operational layers)
    //
    //------------------------------------------------------------------------------------

    static async loadLayerRenderingData(layerObjects, ignoreErrors) {
        var layer;
        ignoreErrors                              = ignoreErrors || true;
        BA.LegendHelper._workingLayerObjectsQueue = layerObjects;
        BA.LegendHelper._dataReady                = false;

        async function _doLayer() {
            try {
                if (FeatureLayer._workingLayerObjectsQueue.length > 0) {
                    layer = FeatureLayer._workingLayerObjectsQueue.pop();

                    if (typeof layer == 'string') { // URL
                        try {
                            await FeatureLayer._requestLayer(layer, ignoreErrors);
                            BA.async(_doLayer, 50);

                        } catch (ex) {
                            if (ignoreErrors) {
                                BA.async(_doLayer, 50);
                            } else {
                                console.log(ex);
                            }
                        }
                    } else {
                        try {
                            await FeatureLayer._processLegendLayer(layer);
                            BA.async(_doLayer, 50);

                        } catch (ex) {
                            if (ignoreErrors) {
                                BA.async(_doLayer, 50);
                            } else {
                                console.log(ex);
                            }
                        }
                    }

                } else {
                    console.log.info('LegendHelper: completed all layers');
                    FeatureLayer._dataReady = true;
                }
            } catch (ex) {
                if (ignoreErrors) {
                    BA.async(_doLayer, 50);
                } else {
                    console.log(ex);
                }
            }
        }

        if (layerObjects && layerObjects.length > 0) {
            Util.async(_doLayer, 200);
        }
    }
}


BA.Class.LegendHelperClass = L.Class.extend({

    _workingLayerObjectsQueue: null,

    //------------------------------------------------------------------------------------
    // Use this to parse the Legend render definitions
    //
    // Processes one or more layers rendering information and add it to the data object.
    //
    // layerObjects = Array of layer objects (typically from webmap operationalLayers)
    //
    // This function goes through all the layer objects and makes web requests when
    // necessary.  This function returns a promise so it is asynchronous.  However, each
    // layer object is processed synchronously (function waits for responses) so that
    // rendering information is returned in the same order as the layer objects list.
    //
    // This is using asynchronous calls so that it doesnt impact the UI thread as much.
    //------------------------------------------------------------------------------------

    loadLayerRenderingData: function (layerObjects, ignoreErrors) {
        var d                                     = $j.Deferred();
        var layer;
        ignoreErrors                              = ignoreErrors || true;
        BA.LegendHelper._workingLayerObjectsQueue = layerObjects;
        BA.LegendHelper._dataReady                = false;

        function _doLayer() {
            try {
                if (BA.LegendHelper._workingLayerObjectsQueue.length > 0) {
                    layer = BA.LegendHelper._workingLayerObjectsQueue.pop();

                    if (typeof layer == 'string') {
                        BA.LegendHelper._requestLayer(layer, ignoreErrors).then(
                            function () {
                                BA.async(_delayed, 50);
                            },
                            function (err) {
                                BA.log.error(err);
                                if (ignoreErrors) {
                                    BA.async(_delayed, 50);
                                } else {
                                    d.reject(err);
                                }
                            }
                        );
                    } else {
                        BA.LegendHelper._processLegendLayer(layer).then(
                            function () {
                                BA.async(_delayed, 50);
                            },
                            function (err) {
                                BA.log.error(err);
                                if (ignoreErrors) {
                                    BA.async(_delayed, 50);
                                } else {
                                    d.reject(err);
                                }
                            }
                        );
                    }

                } else {
                    BA.log.info('LegendHelper: completed all layers');
                    BA.LegendHelper._dataReady = true;

                    d.resolve();
                }
            } catch (ex) {
                if (ignoreErrors) {
                    BA.async(_delayed, 50);
                } else {
                    d.reject(err);
                }
            }
        }

        function _delayed() {
            _doLayer();
        }

        if (layerObjects && layerObjects.length > 0) {
            BA.async(_delayed, 200);
        }

        return d.promise();
    },

    //------------------------------------------------------------------------------------
    // Handles list of layer objects while making async requests but returns the
    // data in same order as the layers array (FeatureLayer and FeatureCollection)
    //
    _processLegendLayers: function (layers) {
        var d            = $j.Deferred();
        var ignoreErrors = true;

        function _doLayer(queue) {
            var obj;
            try {
                if (queue.length > 0) {
                    obj = queue.pop();

                    BA.LegendHelper._processLegendLayer(obj).then(
                        function () {
                            _doLayer(queue);
                        },
                        function (err) {
                            BA.log.error(err);
                            if (ignoreErrors) {
                                _doLayer(queue);
                            } else {
                                d.reject(err);
                            }
                        }
                    );
                } else {
                    d.resolve();
                }
            } catch (ex) {
                if (ignoreErrors) {
                    _doLayer(queue);
                } else {
                    d.reject(err);
                }
            }
        }

        if (layers && layers.length > 0) {
            _doLayer(layers);
        }

        return d.promise();
    },

    //------------------------------------------------------------------------------------
    // Requests layers in a Map Service
    //
    // This will pull out the layer definition drawingInfo of any layers in a map service
    //
    _requestMapService            : function (url, ignoreErrors) {
        var d        = $j.Deferred();
        var token    = BA.TokenProvider.getSavedToken()
        ignoreErrors = ignoreErrors || true;

        $j.ajax({
            url     : url,
            data    : {
                f    : 'json',
                token: token
            },
            datatype: 'json',
            timeout : Math.floor(BA.LegendHelper._timeout / 2)
        }).then(
            function (response) {
                var layers = [], j, u;
                try {
                    var obj = JSON.parse(response);
                    if (!obj.error && obj.layers) {
                        layers = [];
                        for (j = 0; j < obj.layers.length; j++) {
                            if (BAut.isDef(obj.layers[0].id)) {
                                u = url + '/' + obj.layers[j].id;
                                layers.push(u);
                            }
                        }
                        // process all the service layers as urls
                        BA.LegendHelper.parseAllLayersRenderingData(layers, ignoreErrors).then(
                            function () {
                                d.resolve();
                            },
                            function (err) {
                                if (!ignoreErrors) {
                                    d.reject(err);
                                } else {
                                    d.resolve();
                                }
                            }
                        );
                    } else {
                        if (!ignoreErrors) {
                            d.reject(err);
                        } else {
                            console.log(obj.error);
                            d.resolve();
                        }
                    }
                } catch (ex) {
                    if (!ignoreErrors) {
                        d.reject(ex);
                    } else {
                        console.log(ex);
                        d.resolve();
                    }
                }
            },
            function (err) {
                if (!ignoreErrors) {
                    d.reject(err);
                } else {
                    console.log(err);
                    d.resolve();
                }
            }
        );
        return d.promise();
    },
    _workingLegendTimer           : null,
    _workingLegendElapsedWaitTimer: null,

    //------------------------------------------------------------------------------------
    // Processes the LegendHelper 'data' object to generate the Legend content
    //
    generateLegendContent: function (containerElement, doCleanup) {

        function _genLegendUI() {
            BA.LegendHelper._legend = new BA.Legend();

            BA.LegendHelper._currentLayerTitle = null;

            $j.each(BA.LegendHelper.data, function (k, v) {
                BA.LegendHelper._generateLegendItemForFeature(containerElement, v);
            });
            // if (doCleanup) {
            //     BA.LegendHelper.reset();
            // }
        }

        // Before we generate the Legend UI, the data has to be ready
        // If the data is not ready we wait for it up to 10 seconds.

        function _stopTrying() {
            BA.log.error("Timed out attempting to generate Legend");
            BA.PageController.hideBusy('createLegend');
            if (BA.LegendHelper._workingLegendTimer) {
                clearTimeout(BA.LegendHelper._workingLegendTimer);
                BA.LegendHelper._workingLegendTimer = null;
            }
            if (BA.LegendHelper._workingLegendElapsedWaitTimer) {
                clearTimeout(BA.LegendHelper._workingLegendElapsedWaitTimer);
                BA.LegendHelper._workingLegendElapsedWaitTimer = null;
            }
        }

        function _onWaitInterval() {
            if (BA.LegendHelper._dataReady) {
                if (BA.LegendHelper._workingLegendElapsedWaitTimer) {
                    clearTimeout(BA.LegendHelper._workingLegendElapsedWaitTimer);
                    BA.LegendHelper._workingLegendElapsedWaitTimer = null;
                }
                _genLegendUI();
            } else {
                _waitToCompletion();
            }
        }

        function _waitToCompletion() {
            BA.LegendHelper._workingLegendTimer = BA.async(_onWaitInterval, 1000);
        }

        // Start the legend now if the data is ready
        if (BA.LegendHelper._dataReady) {
            BA.PageController.hideBusy('createLegend');
            if (BA.LegendHelper._workingLegendElapsedWaitTimer) {
                clearTimeout(BA.LegendHelper._workingLegendElapsedWaitTimer);
                BA.LegendHelper._workingLegendElapsedWaitTimer = null;
            }
            _genLegendUI();

        } else {
            // try again a few times and see
            //show spinner
            BA.PageController.showBusy('createLegend');

            _waitToCompletion();

            if (!BA.LegendHelper._workingLegendElapsedWaitTimer) {
                // Set a timeout that will abandon the location loop
                BA.LegendHelper._workingLegendElapsedWaitTimer = BA.async(_stopTrying, 16000);
            }
        }
    },

    _currentServiceUrl: null,
    _currentLayerTitle: null,

    //------------------------------------------------------------------------------------
    // Generate html to represent a feature in the Legend
    //
    _generateLegendItemForFeature: function (containerElement, def) {
        var row, cRow, html    = null, isUniqueOrClass = false;
        var _nestedLabelHeight = 36;

        function _onGeneratedContent(arg, symbols) {}

        try {
            // LABELS
            if (BAut.hasText(def._layerTitle)) {
                if (BA.LegendHelper._currentLayerTitle) {
                    // Generate a Layer title
                    // spacer
                    $j('<tr class="legendRowSpacer">').appendTo(containerElement);
                    // legend row item
                    row = $j('<tr>').attr('class', 'legendItemRowDiv legendItemLayerRowDiv');
                    $j('<td class="legendItemLayerTitle">')
                        .attr('colspan', '2')
                        .html(BA.LegendHelper._currentLayerTitle)
                        .appendTo(row);
                    $j('<td class="legendLayerLabelDiv">')
                        .appendTo(row);
                    row.appendTo(containerElement);
                }
                BA.LegendHelper._currentLayerTitle = def._layerTitle;
            }
            // SERVICE URLs
            else if (def._serviceUrl) {
                if (BAut.hasText(def._serviceUrl.trim())) {
                    BA.LegendHelper._currentServiceUrl = def._serviceUrl;
                } else {
                    BA.LegendHelper._currentServiceUrl = null;
                }
            }
            // SYMBOLs
            // (expect that the label has already been set)
            else if (BA.LegendHelper._currentLayerTitle) {

                // if the current symbol is unique value or class breaks, add title first
                isUniqueOrClass = (def.renderer.type == 'classBreaks' || def.renderer.type == 'uniqueValue');
                if (isUniqueOrClass) {
                    // Generate a category title
                    cRow = $j('<tr>').attr('class', 'legendItemRowDiv');
                    $j('<td>')
                        .attr('class', 'legendSectionItemTitle')
                        .css('width', '99%')
                        .attr('colspan', '2')
                        .html(BA.LegendHelper._currentLayerTitle)
                        .appendTo(cRow);
                    $j('<td>').appendTo(cRow);
                    BA.LegendHelper._currentLayerTitle = null;
                }
                // render the legend row item symbol

                // the following symbol adds Legend rows as needed based on symbol type
                BA.LegendHelper._legend._drawingInfoToLegend(def, _onGeneratedContent, null, containerElement, BA.LegendHelper._currentLayerTitle, cRow);

                // reset title
                BA.LegendHelper._currentLayerTitle = null;
            } else {
                BA.log.error("Error: Invalid LegendHelper data structure");
            }
        } catch (ex) {
            BA.onException(ex);
        }
    },

    pixelValue: function (pointValue) {
        return pointValue * 1.333;
    },

    // color is an array [r,g,b,a]
    colorValue: function (color) {
        return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
    },

    alphaValue: function (color) {
        var alpha = color[3] / 255.0;
        return alpha * this._layerTransparency;
    },

    _getColor: function (feature, colorInfo) {
        // required information to get color
        if (!(feature.properties && colorInfo && colorInfo.field && colorInfo.stops)) {
            return null;
        }

        var attr         = feature.properties;
        var featureValue = attr[colorInfo.field];
        var lowerBoundColor, upperBoundColor, lowerBound, upperBound;
        var normField    = colorInfo.normalizationField;
        var normValue    = attr ? parseFloat(attr[normField]) : undefined;
        if (featureValue === null || (normField && ((isNaN(normValue) || normValue === 0)))) {
            return null;
        }

        if (!isNaN(normValue)) {
            featureValue /= normValue;
        }

        if (featureValue <= colorInfo.stops[0].value) {
            return colorInfo.stops[0].color;
        }
        var lastStop = colorInfo.stops[colorInfo.stops.length - 1];
        if (featureValue >= lastStop.value) {
            return lastStop.color;
        }

        // go through the stops to find min and max
        for (var i = 0; i < colorInfo.stops.length; i++) {
            var stopInfo = colorInfo.stops[i];

            if (stopInfo.value <= featureValue) {
                lowerBoundColor = stopInfo.color;
                lowerBound      = stopInfo.value;
            } else if (stopInfo.value > featureValue) {
                upperBoundColor = stopInfo.color;
                upperBound      = stopInfo.value;
                break;
            }
        }

        // feature falls between two stops, interplate the colors
        if (!isNaN(lowerBound) && !isNaN(upperBound)) {
            var range = upperBound - lowerBound;
            if (range > 0) {
                // more weight the further it is from the lower bound
                var upperBoundColorWeight = (featureValue - lowerBound) / range;
                if (upperBoundColorWeight) {
                    // more weight the further it is from the upper bound
                    var lowerBoundColorWeight = (upperBound - featureValue) / range;
                    if (lowerBoundColorWeight) {
                        // interpolate the lower and upper bound color by applying the
                        // weights to each of the rgba colors and adding them together
                        var interpolatedColor = [];
                        for (var j = 0; j < 4; j++) {
                            interpolatedColor[j] = Math.round((lowerBoundColor[j] * lowerBoundColorWeight) + (upperBoundColor[j] * upperBoundColorWeight));
                        }
                        return interpolatedColor;
                    } else {
                        // no difference between featureValue and upperBound, 100% of upperBoundColor
                        return upperBoundColor;
                    }
                } else {
                    // no difference between featureValue and lowerBound, 100% of lowerBoundColor
                    return lowerBoundColor;
                }
            }
        }
        // if we get to here, none of the cases apply so return null
        return null;
    },

});

BA.LegendHelper = new BA.Class.LegendHelperClass();

