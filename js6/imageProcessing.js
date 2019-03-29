import Util from './util'
import ProgressPopup from './progress'

/*
 * This class does all the image resizing and thumbnail generation (client-side)
 *
 */
export default class ImageProcessor {

    constructor(fileAdapter) {

        // instance vars
        this.adapter           = fileAdapter;
        this.abortProcessing   = false;
        this.abortProcessTimer = null;

        /* Current Site info
         *   id
         *   location {lat,lon}
         *   filename
         *   layerId
         *   featureId
         *   imageTitle
         */
        this.currentSite          = null;
        this.currentThumbnailSize = 1;
        this.successfulUpload     = false;
    }

    // Begin the process to upload attachments and details
    processImageFile(file, nRemaining) {
        var d     = $j.Deferred();
        var nTodo = nRemaining;
        try {
            this.abortProcessing = false;
            // [As these asynchronous functions run they populate
            // the 'attachmentInfo' object]
            this.adapter.attachmentInfo.file = file;
            ProgressPopup.update(0, _lang("thumbs-processing", file.name));
            ProgressPopup.show();
            // this.resetUploadTimeout(1);

            $j.when({})
                .then(this.loadFile)
                .then(this.getAttachmentDetails, Util.onError)
                .then(this.resizeIfNeeded)
                .then(this.uploadAttachmentDetails, Util.onError)
                // Done
                .then(function () {
                        processCompleted(nTodo);
                        d.resolve();
                    },
                    Util.onError
                );
        } catch (ex) {
            Util.onError(ex);
            Util.onException(ex);
            ProgressPopup.hide(_lang("thumbs-upload-common-error"));
        }

        function processCompleted(nRemaining) {
            ProgressPopup.hide(Util._lang("thumbs-upload-successful"));
        }

        return d.promise();
    }

    // Begin the process to upload an ArcGIS supported binary file
    processBinaryFile(file) {
        var d = $j.Deferred();
        console.log("BINARY ATTACHMENT UPLOAD NOT IMPLEMENTED");
        console.log("(refresh page)");
        d.resolve();
        //
        // try {
        //    // [As these asynchronous functions run they populate
        //    // the 'BAFS.attach.info' object]
        //    BAFS.attach.info.file = file;
        //
        //    $j.when({})
        //      // Step 2: Load file from system/device
        //      .then(this.loadFile(file))
        //      // Step 3
        //      .then(this.getAttachmentDetails, onError)
        //      // Step B4: Upload binary attachment
        //      .then(this.uploadBinaryAttachment, onError)
        //      // Step B5: Upload related details
        //      .then(this.uploadAttachmentDetails, onError)
        //      // Done
        //      .then(processCompleted, onError);
        // }
        // catch(ex){
        //    console.log(ex);
        //    onError(ex);
        // }
        // function onError(e){
        //    // processing halted due to error
        //    d.reject(e);
        // }
        // function processCompleted(){
        //    d.resolve();
        // }
        return d.promise();
    }

    // STEP 1: Determine attachment type
    preFilterAttachmentFile(file) {
        try {
            var filesizeMb = ((file.size / 1024) / 1024).toFixed(3);
            if (filesizeMb > Util._MAX_INPUT_FILE_SIZE_FOR_ATTACHMENTS_MB) {
                return 'too_large';
            }
            var extension = file.name.split('.').pop().toUpperCase();
            if ((Util._ATTACHMENT_TYPES_TO_ICON_MAP.imageTypes[extension])) {
                // init current attachment information
                this.adapter.attachmentInfo = {
                    attachmentFilename: file.name,
                    filesizeMb        : filesizeMb,
                    isImage           : true
                };
                return 'image';
            } else if (Util._ATTACHMENT_TYPES_TO_ICON_MAP[extension]) {
                // binary attachment file
                // init current attachment information
                this.adapter.attachmentInfo = {
                    attachmentFilename: file.name,
                    filesizeMb        : filesizeMb,
                    isImage           : false
                };
                return 'binary';
            }
        } catch (ex) {
            Util.onException(ex);
        }
        return null;
    }

