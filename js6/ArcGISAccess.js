import FileAccess from "./FileAccess";
import Util from "./util";
import PSVMath from "./psvMath";

export default class ArcGISAccess extends FileAccess {


    constructor() {
        super();
        let currentSite    = {
            id      : null,
            filename: null,
            location: {},
        };
        let Token          = null;
        let uploadTimeout  = null;
        let attachmentInfo = {};


    }

    isImageAttachment() {
        console.log("ArcGIS: isImageAttachment");

        return (this.attachmentInfo && this.attachmentInfo.attachmentFilename
            && this.getExtension(this.attachmentInfo.attachmentFilename, 1)
            && Util._ATTACHMENT_TYPES_TO_ICON_MAP.imageTypes[this.getExtension(this.attachmentInfo.attachmentFilename, 1)]
        );
    }

    // Depends on currentAttachmentInfo already being populated
    initializeAttachmentInfo() {
        var b = this.attachmentInfo;
        // we purposely do not initialize vars just set for
        // filename, id, isImage, thumbnailImage, and relatedRecordId
        b.featureId   = this.currentSite.id;
        b.name        = this.generatePhotoFilename();
        b.caption     = null;
        b.description = null;
        b.location    = null;
        b.latitude    = _nsORv('this.currentSite.location.lat', '');
        b.longitude   = _nsORv('this.currentSite.location.lon', '');
    }

    generatePhotoFilename() {
        return "P_" + new Date().getTime();
    };

    // Override base class functions to provide file access in
    // ArcGIS feature layers

    get360Image(options) {
        console.log("ArcGIS: get360Image");
        return "arcGISAccess: get360Image";
    }

    save360Image(imageData, annotationsObject, options) {
        console.log("ArcGIS: save360Image");

    }

    saveAnnotations(annotationsObject, options) {
        console.log("ArcGIS: saveAnnotations");

    }

    getFlatImage(options) {
        console.log("ArcGIS: isImageAttachment");

    }

    saveThumbnail(base64Thumb, options) {
        console.log("ArcGIS: saveThumbnail");

    }

    /*
     * Gets all point features from a feature layer within a
     * certain distance.
     *
     * url = <address to feature layer
     * distanceObj = {
     *    distance: <value>,
     *    units: <esriUnits>
     *  }
     */
     async getFeatures(url, distanceObj) {
        // compute nearby coordinates

     }

    /*
     * Fetches sites from current sites layer within a
     * certain distance.
     *
     * distanceObj = {
     *    distance: <value>,
     *    units: <esriUnits>
     *  }
     */
    async getSites(url, distanceObj) {
        // compute nearby coordinates

        var sites = [
            {name: "11 Tennessee", lat: 34.048729241172765, lon: -117.19991415739062},
            {name: "MG Transmission", lat: 34.05867, lon: -117.20005}
        ];
        var items = PSVMath.calculateBearingDist(sites, PSVMath.UnitsType.miles);

        await $j.each(items, function (k, v) {
            var d2r  = Math.PI / 180;
            var lat = 4 * d2r;
            var lon = v.bearing * d2r;
            var dStr = Util.formatNumberWithCommas(v.dist,2);
            var sTip = "<strong>" + v.name + "</strong>" + '<br>Distance:  ' + dStr + 'mi';

            view.PSViewer.addMarker({
                id       : '#' + "_ba_pano_site_" + Math.random(),
                tooltip  : sTip,
                latitude : lat,
                longitude: lon,
                image    : './images/blue_pin.svg',
                width    : 32,
                height   : 32,
                anchor   : 'bottom center',
                data     : {
                    deletable: true
                }
            });
        });
    }
}
