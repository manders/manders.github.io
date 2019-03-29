import ImageProcessor from './imageProcessing'
import GEDynamics from "./geDynamics";
import PSVMath from "./psvMath";

export default class PSV360 {

    constructor(adapter) {
        this.PSViewer                      = null;
        this.imageProcessor                = new ImageProcessor(adapter);
        this._360_currentImage             = 0;
        this._360_photoTrueNorthAdjustment = 0;
        this._options360                   = {};
        this.fileAdapter                   = adapter;
        this.editMode                      = null;

        this.panos = [
            {
                url   : './images/360/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
                desc  : 'Bryce Canyon',
                target: {
                    longitude: 3.848,
                    latitude : -0.244
                }
            },
            {
                url   : './images/360/R0010131_esri.jpg',
                desc  : 'ESRI Building M1 lobby</b>',
                target: {
                    longitude: 3.848,
                    latitude : -0.244
                }
            },
            {
                url   : './images/360/Bryce-Canyon-By-Jess-Beauchemin.jpg',
                desc  : 'Bryce Canyon 2',
                target: {
                    longitude: 3.715,
                    latitude : 0.574
                }
            },
            {
                url   : './images/360/PANO_20140718_161703.jpg',
                desc  : 'Chinese government building</b>',
                target: {
                    longitude: 3.848,
                    latitude : -0.244
                }
            }
        ];

        this.defaultLon = 0;
        this.defaultLat = 0;

        function _fitOuter() {
            var curHt = $j(window).height();
            var curWt = $j(window).width();
            $j('#_ba_pano_360container').width((curWt - 10) + 'px');
            $j('#_ba_pano_360container').height((curHt - 10) + 'px');
        }

        $j("#_ba_pano_360frame")
            .resizable({
                containment: '#_ba_pano_360container',
                aspectRatio: true,
                handles    : "nw, ne, sw,se"
            })
            .draggable({
                containment: '#_ba_pano_360container'
            });

        _fitOuter();

        // Resize event handler
        $j(window).resize(function () {
            _fitOuter();
        });
    }

    static set EditMode(t) {
        this._editMode = t;
    }

    static get EditMode() {
        return this.hasOwnProperty('_editMode') ? this._editMode : PSV360.EditType.none;
    }

    static get EditType() {
        return {
            none        : 0,
            addImageSpot: 1,
            addMarker   : 2,
            addLine     : 3,
            addPolygon  : 4,
            addLabel    : 5
        }
    }

    showPopup(msg, saveCB, cancelCB, placement) {
        var confirmBox = $j("#_ba_pano_360confirm");
        confirmBox.find("._ba_pano_360message").text(msg);
        confirmBox.find("._ba_pano_360save,._ba_pano_360cancel").unbind().click(function () {
            confirmBox.hide(300);
        });
        confirmBox.find("._ba_pano_360save").click(saveCB);
        confirmBox.find("._ba_pano_360cancel").click(cancelCB);

        if (placement) {
            switch (placement) {
                case('bottomright'): {
                    var wt = confirmBox.width();
                    confirmBox.css('right', '40px');
                    confirmBox.css('bottom', '100px');
                    break;
                }
            }
        }
        confirmBox.show(500);
        view.PSViewer._displayCompassReading(0);
    }

    showDialog(html, okCB, cancelCB, placement) {
        var dialog = $j("#_ba_pano_360dialog");
        var outer = $j('#_ba_pano_dialogContainer');
        outer.empty();

        outer.html(html);

        dialog.find("._ba_pano_dialog_OK").click(okCB);
        dialog.find("._ba_pano_dialog_Cancel").click(cancelCB);

        if (placement && placement.top && placement.left) {
            dialog.css('top', placement.top);
            dialog.css('left', placement.left);
        }
        dialog.show(500);
        //view.PSViewer._displayCompassReading(0);
    }
    hideDialog(){
        $j("#_ba_pano_360dialog").hide();
        $j("#_ba_pano_dialogContainer").empty();
    }

    _lang(key, param) {
        console.log('get Language: ' + key);
    }

    _onCancelThumbnail() {
        // TODO: implement cancel

        $j('#_ba_pano_360container').hide();
    }