    // Load file from system/device.  The file normally comes from
    // the 'input' control browser functionality that shows a file selection
    // dialog.
    // Returns the binary results from reading the file
    loadFile() {
        var d = $j.Deferred();
        function updateResults(img) {
            // img contains the pre-processed image adjusted using exif data
            console.log('Original image size: ' + img.width + 'x' + img.height);
            this.adapter.attachmentInfo.workingImage  = img;
            this.adapter.attachmentInfo.workingCanvas = img;
            ProgressPopup.update(10, _lang("thumbs-image-loaded"));

            d.resolve();
        }


        if (!this.abortProcessing) {
            try {
                if (typeof window.FileReader !== 'function') {
                    d.reject("Error: image processing requires File API support.");
                } else {

                    var tSize = this.imageAttachmentTargetSize;
                    if (tSize <= 0) {
                        // swap to placeholder mini image

                    }
                    var options = {
                        maxWidth         : this.imageAttachmentTargetSize,
                        maxHeight        : this.imageAttachmentTargetSize,
                        canvas           : true,
                        pixelRatio       : 1, //window.devicePixelRatio,
                        downsamplingRatio: 1, //0.5,
                        orientation      : true,
                        contain          : true,
                        outputSizeLimit  : Util.MAX_OUTPUT_SIZE
                    };
                    if (!this.adapter.attachmentInfo.file) {
                        d.reject('no file');
                    } else {
                        LIm(this.adapter.attachmentInfo.file, updateResults, options);
                    }
                }
            } catch (ex) {
                Util.onException(ex);
                d.reject(ex);
            }
        } else {
            d.reject('aborted');
        }

        return d.promise();
    }

    getAttachmentDetails() {
        var d = $j.Deferred();
        try {
            if (!this.abortProcessing) {
                // set the current site information
                this.adapter.attachmentInfo.name = this.currentSite.filename;
                this.adapter.setCurrentAttachmentFilename(null, this.adapter.attachmentInfo.attachmentFilename);
                console.log("Image:" + this.adapter.attachmentInfo.attachmentFilename + " Orient: " + this.adapter.attachmentInfo.orientation);
                this.adapter.initializeAttachmentInfo();
                d.resolve();
            } else {
                d.reject('aborted');
            }
        } catch (ex) {
            d.reject(ex);
        }
        return d.promise();
    }

    uploadAttachment(data, filename, fileSizeMb) {
        var sendUrl;
        var errMsg = null;
        var def    = $j.Deferred();
        if (!this.abortProcessing) {
            var progressMessage = _lang("thumbs-upload-photo");
            ProgressPopup.update(0, progressMessage);

            try {
                // var layerId = BA.MyContentFS.currentSite.getLayerId();
                // var service = BA.Projects.currentStorage.getEsriLeafletFeatureLayerService(layerId);

                // if (relatedId) {
                //     sendUrl = REST.url_RelatedTable + relatedId + '/addAttachment';
                // }
                // else {
                //     var service           = BA.Projects.currentStorage.getLocationsFeatureLayerService();
                // var featureUrl = service.options.url;

                // sendUrl = featureUrl + BA.MyContentFS.currentSite.getObjectId() + '/addAttachment';
                sendUrl =
                    this.adapter.currentStorage.url + '/' +
                    this.currentSite.getLayerId() + '/' +
                    this.currentSite.getObjectId() +
                    '/addAttachment';
                // }

                var _formData = new FormData();
                _formData.append('name', 'attachment');
                _formData.append('attachment', data, filename);
                _formData.append('f', 'json');
                var _token = Util.Token;
                if (_token) {
                    _formData.append('token', _token);
                }

                // Uploading
                var _xhr      = new XMLHttpRequest();
                var timestamp = new Date().getTime();

                // show errors
                _xhr.onreadystatechange = function (oEvent) {
                    var mbs, elapsedSec;
                    if (_xhr.readyState === 4) {
                        if (_xhr.status >= 200 && _xhr.status <= 299) {
                            var r      = JSON.parse(_xhr.responseText);
                            var result = r.addAttachmentResult;
                            if (result && result.success) {
                                this.successfulUpload = true;

                                // update the network 'upload' rate to what we just got
                                elapsedSec = (new Date().getTime() - timestamp) / 1000;
                                mbs        = fileSizeMb / elapsedSec;

                                BAFS.network.stats.upload = mbs;
                                this.adapter.setCurrentAttachmentFilename(result.objectId, filename);
                                def.resolve('Uploaded!');

                            } else if (_xhr.responseText.indexOf('error') >= 0) {

                                if (r && r.error && r.error.details) {
                                    BAFS.network._failed();
                                    Util.onError(errObj.error.details[0]);
                                    errMsg = errObj.error.details[0];
                                }
                            } else {
                                BAFS.network._failed();
                                def.reject('upload failed');
                            }
                        } else {
                            BAFS.network._failed();
                            // this.hideProcessingSpinner(BA.IMAGE_PROCESSING_UNKNOWN_ERROR);
                            console.log('Upload Error: ' + _xhr.statusText);
                            errMsg = _xhr.statusText;
                        }
                    }
                };

                // Update progress bar
                _xhr.upload.addEventListener("progress", function (evt) {
                    var pct = (evt.loaded / evt.total) * 100;
                    ProgressPopup.update(pct, progressMessage);
                }, false);

                _xhr.ontimeout = function (e) {
                    BAFS.network._failed();
                    def.reject("Timed out");
                };

                _xhr.upload.addEventListener("error", function (e) {
                    Util.onError('network not available for image uploads');
                    BAFS.network.stats.error  = 'network error';
                    BAFS.network.stats.upload = 0;
                    BAFS.network._failed();
                    def.reject('network not available');
                });
                // cancelled
                _xhr.upload.addEventListener("abort", function (e) {
                    console.log('Image upload aborted');
                    d.reject('aborted');
                });

                _xhr.timeout = BAFS.uploadTimeout;

                _xhr.open('post', sendUrl, true);
                _xhr.send(_formData);
            } catch
                (ex) {
                console.log(ex);
                def.reject('Error uploading attachment: ' + ex);
            }
        } else {
            def.reject('aborted');
        }

        return def.promise();
    }

