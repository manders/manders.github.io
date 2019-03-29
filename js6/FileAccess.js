export default class FileAccess {

    constructor(){
        let fileInfo = {};
    }

    setFileInfo(f){
        console.log("FileAccess: setFileInfo");
        console.log("FileAccess: _attachAnnotations");
        this.fileInfo = f;
    }

    /* Gets the 360 image - the image may have annotations appended
     *
     * options: must be either <url to image> or <url to layer + featureId + attachmentId>
     *   - url  optional path to image on web
     *   - ids  optional [feature ID, attachment ID]
     *   - layerUrl url to feature layer
     */
    get360Image(options){
        console.log("FileAccess: get360Image");

        return 'asdf';
    }

    /*
     * Saves the 360 image
     *
     * imageData: one of the following:
     *    - just the jpeg image
     *    - jpeg with annotations appended
     *    - annotations that includes url to the jpeg image
     *
     * annotations: object
     *
     * options: {
     *    featureId: <feature ID of site or feature>,
     *    attachmentId: <null if new, or ID if exists>
     *    useEmbeddedAnnotations: T/F
     * }
     */
    save360Image(imageData, annotationsObject, options){
        console.log("FileAccess: save360Image");

        if (annotationsObject) {
            if (options.useEmbeddedAnnotations) {
                this._attachAnnotations(annotationsObject, imageData);
            }
            else{
                this.saveAnnotations(annotationsObject, options);
            }
        }
    }

    /*
     * Save annotations separately from image
     */
    saveAnnotations(annotationsObject, options){
        console.log("FileAccess: saveAnnotations");

    }

    is360Image(imageData){
        console.log("FileAccess: is360Image");
        return('no image data');
    }

    /*
     * Saves annotations to the end of the image data
     */
    _attachAnnotations(annotationsObject, imageData){
        console.log("FileAccess: _attachAnnotations");

    }

    /*
     * Returns annotations object if one is appended to the JPEG image
     */
    _getEmbeddedAnnotations(imageData){
        console.log("FileAccess: _getEmbeddedAnnotations");

    }


    /*
     * Gets a normal rectangular image from url, local device, or other
     *
     * Options must be either
     *  => <url to image>
     *  => or <url to layer + featureId + attachmentId>
     *  => or null = fetch from local device
     *
     *  options:
     *    - url,
     *    - ids  [feature ID, attachment ID]
     *   - layerUrl url to feature layer
    */
    getFlatImage(options){

    }

    /*
     * Saves the thumbnail
     *
     * base64Thumb: thumbnail in base64 encoding
     *
     * options:
     *   siteId,
     *   featureId,
     *   attachmentId
     */
    saveThumbnail(base64Thumb, options){

    }

    /*
     * Get an image from local gallery on device
     * This is invoked from HTML element click
     */
    onGetLocalImage(files){
        console.log("FileAccess: onGetLocalImage")

        // determine if the image is 360

        // get annotations if any

        // return imageData, flag if 360, and annotations object
    }

    getMostRecentThumbnail (thumbnails) {
        console.log("FileAccess: getMostRecentThumbnail")
        var thumb;
        if (thumbnails) {
            $j.each(thumbnails, function (k, v) {
                if (!thumb) {
                    thumb = v;
                } else {
                    if (v.created > thumb.created) {
                        thumb = v;
                    }
                }
            });
        }
        return thumb;
    }

    setCurrentAttachmentFilename(filename){
        console.log("FileAccess: setCurrentAttachmentFilename")

        this.attachmentInfo.attachmentFilename = filename;
        if (id) {
            this.attachmentInfo.attachmentId = id;
        }
        this.attachmentInfo.isImage = this.isImageAttachment();
        $j('#atta_filename').html(filename);
        $j('#atta_name').v(filename);
        $j('#atta_caption').v(this.removeExtension(filename));
    }
}