    _extractThumbnailImage(canvas) {
        var d = $j.Deferred();

        this.imageProcessor.generateThumbnailBytes(canvas).then(
            function () {
                var bytes     = BAFS.attach.info.thumbnailImage;
                var imgSource = BAFS.imagePrefix + bytes;
                $j('#_ba_pano_thumb_preview').attr('src', imgSource);
                $j('#_ba_pano_thumb_preview').show();
                d.resolve();
            },
            function (err) {
                console.log(err);
                d.reject(err);
            }
        );
        return d.promise();
    }

    _onSetThumbnail() {
        var view = window.view;

        // save thumbnail from within frame
        var frame     = $j("#_ba_pano_360frame");
        var rawtop    = frame.css('top');
        var rawleft   = frame.css('left');
        var top       = parseInt(rawtop.substr(0, rawtop.length - 2));
        var left      = parseInt(rawleft.substr(0, rawleft.length - 2));
        var width     = frame.width();
        var height    = frame.height();
        var canvas    = document.getElementById("_ba_pano_thumb_canvas");
        canvas.width  = width;
        canvas.height = height;
        var ctx       = canvas.getContext("2d");

        // extract image from main canvas
        var c = $j('#_ba_pano_photosphere .psv-canvas-container canvas')[0];
        $j(c).attr('id', 'mainSphericalCanvas');
        var mainCanvas = document.getElementById('mainSphericalCanvas');

        // capture visible area of spherical image
        var imgSource = mainCanvas.toDataURL('image/jpeg');

        var tmpImg = $j('#_ba_pano_thumbnail_hidden_image');
        var imgClipped;

        var img    = new Image();
        img.onload = function () {
            var drawWidth   = mainCanvas.width * (width / window.innerWidth);
            var drawHeighth = drawWidth * (height / width);
            var drawTop     = top * mainCanvas.height / window.innerHeight;
            var drawLeft    = left * mainCanvas.width / window.innerWidth;

            ctx.drawImage(img, drawLeft, drawTop, drawWidth, drawHeighth, 0, 0, width, height);

            img.onload = function _add360() {
                // add the 360 badge overlay at top/right side of thumbnail
                ctx.drawImage(img, 0, 0, 48, 35, width - 90, 32, 48, 35);

                imgClipped = canvas.toDataURL('image/jpeg');
                $j("#_ba_pano_thumb_preview").attr('src', imgClipped);
                $j('#_ba_pano_thumb_confirm').show(200);
                $j('#_ba_pano_360container').hide();

                $j('#_ba_pano_thumbnail_cancel').on('click', function () {
                    $j('#_ba_pano_thumb_confirm').hide();
                });
                $j('#_ba_pano_thumbnail_save').on('click', function () {
                    // TODO: save thumbnail

                    $j('#_ba_pano_thumb_confirm').hide();
                });
                // extract thumnail bits
                view._extractThumbnailImage(canvas).then(
                    function (data) {
                        // check if site is created

                        // if needed, save current image to site

                        console.log("created thumb");
                        // upload thumbnail

                    },
                    function (err) {
                        console.log(err);
                    }
                );
                console.log("completed thumbnail extraction");
            };
            img.src    = './images/icon360_48x35.png';
        };

        img.src = imgSource;

        // tmpImg.on('load', function(){
        //     ctx.drawImage(tmpImg, left, top, width, height, 0, 0, width, height);
        //     imgClipped = canvas.toDataURL('image/jpeg');
        //
        // });
        //
        // tmpImg.attr('src', imgSource);

        //
        // ctx.drawImage(mainCanvas, left, top, width, height, 0, 0, width, height);
        //
        // // extract thumnail bits
        // var data = PSViewer._extractThumbnailImage(canvas);
        //
        $j('#_ba_pano_360container').hide();
        console.log("asdf:)")
    }

    _onSetTrueNorth() {
        // save any changes made to the image @@@@@@@@@@@@@@@@

        $j('#_ba_pano_compassCL').hide();
        // Save photo true north adjustment
        var lon    = PSVMath.rad2deg(view.PSViewer.prop.position.longitude) % 360;
        var offset = (lon > 180) ? -(360 - lon) : lon;
        view._360_photoTrueNorthAdjustment += offset;

        // if (window.localStorage){
        //   window.localStorage.setItem('_360_trueNorth_adjustment',       this._360_photoTrueNorthAdjustment);
        // }

        // recreate the  image
        view.create_360_image();
    }