    // Generates the thumbnail before resolving.
    resizeIfNeeded() {
        var d      = $j.Deferred();
        var canvas = BAFS.attach.info.workingCanvas;
        var self   = this;

        try {
            if (!this.abortProcessing) {
                // Upload standardized image attachment
                this.generateStandardImageAndUpload(canvas, BAFS.attach.info.attachmentFilename).then(
                    function () {

                        console.log('Generating thumbnail...');
                        self.generateThumbnailBytes(canvas).then(
                            function () {
                                d.resolve();
                            },
                            function (er) {
                                console.log(er);
                                d.reject(er);
                            }
                        );
                    },
                    function (er) {
                        console.log(er);
                        d.reject(er);
                    }
                );
            } else {
                d.reject('aborted');
            }
        } catch (ex) {
            Util.onException(ex);
        }
        return d.promise();
    }

    hermiteImageResample(canvas, W, H, W2, H2) {
        var d = $j.Deferred();

        function resample_iterateComplete() {
            canvas.getContext("2d").clearRect(0, 0, Math.max(W, W2), Math.max(H, H2));
            canvas.width  = W2;
            canvas.height = H2;
            canvas.getContext("2d").putImageData(img2, 0, 0);

            ProgressPopup.update(100, _lang("thumbs-resize-completed"));
            d.resolve();
        }

        function resample_iterateAgain(val, stopAt, end) {
            var center_y, gx_a, gx_b, gx_g, gx_r;
            var weights_alpha, weights, weight;
            var x2, i, j, xx, yy;
            for (j = val; ((j < stopAt) && j < end); j++) {
                for (i = 0; i < W2; i++) {
                    x2            = (i + j * W2) * 4;
                    weight        = 0;
                    weights       = 0;
                    weights_alpha = 0;
                    gx_r          = 0;
                    gx_g          = 0;
                    gx_b          = 0;
                    gx_a          = 0;
                    center_y      = (j + 0.5) * ratio_h;
                    for (yy = Math.floor(j * ratio_h); yy < (j + 1) * ratio_h; yy++) {
                        var dy       = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
                        var center_x = (i + 0.5) * ratio_w;
                        var w0       = dy * dy; //pre-calc part of w
                        for (xx = Math.floor(i * ratio_w); xx < (i + 1) * ratio_w; xx++) {
                            var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                            var w  = Math.sqrt(w0 + dx * dx);
                            if (w >= -1 && w <= 1) {
                                //hermite filter
                                weight = 2 * w * w * w - 3 * w * w + 1;
                                if (weight > 0) {
                                    dx = 4 * (xx + yy * W);
                                    //alpha
                                    gx_a += weight * data[dx + 3];
                                    weights_alpha += weight;
                                    //colors
                                    if (data[dx + 3] < 255)
                                        weight = weight * data[dx + 3] / 250;
                                    gx_r += weight * data[dx];
                                    gx_g += weight * data[dx + 1];
                                    gx_b += weight * data[dx + 2];
                                    weights += weight;
                                }
                            }
                        }
                    }
                    data2[x2]     = gx_r / weights;
                    data2[x2 + 1] = gx_g / weights;
                    data2[x2 + 2] = gx_b / weights;
                    data2[x2 + 3] = gx_a / weights_alpha;
                }
            }

            function doAgain() {
                var pctComplete = (Math.round((j / end) * 100));
                ProgressPopup.update(0, pctComplete);

                // continue processing
                resample_iterateAgain(j, j + resample_loopAmount, end);
            }

            if (j < end) {
                setTimeout(doAgain, 0);
            } else {
                setTimeout(resample_iterateComplete, 0);
            }
        }

        if (!this.abortProcessing) {
            try {
                W2               = Math.round(W2);
                H2               = Math.round(H2);
                var img          = canvas.getContext("2d").getImageData(0, 0, W, H);
                var img2         = canvas.getContext("2d").getImageData(0, 0, W2, H2);
                var data         = img.data;
                var data2        = img2.data;
                var ratio_w      = W / W2;
                var ratio_h      = H / H2;
                var ratio_w_half = Math.ceil(ratio_w / 2);
                var ratio_h_half = Math.ceil(ratio_h / 2);

                var resample_loopEnd    = H2;
                var resample_loopAmount = Math.max(1, Math.floor(resample_loopEnd * 0.1));

                // begin image processing
                resample_iterateAgain(0, resample_loopAmount, resample_loopEnd);
            } catch (ex) {
                Util.onException(ex);
            }
        } else {
            d.reject('aborted');
        }
        return d.promise();
    }

