/*
    imageinfo-lib.js - a librarized version of imageinfo.js
    by WATANABE Hiroaki, <https://github.com/hiroaki/>.

    The original is "ImageInfo 0.1.2" - A JavaScript library for reading image metadata
    by Jacob Seidelin, http://blog.nihilogic.dk/

    Each are under the MIT License <http://www.nihilogic.dk/licenses/mit-license.txt>
    --------------------------------------------------------------------------------------

    Jan 2019 - modified by esri for 360 jpeg images with extended data storage
*/

(function () {

    var ImageInfo       = function () {
        this.initialize.apply(this, arguments);
    };
    ImageInfo.useRange  = false;
    ImageInfo.range     = 10240;
    ImageInfo.prototype = {
        initialize: function (url, cb) {
            this.url      = url;
            this.callback = cb;
            this.tags     = null;
            this.response = null;
        },

        readFileData: function () {
            BinaryAjax(this.url, (function (result) {
                return function (response) {
                    result.response = response;
                    result.tags     = result.readInfoFromData(response.binaryResponse);
                    result.callback(result);
                };
            })(this), null);
        },

        readInfoFromData: function (stream) {
            var offset = 0;
            if (stream.getByteAt(0) == 0xFF && stream.getByteAt(1) == 0xD8) {
                return this.readJPEGInfo(stream);
            }

            return null;
        },
        readJPEGInfo    : function (stream) {
            var SIZE_FIRST = 0xc0;
            var SIZE_LAST  = 0xc3;
            var x, y, comps;
            var id         = 'could not determine JPEG size';
            var size       = stream.getLength();

            var ptr = 1;
            stream.getByteAt(ptr);
            while (ptr < size) {
                var marker = stream.getByteAt(ptr + 1);
                var code   = stream.getByteAt(ptr + 2);
                var len    = stream.getShortAt(ptr + 3, true);
                ptr += 4;
                if (marker != 0xff) {
                    throw 'JPEG marker not found';
                    break;
                } else if (code >= SIZE_FIRST && code <= SIZE_LAST) {
                    len = 5;
                    stream.getByteAt(ptr + 1);
                    y     = stream.getShortAt(ptr + 2, true);
                    x     = stream.getShortAt(ptr + 4, true);
                    comps = stream.getByteAt(ptr + 6);
                    id    = 'JPEG';
                    break;
                } else {
                    ptr += len - 2;
                }
            }

            var exif = {};
            if (typeof EXIF != 'undefined' && EXIF.readFromBinaryFile) {
                exif = EXIF.readFromBinaryFile(stream);
            }

            return {
                "format" : id,
                "version": '',
                "width"  : x,
                "height" : y,
                "bpp"    : comps * 8,
                "alpha"  : false,
                "exif"   : exif
            };
        },

        getAllFields: function () {
            return this.tags;
        },
        getField    : function (name) {
            return this.tags[name];
        }
    };

    window.ImageInfo = ImageInfo;

})();
