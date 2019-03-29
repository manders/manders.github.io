export default class BASitesAdapter{

    /* Service URL for sites layer */
    static get ServiceURL() {
        return this.hasOwnProperty('_serviceURL') ? this._serviceURL : null;
    }
    static set ServiceURL(url) { this._serviceURL = url; }

    /*
     * Current Site
     * {
     *   displayName: <string>,
     *   featureId: feature ID,
     *   location: [lat, lng]
     * }
     */
    static get CurrentSite() {
        return this.hasOwnProperty('_currentSite') ? this._currentSite : null;
    }
    static set CurrentSite(s) { this._currentSite = s; }


    static getSitesByFeatureId(siteFeatureIds, siteLayerId) {
        var self = this;
        var d = $j.Deferred();

        var requestUrl    = this._serviceURL + "/query";
        var requestParams = {
            outSR : 4326,
            where : "1=1",
            returnGeometry: "true",
            resultOffset: 0,
            outFields: "*",
            objectIds: siteFeatureIds.join(',')
        };

        BA.arcGISRequests.executeRequest({url: requestUrl, data: requestParams}).then(
            function (response) {
                var sites = [], obj;

                $j.each(response.features, function(k,v){
                    sites.push(v.attributes);
                });
                obj   = {
                    fields: response.fields,
                    sites : sites
                };

                d.resolve(obj);
            },
            function (err) {
                d.reject(err);
            }
        );

        return d.promise();
    }
}