    _onCancelTrueNorth() {
        $j('#_ba_pano_compassDiv').hide();
        $j('#_ba_pano_compassCL').hide();
    }

    create_360_image() {
        var self      = this;
        // reset image viewer
        this.PSViewer = null;
        $j('#_ba_pano_photosphere').empty();
        $j('#_ba_pano_compassDiv').show();

        this.PSViewer = new PhotoSphereViewer({
            container        : '_ba_pano_photosphere',
            panorama         : this.panos[0].url,
            caption          : this.panos[0].desc,
            loading_img      : './images/photosphere-logo.gif',
            anim_speed       : '-2rpm',
            default_fov      : 50,
            default_long     : PSVMath.deg2rad(this.defaultLon),
            default_lat      : PSVMath.deg2rad(this.defaultLat),
            sphere_correction: {pan: PSVMath.deg2rad(view._360_photoTrueNorthAdjustment), tilt: 0, roll: 0},
            fisheye          : true,
            move_speed       : 1.1,
            // clampLatitude: true,
            time_anim        : false,
            //    touchmove_two_fingers: true,
            //    mousemove_hover: true,
            navbar           :
                [
                    'autorotate', 'zoom', 'download', 'markers', 'exif', 'facts',
                    {
                        id       : 'true_north_button',
                        title    : 'Set True North',
                        className: 'custom-button',
                        content  : '<img src="./images/true_north.png" class="trueNorthButton">',
                        onClick  : function () {
                            $j('#_ba_pano_compassDiv').show();
                            $j('#_ba_pano_compassCL').show();
                            self.showPopup(
                                'Position image True North in center of screen and click Save',
                                self._onSetTrueNorth,
                                self._onCancelTrueNorth
                            );
                        }
                    },
                    {
                        id       : 'set_thumbnail_button',
                        title    : 'Select Thumbnail',
                        className: 'custom-button',
                        content  : '<img src="./images/thumbnail_button.png" class="thumbnailButton">',
                        onClick  : function () {

                            $j('#_ba_pano_360container').show(400);
                            self.showPopup(
                                'Move/resize Thumbnail frame and choose Save',
                                self._onSetThumbnail,
                                self._onCancelThumbnail,
                                'bottomright'
                            );
                        }
                    },
                    {
                        title    : 'Change image',
                        className: 'custom-button',
                        content  : '<img src="./images/nextimage32.png" class="nextImageButton">',
                        onClick  : (function () {
                            var i       = 0;
                            var loading = false;

                            return function () {
                                if (loading) {
                                    return;
                                }

                                i       = 1 - i;
                                loading = true;
                                self.PSViewer.clearMarkers();

                                self._360_currentImage = (self._360_currentImage + 1) % self.panos.length;

                                try {
                                    self.PSViewer.setPanorama(self.panos[self._360_currentImage].url, self.panos[self._360_currentImage].target, true)
                                        .then(function () {
                                            view.PSViewer.setCaption(self.panos[self._360_currentImage].desc);
                                            loading = false;
                                        });
                                } catch (ex) {
                                    console.log(ex);
                                }
                            }
                        }())
                    },
                    'caption', /* 'gyroscope',*/ 'stereo', 'fullscreen'
                ],
            markers          : (function () {
                var a = [];
            //
            //     for (var i = 0; i < Math.PI * 2; i += Math.PI / 4) {
            //         for (var j = -Math.PI / 2 + Math.PI / 4; j < Math.PI / 2; j += Math.PI / 4) {
            //             a.push({
            //                 id       : '#' + a.length,
            //                 tooltip  : '#' + a.length,
            //                 latitude : j,
            //                 longitude: i,
            //                 image    : './images/star_bubble.png',
            //                 width    : 32,
            //                 height   : 32,
            //                 anchor   : 'bottom center',
            //                 data     : {
            //                     deletable: true
            //                 }
            //             });
            //         }
            //     }
            //
            //     a.push({
            //         id       : 'lorem',
            //         tooltip  : {
            //             content : 'Lorem ipsum dolor ist amet et consecturo.',
            //             position: 'bottom right'
            //         },
            //         content  : document.getElementById('pin-content').innerHTML,
            //         latitude : 0,
            //         longitude: 0.20,
            //         image    : './images/pin2.png',
            //         width    : 32,
            //         height   : 32,
            //         anchor   : 'bottom center'
            //     });
            //
            //     // a.push({
            //     //   id: 'polygon-sky',
            //     //   svgStyle: {
            //     //     fill: 'rgba(230, 190, 0, 0.6)'
            //     //   },
            //     //   polygon_rad: (function() {
            //     //     var points = [];
            //     //
            //     //     for (var i = 0; i < Math.PI * 2; i += Math.PI / 8) {
            //     //       points.push(i);
            //     //       points.push(Math.PI / 8);
            //     //     }
            //     //
            //     //     return points;
            //     //   }())
            //     // });
            //
                a.push({
                    id        : 'polygon',
                    content   : 'This mountain is so great it has dots on it!',
                    polygon_px: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
                    svgStyle  : {
                        fill       : 'url(#points)', //'rgba(255,0,0,0.3)',
                        stroke     : 'rgba(255, 130, 50, 0.8)',
                        strokeWidth: '4px'
                    },
                    tooltip   : {
                        content : 'This is a mountain',
                        position: 'right bottom'
                    }
                });
            //
                a.push({
                    id          : 'polyline',
                    polyline_rad: [5.924, 0.064, 5.859, -0.061, 5.710, -0.132, 5.410, -0.287, 4.329, -0.490, 3.838, -0.370, 3.725, -0.241],
                    svgStyle    : {
                        stroke        : 'rgba(80, 100, 50, 0.8)',
                        strokeLinecap : 'round',
                        strokeLinejoin: 'round',
                        strokeWidth   : '10px'
                    },
                    tooltip     : 'This is a track'
                });
            //
            //     a.push({
            //         id       : 'html-img-demo',
            //         html     : 'HTML & Image',
            //         scale    : [0.5, 1.5],
            //         className: 'demo-label',
            //         longitude: 0.5,
            //         latitude : -0.48
            //     });
            //
            //     // a.push({
            //     //   id: 'gif',
            //     //   image: 'assets/photosphere-logo.gif',
            //     //   width: 100,
            //     //   height: 100,
            //     //   longitude: 0.60,
            //     //   latitude: -0.35
            //     // });
            //
                a.push({
                    id       : 'text',
                    html     : 'This <b>is</b> text <img src="./images/pin3.png" style="height: 24px; vertical-align: top;"/>',
                    anchor   : 'bottom right',
                    style    : {
                        color     : 'white',
                        fontSize  : '20px',
                        fontFamily: 'Helvetica, sans-serif',
                        textAlign : 'center'
                    },
                    longitude: 0.45,
                    latitude : -0.4
                });
            //
            //     a.push({
            //         id       : 'svg-demo',
            //         html     : 'SVG marker demo',
            //         scale    : [0.5, 1.5],
            //         className: 'demo-label',
            //         longitude: -0.5,
            //         latitude : -0.48
            //     });
            //
            //     a.push({
            //         id       : 'circle',
            //         tooltip  : 'A circle of radius 30',
            //         circle   : 30,
            //         svgStyle : {
            //             fill       : 'rgba(255,255,0,0.3)',
            //             stroke     : 'yellow',
            //             strokeWidth: '2px'
            //         },
            //         longitude: -0.5,
            //         latitude : -0.28,
            //         anchor   : 'center right'
            //     });
            //
            //     a.push({
            //         id       : 'ellipse',
            //         tooltip  : 'An ellipse of radius 60/30',
            //         ellipse  : [60, 30],
            //         svgStyle : {
            //             fill       : 'rgba(255,255,0,0.3)',
            //             stroke     : 'yellow',
            //             strokeWidth: '2px'
            //         },
            //         longitude: -0.5,
            //         latitude : -0.28,
            //         anchor   : 'center left'
            //     });
            //
            //     a.push({
            //         id       : 'rect',
            //         tooltip  : 'A square a side 60',
            //         rect     : [60, 60],
            //         svgStyle : {
            //             fill       : 'rgba(255,255,0,0.3)',
            //             stroke     : 'yellow',
            //             strokeWidth: '2px'
            //         },
            //         longitude: -0.5,
            //         latitude : -0.38,
            //         anchor   : 'center right'
            //     });
            //
                a.push({
                    id       : 'path',
                    tooltip  : 'A custom path',
                    path     : 'M 0 0 L 60 60 L 60 0 L 0 60 L 0 0',
                    svgStyle : {
                        fill       : 'rgba(255,255,0,0.3)',
                        stroke     : 'yellow',
                        strokeWidth: '2px'
                    },
                    longitude: -0.5,
                    latitude : -0.38,
                    anchor   : 'center left'
                });
            //
            //     a.push({
            //         id       : 'scale-demo',
            //         html     : 'Marker scale demo',
            //         scale    : [0.5, 1.5],
            //         className: 'demo-label',
            //         longitude: 0,
            //         latitude : -0.48
            //     });
            //
            //     a.push({
            //         id       : 'scale-0',
            //         tooltip  : 'No scale',
            //         scale    : false,
            //         circle   : 20,
            //         svgStyle : {
            //             fill: 'rgba(0, 0, 0, 0.5)'
            //         },
            //         longitude: -0.1,
            //         latitude : -0.4
            //     });
            //
            //     a.push({
            //         id       : 'scale-1',
            //         tooltip  : '<code>zoom x2</code>',
            //         scale    : 2,
            //         circle   : 20,
            //         svgStyle : {
            //             fill: 'rgba(0, 0, 0, 0.5)'
            //         },
            //         longitude: 0,
            //         latitude : -0.4
            //     });
            //
            //     a.push({
            //         id       : 'scale-2',
            //         tooltip  : '<code>zoom x0.5 ; zoom x1.5</code>',
            //         scale    : [0.5, 1.5],
            //         circle   : 20,
            //         svgStyle : {
            //             fill: 'rgba(0, 0, 0, 0.5)'
            //         },
            //         longitude: 0.1,
            //         latitude : -0.4
            //     });

                return a;
            }())
        });

        this.PSViewer.on('click', function (e) {
            if (!window.view){
                return;
            }
            // User clicked on 360 image
            switch (PSV360.EditMode){
                case(PSV360.EditType.none):{
                    /* do nothing */
                    break;
                }
                case(PSV360.EditType.addImageSpot):{
                    // show popup that asks for
                    //    url OR local file system
                    //    url reference or save image to site
                    //
                    view.showDialog('Add image spot',
                        function(){
                            view.hideDialog();
                        },
                        function(){
                            view.hideDialog();
                        }
                    );
                    break;
                }
                case(PSV360.EditType.addMarker):{
                    view.showDialog('Add marker',
                        function(){
                            view.hideDialog();
                        },
                          function(){
                              view.hideDialog();
                          }
                        );

                    // view.PSViewer.addMarker({
                    //     id       : '#' + Math.random(),
                    //     tooltip  : 'Generated marker',
                    //     longitude: e.longitude,
                    //     latitude : e.latitude,
                    //     image    : './images/star_bubble.png',
                    //     width    : 32,
                    //     height   : 32,
                    //     anchor   : 'bottom center',
                    //     data     : {
                    //         deletable: true
                    //     }
                    // });

                    break;
                }
                case(PSV360.EditType.addLine):{
                    view.showDialog('Add line',
                        function(){
                            view.hideDialog();
                        },
                        function(){
                            view.hideDialog();
                        }
                    );

                    break;
                }
                case(PSV360.EditType.addPolygon):{
                    view.showDialog('Add polygon',
                        function(){
                            view.hideDialog();
                        },
                        function(){
                            view.hideDialog();
                        }
                    );

                    break;
                }
                case(PSV360.EditType.addLabel):{
                    view.showDialog('Add label',
                        function(){
                            view.hideDialog();
                        },
                        function(){
                            view.hideDialog();
                        }
                    );

                    break;
                }
            }
        });

        this.PSViewer.on('select-marker', function (marker, dblclick) {
            if (marker.data && marker.data.deletable) {
                if (dblclick) {
                    view.PSViewer.removeMarker(marker);
                } else {
                    // PSViewer.updateMarker({
                    //   id: marker.id,
                    //   image: 'assets/star_bubble.png'
                    // });
                }
            }
        });

        this.PSViewer.on('over-marker', function (marker) {
            console.log('over', marker.id);
        });

        this.PSViewer.on('leave-marker', function (marker) {
            console.log('leave', marker.id);
        });

        this.PSViewer.on('select-marker-list', function (marker) {
            console.log('select-list', marker.id);
        });

        this.PSViewer.on('goto-marker-done', function (marker) {
            console.log('goto-done', marker.id);
        });
    }