    // Upload standardized image attachment
    generateStandardImageAndUpload(canvas, uploadFilename) {
        var d    = $j.Deferred();
        var self = this;

        function _onBlobReady(blob) {
            var filesizeMb = (blob.size / 1024 / 1024).toFixed(3);
            // upload image data as Site feature attachment
            console.log('Uploading image attachment (' + filesizeMb + 'Mb) ...');

            self.uploadAttachment(blob, uploadFilename, filesizeMb).then(
                function () {
                    console.log('(upload completed)');
                    d.resolve();
                },
                function (er) {
                    d.reject(er);
                }
            );
        }

        if (!this.abortProcessing) {
            try {
                // get image data
                if (this.imageAttachmentTargetSize <= 0) {
                    var blob = BAFS.network.getMissingBlob();
                    _onBlobReady(blob);
                } else {
                    canvas.toBlob(_onBlobReady, 'image/jpeg');
                }
            } catch (ex) {
                d.reject('Error processing image: ' + ex);
            }
        } else {
            d.reject('aborted');
        }

        return d.promise();
    }

    // Resample standard image down to standard thumbnail size
    generateThumbnailBytes(canvas) {
        var d              = $j.Deferred();
        var blobData, self = this;

        if (!this.abortProcessing) {
            try {
                ProgressPopup.update(0, _lang("thumbs-generate-thumb"));
                if (canvas.width < Util._ThumbnailImageDimension && canvas.height < Util._ThumbnailImageDimension) {
                    // no resize needed
                    blobData                                   = this.generateBlob(canvas);
                    this.adapter.attachmentInfo.thumbnailImage = blobData.bytes64;
                    this.currentThumbnailSize                  = blobData.bytes64.length;
                    d.resolve();
                } else {
                    // resample standard image result to thumbnail size (stage 2 reduction)
                    var thumbSz = this.getSizing(canvas.width, canvas.height, Util._ThumbnailImageDimension, Util._ThumbnailImageDimension);
                    this.hermiteImageResample(canvas, canvas.width, canvas.height, thumbSz.size.w, thumbSz.size.h).then(
                        function () {
                            blobData = self.generateBlob(canvas);
                            // save the thumbnail byte so they can be embedded into the related
                            // table attachment details record
                            this.adapter.attachmentInfo.thumbnailImage = blobData.bytes64;
                            this.currentThumbnailSize                  = blobData.bytes64.length;
                            var lenK                                   = (blobData.bytes64.length / 1024).toFixed(1);
                            console.log('Saved thumbnail size: ' + lenK + 'Kb');
                            d.resolve(blobData.bytes64.length);
                        },
                        function (er) {
                            console.log(er);
                            d.reject('Error resizing Thumbnail: ' + er);
                        }
                    );
                }
            } catch (ex) {
                d.reject('Error generating Thumbnail: ' + ex);
            }
        } else {
            d.reject('aborted');
        }

        return d.promise();
    }

