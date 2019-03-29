export default class Util {
    // Constants
    static get MAX_CANVAS_OUTPUT_DIMENSION() {
        // Due to memory resource allocation limits on iPhones, limit canvas and output size
        return 1770;
    }

    static get MAX_OUTPUT_SIZE() {
        return Util.MAX_CANVAS_OUTPUT_DIMENSION * Util.MAX_CANVAS_OUTPUT_DIMENSION;
    }

    static get IMAGEPREFIX() {
        return 'data:image/jpeg;base64,';
    }

    static get _MAX_INPUT_FILE_SIZE_FOR_ATTACHMENTS_MB() {
        return 50;
    }

    static get _ThumbnailImageDimension() {
        return 440;
    }

    static get _DEFAULT_ATTACHMENT_ICONS() {
        return [
            null,                   // 0
            'generic_icon.png',     // 1
            'icon_7zip.png',        // 2
            'icon_excel.png',       // 3
            'icon_pdf.png',         // 4
            'icon_ppt.png',         // 5
            'icon_txt.png',         // 6
            'icon_video.png',       // 7
            'icon_word.png',        // 8
            'icon_zip.png',         // 9
            ''
        ];
    }

    static get _ATTACHMENT_TYPES_TO_ICON_MAP() {
        return {
            '7Z'      : 2,
            'AIF'     : 1,
            'AVI'     : 1,
            'BMP'     : 1,
            'DOC'     : 8,
            'DOCX'    : 8,
            'DOT'     : 1,
            'ECW'     : 1,
            'EMF'     : 1,
            'EPA'     : 1,
            'GIF'     : 1,
            'GML'     : 1,
            'GTAR'    : 1,
            'GZ'      : 1,
            'IMG'     : 1,
            'J2K'     : 1,
            'JP2'     : 1,
            'JPC'     : 1,
            'JPE'     : 1,
            'JPEG'    : 1,
            'JPF'     : 1,
            'JPG'     : 1,
            'JSON'    : 1,
            'MDB'     : 1,
            'MID'     : 1,
            'MOV'     : 7,
            'MP2'     : 7,
            'MP3'     : 7,
            'MP4'     : 7,
            'MPA'     : 7,
            'MPE'     : 1,
            'MPEG'    : 7,
            'MPG'     : 7,
            'MPV2'    : 7,
            'PDF'     : 4,
            'PNG'     : 1,
            'PPT'     : 1,
            'PPTX'    : 1,
            'PS'      : 1,
            'PSD'     : 1,
            'QT'      : 1,
            'RA'      : 1,
            'RAM'     : 1,
            'RAW'     : 1,
            'RMI'     : 1,
            'SID'     : 1,
            'TAR'     : 9,
            'TGZ'     : 1,
            'TIF'     : 1,
            'TIFF'    : 1,
            'TXT'     : 1,
            'VRML'    : 1,
            'WAV'     : 7,
            'WMA'     : 1,
            'WMF'     : 1,
            'WPS'     : 1,
            'XLS'     : 3,
            'XLSX'    : 3,
            'XLT'     : 1,
            'XML'     : 1,
            'ZIP'     : 9,
            //
            imageTypes: {'JPEG': 1, 'JPG': 1, 'PNG': 1, 'TIF': 1, 'TIFF': 1, 'GIF': 1}
        };
    }

    static get _SANITIZE_ERROR_TEXT() {
        return '[error]';
    }


    static notDef(obj) {
        return typeof obj === 'undefined' || obj === null;
    }

    static isDef(obj) {
        return !Util.notDef(obj);
    }

    static hasText(s) {
        return (Util.isDef(str) && typeof str === "string" && str.length > 0 && str.trim().length > 0);
    }

    static async(rtn, ms) {
        return setTimeout(rtn, ms);
    }

    static onException(ex) {
        console.log(ex);
    }

    static log(msg) {
        console.log(msg);
    }

    static getExtension(s, toUpper) {
        var idx = s.lastIndexOf('.');
        if (idx >= 0 && s.length > (idx + 1)) {
            var str = s.substr(idx + 1);
            return toUpper ? str.toUpperCase() : str;
        } else {
            return null;
        }
    }

    static removeExtension(s) {
        return s.replace(/\.[^/.]+$/, "");
    }


    static loadCSS(url) {
        if (!$j('link[href="' + url + '"]').length)
            $j('head').append('<link rel="stylesheet" type="text/css" href="' + url + '">');
    };

    // static TOKEN property
    static get Token() {
        return this.hasOwnProperty('_token') ? this._token : null;
    }

    static set Token(t) { this._token = t; }

    static get HeadingChangedCallbacks() {
        return this.hasOwnProperty('_headingChangedCallbacks') ? this._headingChangedCallbacks : null;
    }
    static set HeadingChangedCallbacks(arr) { this._headingChangedCallbacks = arr; }

    static _updateHeading(heading) {
        if (Util.HeadingChangedCallbacks){
            $j.each(Util.HeadingChangedCallbacks, function(k,v){
                v(heading);
            });
        }
    }

    static formatNumberWithCommas(x, nDecimals) {
        var n = nDecimals || 2;
        return parseFloat((x).toFixed(n)).toLocaleString().replace(/\.([0-9])$/, ".$10")
        // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static getKeys(obj) {
        var k, keys = [];
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    static endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    static getLocalizedNumber(n, nDecimals) {
        var nLocalized;
        var digits = (nDecimals || nDecimals === 0) ? nDecimals : 1;

        if (n || n === 0) {
            try {
                var sFormat = '';
                for (var i = 0; i < digits; i++)
                    sFormat += '0';
                sFormat = '0,0.[' + sFormat + ']';

                nLocalized = numeral(n).format(sFormat);
            }
            catch (ex) {
                console.log(ex);
            }
        }
        return nLocalized;
    }
}