    // _hasValidSiteInfo() {
    //     return Util.hasText(_options360.baseUrl) && Util.hasText(_options360.siteId) && Util.hasText(_options360.token);
    // }

    /*
    * Prompts for image
    *   Image can be a URL to a valid 360 image, or panorama (must be equirectangular)
    *   Image can be a local resource
    *
    *   The image will be viewed/edited and potentially saved as a site attachment (as image or url reference)
    */
    _promptForImage() {
        var d = $j.Deferred();

        d.resolve();
        return d.promise();
    }

    /*  Asks for the location of a related image that will have an image marker
    *  displayed inside the current 360 image
    *
    *  The image may be a plain rectangular image, or 360.
    *  Location may be on the device, some URL, or another attachment ID to
    *  a site image attachment of the current site
    *
    *  IMAGES IN THIS CONTEXT
    *
    *  Any time we prompt for an image, that image will have to be uploaded
    *  to the site as an attachment (or we reference it as a URL).
    *
    *  There are two ways to relate images here.  One is to choose a location
    *  on the 360 image where a marker is to show, and then the image that
    *  we prompt for will be associated with that marker.
    *
    *  The other way to relate an image is to use a lat/lon location of the
    *  new image and let this program place the marker in the correct location
    *  on the current 360 image.
    *
    *  If the user is choosing an existing site image, we expect
    *  the lat/lon to come from that image without user interaction.  Otherwise
    *  the coordinate will come from exif data, or if no exif location exists,
    *  the image will have to be placed manually on our 360 image.
    *
    *  If the user chooses a plain rectangular image, it will be processed
    *  and uploaded as any other image in the BA system.  A thumbnail will
    *  be generated and uploaded as usual.
    *
    *  If the user chooses a 360 image, it will be loaded here.  The current
    *  360 image will have the image details saved into it (things like image
    *  url, jump location, and label), then the new image will become the
    *  current 360 image being displayed.
    *
    *  If the user annotates the new 360
    *  image, then the 360 image will have to be uploaded as a site attachment
    *  and the user will be prompted to capture a thumbnail, as so forth. This
    *  is because the metadata for annotations needs to be saved in the site
    *  attachment.  If the user does not annotate the image, then we only
    *  persist the image location and description inside the 360 image that
    *  contains the jump point.
    */
    _promptForRelatedImage() {
        var d = $j.Deferred();

        d.resolve();
        return d.promise();
    }

    startSpinner() {
        // avoid stuttering gif by re-adding html to DOM every time
        var div = $j('#thumbnailsGridSpinnerDiv');
        div.show(0, function () {
            $j('<div id="thumbnailsGridSpinner"></div>').appendTo(div);
        });
    }

    stopSpinner() {
        // var div = $j('#thumbnailsGridSpinnerDiv');
        // div.empty();
        // div.hide();
    }

    // updateProgressBar = function (percent, message) {
    //     // // $j('#progressFill').css('width', percent + '%');
    //     // var pstr = (percent) ? percent.toFixed(0) + '%' : '';
    //     // var str = BAut.hasText(message) ? message : '';
    //     // var msg = str + " " + pstr;
    //     // // var msg = str + pstr;
    //     // // $j('#progressStatus').html(msg);
    //     // // BAFS.log('PROGRESS: ' + msg);
    //     // BAFS.imgProcessingScreen.setText(msg);
    //     console.log(percent + '% ', +message);
    // }

}