    getSizing(width, height, targetWidth, targetHeight) {
        var output    = {size: {}, vPad: 0};
        //Attempt to fit using width
        var reduction = (targetWidth / width);
        if (Math.round(width * reduction) > targetWidth || Math.round(height * reduction) > targetHeight) {
            // try the other direction
            reduction = (targetHeight / height);
            if (Math.round(width * reduction) > targetWidth || Math.round(height * reduction) > targetHeight) {
                console.log('Error: invalid reduction');
            }
        }
        output.reduction = reduction;
        output.size.w    = Math.round(width * reduction);
        output.size.h    = Math.round(height * reduction);
        output.vPad      = Math.max(0, Math.floor((targetHeight - output.size.h) / 2));

        return output;
    }

    generateBlob(canvas) {
        var url, blob, binary, b64;
        var idxComma, bytes;
        if (!this.abortProcessing) {
            bytes    = canvas.toDataURL("image/jpeg", 0.8);
            idxComma = bytes.indexOf(',');
            b64      = bytes.substr(idxComma + 1);
            binary   = fixBinary(atob(b64));
            blob     = new Blob([binary], {type: 'image/jpeg'});
            url      = URL.createObjectURL(blob);

            // // From http://stackoverflow.com/questions/14967647/encode-decode-image-with-base64-breaks-image (2013-04-21)
            // function fixBinary(bin) {
            //     var length = bin.length;
            //     var buf    = new ArrayBuffer(length);
            //     var arr    = new Uint8Array(buf);
            //     for (var i = 0; i < length; i++) {
            //         arr[i] = bin.charCodeAt(i);
            //     }
            //     return buf;
            // }
        } else {
            d.reject('aborted');
        }

        return {
            blob   : blob,
            url    : url,
            bytes64: b64,
            size   : blob ? blob.size : null,
            b64Size: bytes ? bytes.length : null,
            width  : canvas.width,
            height : canvas.height
        };
    }

    // Upload attachment details with embedded thumbnail
    uploadAttachmentDetails() {
        var d    = $j.Deferred();
        var site = this.currentSite;

        if (!this.abortProcessing) {
            console.log('Uploading attachment details + thumbnail...');
            ProgressPopup.update(85, _lang("thumbs-upload-image-details"));

            try {
                site.updateAttachmentDetails(BAFS.attach.info).then(
                    function (objectId) {
                        this.adapter.attachmentInfo.relatedRecordId = objectId;
                        console.log('Image processing completed.');

                        function _allowUI() {
                            // site.getAttachments().then(
                            //     function (results) {
                            //         var thumb;
                            //         // BAFS.attach.initializeThumbnailsGridPanel(results);
                            //         // update site details image
                            //         if (results && results.length > 0) {
                            //             thumb = adapter.getMostRecentThumbnail(results);
                            //         }
                            //         CC.setMapCardImage(thumb);
                            //     },
                            //     function (er) {
                            //         console.log('Request error: ' + er.statusText);
                            //     });
                        }

                        Util.async(_allowUI, 0);
                        d.resolve();
                    },
                    function (err) {
                        d.reject(err);
                    }
                );
            } catch (ex) {
                console.log(ex);
                d.reject(ex);
            }
        } else {
            d.reject('aborted');
        }
        return d.promise();
    }

    uploadBinaryAttachment() {
        var d = $j.Deferred();
        try {
            // TODO: add code for implementation

            d.resolve();
        } catch (ex) {
            console.log(ex);
            d.reject(ex);
        }
        return d.promise();
    }

    //      deleteAttachment     (siteFeatureId, attachmentId, relatedRecordId) {
    //     try {
    //         console.log('Deleting attachmentId=' + attachmentId);
    //
    //         REST.deleteAttachment(siteFeatureId, attachmentId).then(
    //             function (result) {
    //                 if (result) {
    //                     console.log('Site attachment deleted successfully');
    //                     // refresh attachment list
    //                     BAFS.attach.initializeAttachments(BA.MyContentFS.currentSite);
    //                 }
    //                 else {
    //                     // we may have a attachment related record where the original attachment
    //                     // has been removed (dangling)
    //                     console.log('Attachment removed');
    //                 }
    //                 REST.deleteAttachmentRelatedRecord(relatedRecordId).then(
    //                     function () {},
    //                     function (err) {
    //                         console.log('Error deleting related record: ' + err);
    //                     }
    //                 )
    //             },
    //             function (err) {
    //                 console.log('Error deleting site attachment: ' + err);
    //             }
    //         );
    //     }
    //     catch (ex) {
    //         console.log(ex);
    //     }
    // };
    //
    showSiteAttachment(siteFeatureId, attachmentId) {
        // var url = REST.url_Sites + siteFeatureId + '/attachments/' + attachmentId
        //     + '?token=' + BAFS.Token();
        // window.open(url);
    }

}
