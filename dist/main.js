/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js6/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js6/ArcGISAccess.js":
/*!*****************************!*\
  !*** ./js6/ArcGISAccess.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArcGISAccess; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FileAccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FileAccess */ "./js6/FileAccess.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./js6/util.js");
/* harmony import */ var _psvMath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./psvMath */ "./js6/psvMath.js");







function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ArcGISAccess =
/*#__PURE__*/
function (_FileAccess) {
  _inherits(ArcGISAccess, _FileAccess);

  function ArcGISAccess() {
    var _this;

    _classCallCheck(this, ArcGISAccess);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArcGISAccess).call(this));
    var currentSite = {
      id: null,
      filename: null,
      location: {}
    };
    var Token = null;
    var uploadTimeout = null;
    var attachmentInfo = {};
    return _this;
  }

  _createClass(ArcGISAccess, [{
    key: "isImageAttachment",
    value: function isImageAttachment() {
      console.log("ArcGIS: isImageAttachment");
      return this.attachmentInfo && this.attachmentInfo.attachmentFilename && this.getExtension(this.attachmentInfo.attachmentFilename, 1) && _util__WEBPACK_IMPORTED_MODULE_7__["default"]._ATTACHMENT_TYPES_TO_ICON_MAP.imageTypes[this.getExtension(this.attachmentInfo.attachmentFilename, 1)];
    } // Depends on currentAttachmentInfo already being populated

  }, {
    key: "initializeAttachmentInfo",
    value: function initializeAttachmentInfo() {
      var b = this.attachmentInfo; // we purposely do not initialize vars just set for
      // filename, id, isImage, thumbnailImage, and relatedRecordId

      b.featureId = this.currentSite.id;
      b.name = this.generatePhotoFilename();
      b.caption = null;
      b.description = null;
      b.location = null;
      b.latitude = _nsORv('this.currentSite.location.lat', '');
      b.longitude = _nsORv('this.currentSite.location.lon', '');
    }
  }, {
    key: "generatePhotoFilename",
    value: function generatePhotoFilename() {
      return "P_" + new Date().getTime();
    }
  }, {
    key: "get360Image",
    // Override base class functions to provide file access in
    // ArcGIS feature layers
    value: function get360Image(options) {
      console.log("ArcGIS: get360Image");
      return "arcGISAccess: get360Image";
    }
  }, {
    key: "save360Image",
    value: function save360Image(imageData, annotationsObject, options) {
      console.log("ArcGIS: save360Image");
    }
  }, {
    key: "saveAnnotations",
    value: function saveAnnotations(annotationsObject, options) {
      console.log("ArcGIS: saveAnnotations");
    }
  }, {
    key: "getFlatImage",
    value: function getFlatImage(options) {
      console.log("ArcGIS: isImageAttachment");
    }
  }, {
    key: "saveThumbnail",
    value: function saveThumbnail(base64Thumb, options) {
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

  }, {
    key: "getFeatures",
    value: function () {
      var _getFeatures = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(url, distanceObj) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getFeatures(_x, _x2) {
        return _getFeatures.apply(this, arguments);
      }

      return getFeatures;
    }()
  }, {
    key: "getSites",

    /*
     * Fetches sites from current sites layer within a
     * certain distance.
     *
     * distanceObj = {
     *    distance: <value>,
     *    units: <esriUnits>
     *  }
     */
    value: function () {
      var _getSites = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url, distanceObj) {
        var sites, items;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // compute nearby coordinates
                sites = [{
                  name: "11 Tennessee",
                  lat: 34.048729241172765,
                  lon: -117.19991415739062
                }, {
                  name: "MG Transmission",
                  lat: 34.05867,
                  lon: -117.20005
                }];
                items = _psvMath__WEBPACK_IMPORTED_MODULE_8__["default"].calculateBearingDist(sites, _psvMath__WEBPACK_IMPORTED_MODULE_8__["default"].UnitsType.miles);
                _context2.next = 4;
                return $j.each(items, function (k, v) {
                  var d2r = Math.PI / 180;
                  var lat = 4 * d2r;
                  var lon = v.bearing * d2r;
                  var dStr = _util__WEBPACK_IMPORTED_MODULE_7__["default"].formatNumberWithCommas(v.dist, 2);
                  var sTip = "<strong>" + v.name + "</strong>" + '<br>Distance:  ' + dStr + 'mi';
                  view.PSViewer.addMarker({
                    id: '#' + "_ba_pano_site_" + Math.random(),
                    tooltip: sTip,
                    latitude: lat,
                    longitude: lon,
                    image: './images/blue_pin.svg',
                    width: 32,
                    height: 32,
                    anchor: 'bottom center',
                    data: {
                      deletable: true
                    }
                  });
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSites(_x3, _x4) {
        return _getSites.apply(this, arguments);
      }

      return getSites;
    }()
  }]);

  return ArcGISAccess;
}(_FileAccess__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./js6/BASitesAdapter.js":
/*!*******************************!*\
  !*** ./js6/BASitesAdapter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BASitesAdapter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BASitesAdapter =
/*#__PURE__*/
function () {
  function BASitesAdapter() {
    _classCallCheck(this, BASitesAdapter);
  }

  _createClass(BASitesAdapter, null, [{
    key: "getSitesByFeatureId",
    value: function getSitesByFeatureId(siteFeatureIds, siteLayerId) {
      var self = this;
      var d = $j.Deferred();
      var requestUrl = this._serviceURL + "/query";
      var requestParams = {
        outSR: 4326,
        where: "1=1",
        returnGeometry: "true",
        resultOffset: 0,
        outFields: "*",
        objectIds: siteFeatureIds.join(',')
      };
      BA.arcGISRequests.executeRequest({
        url: requestUrl,
        data: requestParams
      }).then(function (response) {
        var sites = [],
            obj;
        $j.each(response.features, function (k, v) {
          sites.push(v.attributes);
        });
        obj = {
          fields: response.fields,
          sites: sites
        };
        d.resolve(obj);
      }, function (err) {
        d.reject(err);
      });
      return d.promise();
    }
  }, {
    key: "ServiceURL",

    /* Service URL for sites layer */
    get: function get() {
      return this.hasOwnProperty('_serviceURL') ? this._serviceURL : null;
    },
    set: function set(url) {
      this._serviceURL = url;
    }
    /*
     * Current Site
     * {
     *   displayName: <string>,
     *   featureId: feature ID,
     *   location: [lat, lng]
     * }
     */

  }, {
    key: "CurrentSite",
    get: function get() {
      return this.hasOwnProperty('_currentSite') ? this._currentSite : null;
    },
    set: function set(s) {
      this._currentSite = s;
    }
  }]);

  return BASitesAdapter;
}();



/***/ }),

/***/ "./js6/FileAccess.js":
/*!***************************!*\
  !*** ./js6/FileAccess.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileAccess; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FileAccess =
/*#__PURE__*/
function () {
  function FileAccess() {
    _classCallCheck(this, FileAccess);

    var fileInfo = {};
  }

  _createClass(FileAccess, [{
    key: "setFileInfo",
    value: function setFileInfo(f) {
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

  }, {
    key: "get360Image",
    value: function get360Image(options) {
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

  }, {
    key: "save360Image",
    value: function save360Image(imageData, annotationsObject, options) {
      console.log("FileAccess: save360Image");

      if (annotationsObject) {
        if (options.useEmbeddedAnnotations) {
          this._attachAnnotations(annotationsObject, imageData);
        } else {
          this.saveAnnotations(annotationsObject, options);
        }
      }
    }
    /*
     * Save annotations separately from image
     */

  }, {
    key: "saveAnnotations",
    value: function saveAnnotations(annotationsObject, options) {
      console.log("FileAccess: saveAnnotations");
    }
  }, {
    key: "is360Image",
    value: function is360Image(imageData) {
      console.log("FileAccess: is360Image");
      return 'no image data';
    }
    /*
     * Saves annotations to the end of the image data
     */

  }, {
    key: "_attachAnnotations",
    value: function _attachAnnotations(annotationsObject, imageData) {
      console.log("FileAccess: _attachAnnotations");
    }
    /*
     * Returns annotations object if one is appended to the JPEG image
     */

  }, {
    key: "_getEmbeddedAnnotations",
    value: function _getEmbeddedAnnotations(imageData) {
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

  }, {
    key: "getFlatImage",
    value: function getFlatImage(options) {}
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

  }, {
    key: "saveThumbnail",
    value: function saveThumbnail(base64Thumb, options) {}
    /*
     * Get an image from local gallery on device
     * This is invoked from HTML element click
     */

  }, {
    key: "onGetLocalImage",
    value: function onGetLocalImage(files) {
      console.log("FileAccess: onGetLocalImage"); // determine if the image is 360
      // get annotations if any
      // return imageData, flag if 360, and annotations object
    }
  }, {
    key: "getMostRecentThumbnail",
    value: function getMostRecentThumbnail(thumbnails) {
      console.log("FileAccess: getMostRecentThumbnail");
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
  }, {
    key: "setCurrentAttachmentFilename",
    value: function setCurrentAttachmentFilename(filename) {
      console.log("FileAccess: setCurrentAttachmentFilename");
      this.attachmentInfo.attachmentFilename = filename;

      if (id) {
        this.attachmentInfo.attachmentId = id;
      }

      this.attachmentInfo.isImage = this.isImageAttachment();
      $j('#atta_filename').html(filename);
      $j('#atta_name').v(filename);
      $j('#atta_caption').v(this.removeExtension(filename));
    }
  }]);

  return FileAccess;
}();



/***/ }),

/***/ "./js6/geDynamics.js":
/*!***************************!*\
  !*** ./js6/geDynamics.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GEDynamics; });
/* harmony import */ var _geSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geSection */ "./js6/geSection.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GEDynamics =
/*#__PURE__*/
function () {
  function GEDynamics() {
    _classCallCheck(this, GEDynamics);
  }

  _createClass(GEDynamics, null, [{
    key: "createSections",
    value: function createSections(polygon) {
      // TODO: create geometry for requests
      // create section objects
      var i, lo, hi, s;
      var section, left, right;
      GEDynamics._sections = [];
      var sectionCount = GEDynamics.Resolution;

      for (i = 0; i < GEDynamics.Resolution; i++) {
        lo = i * GEDynamics._increment;
        hi = lo + GEDynamics._increment - 1;
        left = i === 0 ? GEDynamics.Resolution - 1 : i - 1;
        right = (i + 1) % GEDynamics.Resolution;
        s = new _geSection__WEBPACK_IMPORTED_MODULE_0__["default"](i, sectionCount, [lo, hi], {});
      }

      var z = GEDynamics._sections;
    }
  }, {
    key: "hideFacts",
    value: function hideFacts() {
      $j('div._ba_pano_facts').hide();
      $j('#_ba_pano_360_facts_dismiss').hide();
      $j('#geTargetMask').hide();
      $j('#geTargetArrow').hide();
    }
  }, {
    key: "showFacts",
    value: function showFacts() {
      $j('div._ba_pano_facts').show();
      $j('#_ba_pano_360_facts_dismiss').show();
      $j('#geTargetMask').show();
      $j('#geTargetArrow').show();
      $j('#_ba_pano_360_facts_dismiss').off('click', {});
      $j('#_ba_pano_360_facts_dismiss').on('click', function () {
        GEDynamics.hideFacts();
      });
    }
  }, {
    key: "toggleFacts",
    value: function toggleFacts() {
      if ($j('#_ba_pano_360_facts_dismiss').css('display') == 'block') {
        GEDynamics.hideFacts();
      } else {
        GEDynamics.showFacts();
      }
    }
  }, {
    key: "updateVariables",
    value: function updateVariables(heading) {
      var s = this._whichSection(heading);

      s.updateVariableValues(heading);
    }
  }, {
    key: "_whichSection",
    value: function _whichSection(heading) {
      var eachSection = 360 / GEDynamics.Resolution;
      var index = Math.floor(heading / eachSection);
      return GEDynamics._sections[index];
    }
    /* ----------------------------------------
     * GE query resolution within buffer
     *   Must be GEDynamics.ResolutionType
     */

  }, {
    key: "_requestFacts",
    value: function _requestFacts() {}
  }, {
    key: "ResolutionType",
    get: function get() {
      return {
        low: 4,
        better: 6,
        medium: 8,
        high: 12
      };
    }
  }, {
    key: "Resolution",
    set: function set(r) {
      switch (r) {
        case GEDynamics.ResolutionType.low:
        case GEDynamics.ResolutionType.better:
        case GEDynamics.ResolutionType.medium:
        case GEDynamics.ResolutionType.high:
          {
            this._resolution = r;
            break;
          }

        default:
          {
            console.log("GEDynamics setup error");
            this._resolution = GEDynamics.ResolutionType.low;
            break;
          }
      }
    },
    get: function get() {
      return this.hasOwnProperty('_resolution') ? this._resolution : GEDynamics.ResolutionType.low;
    }
    /* ----------------------------------------
     * Buffer details object
     *  {
     *    radius: <circle radius value in meters>
     *    polygon: single closed polygon (in ArcGIS format)
     *  }
     */

  }, {
    key: "Buffer",
    set: function set(b) {
      this._resolution = b;
    },
    get: function get() {
      return this.hasOwnProperty('_buffer') ? this._buffer : 1609; //default = 1 mile
    }
  }, {
    key: "_sections",
    set: function set(o) {
      this.__sections = o;
    },
    get: function get() {
      return this.hasOwnProperty('__sections') ? this.__sections : null;
    }
    /*
     * sectionVariables - object containing one object for each variable.  The object
     * contains the target fact element ID, and an array of values.
     *    elementId = ID of fact element
     *    values = one value for each section
     *
     *    Object example: 'aveIncome' : {
     *                 elementId: '#_ba_pano_facts_1',
     *                 'values': [1,2,3,4,5,6,7,8]
     *              }
     */

  }, {
    key: "sectionVariables",
    set: function set(o) {
      this._sVariables = o;
    },
    get: function get() {
      return this.hasOwnProperty('_sVariables') ? this._sVariables : null;
    }
  }, {
    key: "_increment",
    get: function get() {
      if (this.Resolution) {
        return 360 / this.Resolution;
      }

      return null;
    }
  }]);

  return GEDynamics;
}();



/***/ }),

/***/ "./js6/geSection.js":
/*!**************************!*\
  !*** ./js6/geSection.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GESection; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _geDynamics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geDynamics */ "./js6/geDynamics.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./js6/util.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var GESection =
/*#__PURE__*/
function () {
  function GESection(index, nSections, degreeRange, geometry) {
    _classCallCheck(this, GESection);

    var self = this;
    this.sectionIndex = index;
    this.prev = index == 0 ? nSections - 1 : index - 1;
    this.next = index == nSections - 1 ? 0 : index + 1;
    this.degrees = degreeRange;
    this.vars = {};
    this.geom = geometry || {};
    this.values = {}; // Set all the section LMH values for each variable

    var keys = _util__WEBPACK_IMPORTED_MODULE_3__["default"].getKeys(_geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"].sectionVariables);
    $j.each(keys, function (k, v) {
      self.values[v] = {
        lo: null,
        mid: _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"].sectionVariables[v].values[self.sectionIndex],
        hi: null
      };
    });

    _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections.push(this); // last section triggers a full values computation


    if (index >= nSections - 1) {
      GESection.computeAllSectionsValues();
    }
  }

  _createClass(GESection, [{
    key: "nextSection",
    value: function nextSection() {
      return _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[this.next];
    }
  }, {
    key: "prevSection",
    value: function prevSection() {
      return _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[this.prev];
    } // Call this after all sections have been created

  }, {
    key: "getValues",
    // return LMH values for section and variable
    value: function getValues(varName) {
      return this.values[varName];
    }
    /*
     * Calculate all variable values for the current heading in degrees
     */

  }, {
    key: "updateVariableValues",
    value: function updateVariableValues(heading) {
      var keys = _util__WEBPACK_IMPORTED_MODULE_3__["default"].getKeys(this.values);
      var values = {};

      for (var i = 0; i < keys.length; i++) {
        // Get variable's value at this heading
        values[keys[i]] = this.calculateValue(keys[i], heading); // Update the UI element value text

        var elementId = _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"].sectionVariables[keys[i]].elementId + ' div._ba_pano_facts_valueDiv';

        if (elementId) {
          var s = _util__WEBPACK_IMPORTED_MODULE_3__["default"].formatNumberWithCommas(Math.round(values[keys[i]], 1));
          $j(elementId).html(s);
        }
      }

      return values;
    }
    /*
     * Calculate one value (for a variable) based on heading
     */

  }, {
    key: "calculateValue",
    value: function calculateValue(varName, heading) {
      var v, vs, pct;

      if (_util__WEBPACK_IMPORTED_MODULE_3__["default"].isDef(heading) && this.values) {
        var degInHalfSect = (this.degrees[1] - this.degrees[0] + 1) / 2;
        var mid = this.degrees[0] + degInHalfSect;

        if (heading === this.degrees[0]) {
          v = this.values[varName].lo;
        } else if (heading === mid) {
          v = this.values[varName].mid;
        } else if (heading === this.degrees[1]) {
          v = this.values[varName].hi;
        } else if (heading < mid) {
          vs = heading - this.degrees[0];
          pct = vs / degInHalfSect;
          v = this.values[varName].lo + (this.values[varName].mid - this.values[varName].lo) * pct;
        } else {
          vs = heading - mid;
          pct = vs / degInHalfSect;
          v = this.values[varName].mid + (this.values[varName].hi - this.values[varName].mid) * pct;
        }
      }

      return v;
    }
  }], [{
    key: "computeAllSectionsValues",
    value: function computeAllSectionsValues() {
      var i, sect;

      for (i = 0; i < _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections.length; i++) {
        sect = _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[i];
        var keys = _util__WEBPACK_IMPORTED_MODULE_3__["default"].getKeys(sect.values);
        $j.each(keys, function (k, v) {
          var val;
          var next = _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[sect.next];
          var prev = _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[sect.prev];
          var mid = sect.values[v].mid;
          var prevVals = _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[sect.prev].values[v];
          var nextVals = _geDynamics__WEBPACK_IMPORTED_MODULE_2__["default"]._sections[sect.next].values[v];
          var prevMid = prevVals.mid;
          var nextMid = nextVals.mid;
          var target = sect.values[v];

          if (!_util__WEBPACK_IMPORTED_MODULE_3__["default"].isDef(target.lo)) {
            target.lo = prevVals.mid + (mid - prevMid) / 2;
            prevVals.hi = target.lo;
          }

          if (!_util__WEBPACK_IMPORTED_MODULE_3__["default"].isDef(target.hi)) {
            target.hi = mid + (nextVals.mid - mid) / 2;
            nextVals.lo = target.hi;
          }
        });
      }
    }
  }]);

  return GESection;
}();



/***/ }),

/***/ "./js6/imageProcessing.js":
/*!********************************!*\
  !*** ./js6/imageProcessing.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageProcessor; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./js6/util.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress */ "./js6/progress.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/*
 * This class does all the image resizing and thumbnail generation (client-side)
 *
 */

var ImageProcessor =
/*#__PURE__*/
function () {
  function ImageProcessor(fileAdapter) {
    _classCallCheck(this, ImageProcessor);

    // instance vars
    this.adapter = fileAdapter;
    this.abortProcessing = false;
    this.abortProcessTimer = null;
    /* Current Site info
     *   id
     *   location {lat,lon}
     *   filename
     *   layerId
     *   featureId
     *   imageTitle
     */

    this.currentSite = null;
    this.currentThumbnailSize = 1;
    this.successfulUpload = false;
  } // Begin the process to upload attachments and details


  _createClass(ImageProcessor, [{
    key: "processImageFile",
    value: function processImageFile(file, nRemaining) {
      var d = $j.Deferred();
      var nTodo = nRemaining;

      try {
        this.abortProcessing = false; // [As these asynchronous functions run they populate
        // the 'attachmentInfo' object]

        this.adapter.attachmentInfo.file = file;
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(0, _lang("thumbs-processing", file.name));
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].show(); // this.resetUploadTimeout(1);

        $j.when({}).then(this.loadFile).then(this.getAttachmentDetails, _util__WEBPACK_IMPORTED_MODULE_2__["default"].onError).then(this.resizeIfNeeded).then(this.uploadAttachmentDetails, _util__WEBPACK_IMPORTED_MODULE_2__["default"].onError) // Done
        .then(function () {
          processCompleted(nTodo);
          d.resolve();
        }, _util__WEBPACK_IMPORTED_MODULE_2__["default"].onError);
      } catch (ex) {
        _util__WEBPACK_IMPORTED_MODULE_2__["default"].onError(ex);
        _util__WEBPACK_IMPORTED_MODULE_2__["default"].onException(ex);
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].hide(_lang("thumbs-upload-common-error"));
      }

      function processCompleted(nRemaining) {
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].hide(_util__WEBPACK_IMPORTED_MODULE_2__["default"]._lang("thumbs-upload-successful"));
      }

      return d.promise();
    } // Begin the process to upload an ArcGIS supported binary file

  }, {
    key: "processBinaryFile",
    value: function processBinaryFile(file) {
      var d = $j.Deferred();
      console.log("BINARY ATTACHMENT UPLOAD NOT IMPLEMENTED");
      console.log("(refresh page)");
      d.resolve(); //
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
    } // STEP 1: Determine attachment type

  }, {
    key: "preFilterAttachmentFile",
    value: function preFilterAttachmentFile(file) {
      try {
        var filesizeMb = (file.size / 1024 / 1024).toFixed(3);

        if (filesizeMb > _util__WEBPACK_IMPORTED_MODULE_2__["default"]._MAX_INPUT_FILE_SIZE_FOR_ATTACHMENTS_MB) {
          return 'too_large';
        }

        var extension = file.name.split('.').pop().toUpperCase();

        if (_util__WEBPACK_IMPORTED_MODULE_2__["default"]._ATTACHMENT_TYPES_TO_ICON_MAP.imageTypes[extension]) {
          // init current attachment information
          this.adapter.attachmentInfo = {
            attachmentFilename: file.name,
            filesizeMb: filesizeMb,
            isImage: true
          };
          return 'image';
        } else if (_util__WEBPACK_IMPORTED_MODULE_2__["default"]._ATTACHMENT_TYPES_TO_ICON_MAP[extension]) {
          // binary attachment file
          // init current attachment information
          this.adapter.attachmentInfo = {
            attachmentFilename: file.name,
            filesizeMb: filesizeMb,
            isImage: false
          };
          return 'binary';
        }
      } catch (ex) {
        _util__WEBPACK_IMPORTED_MODULE_2__["default"].onException(ex);
      }

      return null;
    } // Load file from system/device.  The file normally comes from
    // the 'input' control browser functionality that shows a file selection
    // dialog.
    // Returns the binary results from reading the file

  }, {
    key: "loadFile",
    value: function loadFile() {
      var d = $j.Deferred();

      function updateResults(img) {
        // img contains the pre-processed image adjusted using exif data
        console.log('Original image size: ' + img.width + 'x' + img.height);
        this.adapter.attachmentInfo.workingImage = img;
        this.adapter.attachmentInfo.workingCanvas = img;
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(10, _lang("thumbs-image-loaded"));
        d.resolve();
      }

      if (!this.abortProcessing) {
        try {
          if (typeof window.FileReader !== 'function') {
            d.reject("Error: image processing requires File API support.");
          } else {
            var tSize = this.imageAttachmentTargetSize;

            if (tSize <= 0) {// swap to placeholder mini image
            }

            var options = {
              maxWidth: this.imageAttachmentTargetSize,
              maxHeight: this.imageAttachmentTargetSize,
              canvas: true,
              pixelRatio: 1,
              //window.devicePixelRatio,
              downsamplingRatio: 1,
              //0.5,
              orientation: true,
              contain: true,
              outputSizeLimit: _util__WEBPACK_IMPORTED_MODULE_2__["default"].MAX_OUTPUT_SIZE
            };

            if (!this.adapter.attachmentInfo.file) {
              d.reject('no file');
            } else {
              LIm(this.adapter.attachmentInfo.file, updateResults, options);
            }
          }
        } catch (ex) {
          _util__WEBPACK_IMPORTED_MODULE_2__["default"].onException(ex);
          d.reject(ex);
        }
      } else {
        d.reject('aborted');
      }

      return d.promise();
    }
  }, {
    key: "getAttachmentDetails",
    value: function getAttachmentDetails() {
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
  }, {
    key: "uploadAttachment",
    value: function uploadAttachment(data, filename, fileSizeMb) {
      var sendUrl;
      var errMsg = null;
      var def = $j.Deferred();

      if (!this.abortProcessing) {
        var progressMessage = _lang("thumbs-upload-photo");

        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(0, progressMessage);

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
          sendUrl = this.adapter.currentStorage.url + '/' + this.currentSite.getLayerId() + '/' + this.currentSite.getObjectId() + '/addAttachment'; // }

          var _formData = new FormData();

          _formData.append('name', 'attachment');

          _formData.append('attachment', data, filename);

          _formData.append('f', 'json');

          var _token = _util__WEBPACK_IMPORTED_MODULE_2__["default"].Token;

          if (_token) {
            _formData.append('token', _token);
          } // Uploading


          var _xhr = new XMLHttpRequest();

          var timestamp = new Date().getTime(); // show errors

          _xhr.onreadystatechange = function (oEvent) {
            var mbs, elapsedSec;

            if (_xhr.readyState === 4) {
              if (_xhr.status >= 200 && _xhr.status <= 299) {
                var r = JSON.parse(_xhr.responseText);
                var result = r.addAttachmentResult;

                if (result && result.success) {
                  this.successfulUpload = true; // update the network 'upload' rate to what we just got

                  elapsedSec = (new Date().getTime() - timestamp) / 1000;
                  mbs = fileSizeMb / elapsedSec;
                  BAFS.network.stats.upload = mbs;
                  this.adapter.setCurrentAttachmentFilename(result.objectId, filename);
                  def.resolve('Uploaded!');
                } else if (_xhr.responseText.indexOf('error') >= 0) {
                  if (r && r.error && r.error.details) {
                    BAFS.network._failed();

                    _util__WEBPACK_IMPORTED_MODULE_2__["default"].onError(errObj.error.details[0]);
                    errMsg = errObj.error.details[0];
                  }
                } else {
                  BAFS.network._failed();

                  def.reject('upload failed');
                }
              } else {
                BAFS.network._failed(); // this.hideProcessingSpinner(BA.IMAGE_PROCESSING_UNKNOWN_ERROR);


                console.log('Upload Error: ' + _xhr.statusText);
                errMsg = _xhr.statusText;
              }
            }
          }; // Update progress bar


          _xhr.upload.addEventListener("progress", function (evt) {
            var pct = evt.loaded / evt.total * 100;
            _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(pct, progressMessage);
          }, false);

          _xhr.ontimeout = function (e) {
            BAFS.network._failed();

            def.reject("Timed out");
          };

          _xhr.upload.addEventListener("error", function (e) {
            _util__WEBPACK_IMPORTED_MODULE_2__["default"].onError('network not available for image uploads');
            BAFS.network.stats.error = 'network error';
            BAFS.network.stats.upload = 0;

            BAFS.network._failed();

            def.reject('network not available');
          }); // cancelled


          _xhr.upload.addEventListener("abort", function (e) {
            console.log('Image upload aborted');
            d.reject('aborted');
          });

          _xhr.timeout = BAFS.uploadTimeout;

          _xhr.open('post', sendUrl, true);

          _xhr.send(_formData);
        } catch (ex) {
          console.log(ex);
          def.reject('Error uploading attachment: ' + ex);
        }
      } else {
        def.reject('aborted');
      }

      return def.promise();
    } // Generates the thumbnail before resolving.

  }, {
    key: "resizeIfNeeded",
    value: function resizeIfNeeded() {
      var d = $j.Deferred();
      var canvas = BAFS.attach.info.workingCanvas;
      var self = this;

      try {
        if (!this.abortProcessing) {
          // Upload standardized image attachment
          this.generateStandardImageAndUpload(canvas, BAFS.attach.info.attachmentFilename).then(function () {
            console.log('Generating thumbnail...');
            self.generateThumbnailBytes(canvas).then(function () {
              d.resolve();
            }, function (er) {
              console.log(er);
              d.reject(er);
            });
          }, function (er) {
            console.log(er);
            d.reject(er);
          });
        } else {
          d.reject('aborted');
        }
      } catch (ex) {
        _util__WEBPACK_IMPORTED_MODULE_2__["default"].onException(ex);
      }

      return d.promise();
    }
  }, {
    key: "hermiteImageResample",
    value: function hermiteImageResample(canvas, W, H, W2, H2) {
      var d = $j.Deferred();

      function resample_iterateComplete() {
        canvas.getContext("2d").clearRect(0, 0, Math.max(W, W2), Math.max(H, H2));
        canvas.width = W2;
        canvas.height = H2;
        canvas.getContext("2d").putImageData(img2, 0, 0);
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(100, _lang("thumbs-resize-completed"));
        d.resolve();
      }

      function resample_iterateAgain(val, stopAt, end) {
        var center_y, gx_a, gx_b, gx_g, gx_r;
        var weights_alpha, weights, weight;
        var x2, i, j, xx, yy;

        for (j = val; j < stopAt && j < end; j++) {
          for (i = 0; i < W2; i++) {
            x2 = (i + j * W2) * 4;
            weight = 0;
            weights = 0;
            weights_alpha = 0;
            gx_r = 0;
            gx_g = 0;
            gx_b = 0;
            gx_a = 0;
            center_y = (j + 0.5) * ratio_h;

            for (yy = Math.floor(j * ratio_h); yy < (j + 1) * ratio_h; yy++) {
              var dy = Math.abs(center_y - (yy + 0.5)) / ratio_h_half;
              var center_x = (i + 0.5) * ratio_w;
              var w0 = dy * dy; //pre-calc part of w

              for (xx = Math.floor(i * ratio_w); xx < (i + 1) * ratio_w; xx++) {
                var dx = Math.abs(center_x - (xx + 0.5)) / ratio_w_half;
                var w = Math.sqrt(w0 + dx * dx);

                if (w >= -1 && w <= 1) {
                  //hermite filter
                  weight = 2 * w * w * w - 3 * w * w + 1;

                  if (weight > 0) {
                    dx = 4 * (xx + yy * W); //alpha

                    gx_a += weight * data[dx + 3];
                    weights_alpha += weight; //colors

                    if (data[dx + 3] < 255) weight = weight * data[dx + 3] / 250;
                    gx_r += weight * data[dx];
                    gx_g += weight * data[dx + 1];
                    gx_b += weight * data[dx + 2];
                    weights += weight;
                  }
                }
              }
            }

            data2[x2] = gx_r / weights;
            data2[x2 + 1] = gx_g / weights;
            data2[x2 + 2] = gx_b / weights;
            data2[x2 + 3] = gx_a / weights_alpha;
          }
        }

        function doAgain() {
          var pctComplete = Math.round(j / end * 100);
          _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(0, pctComplete); // continue processing

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
          W2 = Math.round(W2);
          H2 = Math.round(H2);
          var img = canvas.getContext("2d").getImageData(0, 0, W, H);
          var img2 = canvas.getContext("2d").getImageData(0, 0, W2, H2);
          var data = img.data;
          var data2 = img2.data;
          var ratio_w = W / W2;
          var ratio_h = H / H2;
          var ratio_w_half = Math.ceil(ratio_w / 2);
          var ratio_h_half = Math.ceil(ratio_h / 2);
          var resample_loopEnd = H2;
          var resample_loopAmount = Math.max(1, Math.floor(resample_loopEnd * 0.1)); // begin image processing

          resample_iterateAgain(0, resample_loopAmount, resample_loopEnd);
        } catch (ex) {
          _util__WEBPACK_IMPORTED_MODULE_2__["default"].onException(ex);
        }
      } else {
        d.reject('aborted');
      }

      return d.promise();
    } // Upload standardized image attachment

  }, {
    key: "generateStandardImageAndUpload",
    value: function generateStandardImageAndUpload(canvas, uploadFilename) {
      var d = $j.Deferred();
      var self = this;

      function _onBlobReady(blob) {
        var filesizeMb = (blob.size / 1024 / 1024).toFixed(3); // upload image data as Site feature attachment

        console.log('Uploading image attachment (' + filesizeMb + 'Mb) ...');
        self.uploadAttachment(blob, uploadFilename, filesizeMb).then(function () {
          console.log('(upload completed)');
          d.resolve();
        }, function (er) {
          d.reject(er);
        });
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
    } // Resample standard image down to standard thumbnail size

  }, {
    key: "generateThumbnailBytes",
    value: function generateThumbnailBytes(canvas) {
      var d = $j.Deferred();
      var blobData,
          self = this;

      if (!this.abortProcessing) {
        try {
          _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(0, _lang("thumbs-generate-thumb"));

          if (canvas.width < _util__WEBPACK_IMPORTED_MODULE_2__["default"]._ThumbnailImageDimension && canvas.height < _util__WEBPACK_IMPORTED_MODULE_2__["default"]._ThumbnailImageDimension) {
            // no resize needed
            blobData = this.generateBlob(canvas);
            this.adapter.attachmentInfo.thumbnailImage = blobData.bytes64;
            this.currentThumbnailSize = blobData.bytes64.length;
            d.resolve();
          } else {
            // resample standard image result to thumbnail size (stage 2 reduction)
            var thumbSz = this.getSizing(canvas.width, canvas.height, _util__WEBPACK_IMPORTED_MODULE_2__["default"]._ThumbnailImageDimension, _util__WEBPACK_IMPORTED_MODULE_2__["default"]._ThumbnailImageDimension);
            this.hermiteImageResample(canvas, canvas.width, canvas.height, thumbSz.size.w, thumbSz.size.h).then(function () {
              blobData = self.generateBlob(canvas); // save the thumbnail byte so they can be embedded into the related
              // table attachment details record

              this.adapter.attachmentInfo.thumbnailImage = blobData.bytes64;
              this.currentThumbnailSize = blobData.bytes64.length;
              var lenK = (blobData.bytes64.length / 1024).toFixed(1);
              console.log('Saved thumbnail size: ' + lenK + 'Kb');
              d.resolve(blobData.bytes64.length);
            }, function (er) {
              console.log(er);
              d.reject('Error resizing Thumbnail: ' + er);
            });
          }
        } catch (ex) {
          d.reject('Error generating Thumbnail: ' + ex);
        }
      } else {
        d.reject('aborted');
      }

      return d.promise();
    }
  }, {
    key: "getSizing",
    value: function getSizing(width, height, targetWidth, targetHeight) {
      var output = {
        size: {},
        vPad: 0
      }; //Attempt to fit using width

      var reduction = targetWidth / width;

      if (Math.round(width * reduction) > targetWidth || Math.round(height * reduction) > targetHeight) {
        // try the other direction
        reduction = targetHeight / height;

        if (Math.round(width * reduction) > targetWidth || Math.round(height * reduction) > targetHeight) {
          console.log('Error: invalid reduction');
        }
      }

      output.reduction = reduction;
      output.size.w = Math.round(width * reduction);
      output.size.h = Math.round(height * reduction);
      output.vPad = Math.max(0, Math.floor((targetHeight - output.size.h) / 2));
      return output;
    }
  }, {
    key: "generateBlob",
    value: function generateBlob(canvas) {
      var url, blob, binary, b64;
      var idxComma, bytes;

      if (!this.abortProcessing) {
        bytes = canvas.toDataURL("image/jpeg", 0.8);
        idxComma = bytes.indexOf(',');
        b64 = bytes.substr(idxComma + 1);
        binary = fixBinary(atob(b64));
        blob = new Blob([binary], {
          type: 'image/jpeg'
        });
        url = URL.createObjectURL(blob); // // From http://stackoverflow.com/questions/14967647/encode-decode-image-with-base64-breaks-image (2013-04-21)
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
        blob: blob,
        url: url,
        bytes64: b64,
        size: blob ? blob.size : null,
        b64Size: bytes ? bytes.length : null,
        width: canvas.width,
        height: canvas.height
      };
    } // Upload attachment details with embedded thumbnail

  }, {
    key: "uploadAttachmentDetails",
    value: function uploadAttachmentDetails() {
      var d = $j.Deferred();
      var site = this.currentSite;

      if (!this.abortProcessing) {
        console.log('Uploading attachment details + thumbnail...');
        _progress__WEBPACK_IMPORTED_MODULE_3__["default"].update(85, _lang("thumbs-upload-image-details"));

        try {
          site.updateAttachmentDetails(BAFS.attach.info).then(function (objectId) {
            this.adapter.attachmentInfo.relatedRecordId = objectId;
            console.log('Image processing completed.');

            function _allowUI() {// site.getAttachments().then(
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

            _util__WEBPACK_IMPORTED_MODULE_2__["default"].async(_allowUI, 0);
            d.resolve();
          }, function (err) {
            d.reject(err);
          });
        } catch (ex) {
          console.log(ex);
          d.reject(ex);
        }
      } else {
        d.reject('aborted');
      }

      return d.promise();
    }
  }, {
    key: "uploadBinaryAttachment",
    value: function uploadBinaryAttachment() {
      var d = $j.Deferred();

      try {
        // TODO: add code for implementation
        d.resolve();
      } catch (ex) {
        console.log(ex);
        d.reject(ex);
      }

      return d.promise();
    } //      deleteAttachment     (siteFeatureId, attachmentId, relatedRecordId) {
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

  }, {
    key: "showSiteAttachment",
    value: function showSiteAttachment(siteFeatureId, attachmentId) {// var url = REST.url_Sites + siteFeatureId + '/attachments/' + attachmentId
      //     + '?token=' + BAFS.Token();
      // window.open(url);
    }
  }]);

  return ImageProcessor;
}();



/***/ }),

/***/ "./js6/index.js":
/*!**********************!*\
  !*** ./js6/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");
/* harmony import */ var core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./js6/util.js");
/* harmony import */ var _ArcGISAccess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ArcGISAccess */ "./js6/ArcGISAccess.js");
/* harmony import */ var _psv360__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./psv360 */ "./js6/psv360.js");
/* harmony import */ var _geDynamics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geDynamics */ "./js6/geDynamics.js");
/* harmony import */ var _BASitesAdapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BASitesAdapter */ "./js6/BASitesAdapter.js");
/* harmony import */ var _psvMath__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./psvMath */ "./js6/psvMath.js");




function _templateObject() {
  var data = _taggedTemplateLiteral([" \n   <div id=\"_ba_pano_compassDiv\">       <div id=\"_ba_pano_compassNS\">N</div>\n      <div id=\"_ba_pano_compassDegrees\">270</div>\n      <div id=\"_ba_pano_compassDegrees2\"></div>\n      <div id=\"_ba_pano_compassPtr\"></div>\n  </div>\n  <div id=\"_ba_pano_compassCL\"></div>\n  <div id=\"_ba_pano_360container\">\n      <div id=\"_ba_pano_360frame\"></div>\n  </div>\n  <div id=\"_ba_pano_photosphere\"></div>\n  <div id=\"_ba_pano_360confirm\">\n      <div class=\"_ba_pano_360message\"></div>\n      <button class=\"_ba_pano_360cancel\">Cancel</button>\n      <button class=\"_ba_pano_360save\">Save</button>\n  </div>\n  <div id=\"_ba_pano_360dialog\">\n  <div id=\"_ba_pano_dialogContainer\"></div>\n        <div id=\"_ba_pano_dialog_OK\" class=\"_ba_pano_dialog_buttons\">Ok</div>\n        <div id=\"_ba_pano_dialog_Cancel\" class=\"_ba_pano_dialog_buttons\">Cancel</div>\n    </div>\n  <canvas id=\"_ba_pano_thumb_canvas\"></canvas>\n  <div id=\"_ba_pano_thumb_confirm\">\n      <div class=\"_ba_pano_360message\">Upload thumbnail using this image?</div>\n      <img id=\"_ba_pano_thumb_preview\"/>\n      <button class=\"_ba_pano_360cancel\" id=\"_ba_pano_thumbnail_cancel\">Cancel</button>\n      <button class=\"_ba_pano_360save\" id=\"_ba_pano_thumbnail_save\">Save</button>\n  </div>\n  <img id=\"_ba_pano_thumbnail_hidden_image\" style=\"display:none;\"/> \n  \n  <div id=\"_ba_pano_360_facts_dismiss\">Close</div>\n  \n    <div id=\"_ba_pano_facts_AVEHINC\" style=\"left: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Ave Income</div>\n    </div>\n    <div id=\"_ba_pano_facts_AVEHVAL\" style=\"left: 3%;top:240px;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Home Value</div>\n    </div>\n    <div id=\"_ba_pano_facts_HOWN\" style=\"left: 3%;top:380px;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">% Homeowners</div>\n    </div>\n    \n    <div id=\"_ba_pano_facts_MEDAGE\" style=\"right: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Median Age</div>\n    </div>\n    <div id=\"_ba_pano_facts_COLED\" style=\"top:240px;right: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">College Ed</div>\n    </div>\n    <div id=\"_ba_pano_facts_UNEMP\" style=\"top:380px;right: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Unemployed</div>\n    </div>\n    \n    <svg id=\"geTargetMask\" width=\"100%\" height=\"calc(100% - 40px)\">\n    <rect id=\"geTargetMaskLeft\" width=\"25%\" height=\"100%\" class=\"geTargetMaskRect\" />\n    <rect id=\"geTargetMaskRight\" width=\"25%\" height=\"100%\" x=\"75%\"  class=\"geTargetMaskRect\" />\n    </svg>\n    <div id=\"geTargetArrow\"></div>\n        "], [" \n   <div id=\"_ba_pano_compassDiv\"> \\\n      <div id=\"_ba_pano_compassNS\">N</div>\n      <div id=\"_ba_pano_compassDegrees\">270</div>\n      <div id=\"_ba_pano_compassDegrees2\"></div>\n      <div id=\"_ba_pano_compassPtr\"></div>\n  </div>\n  <div id=\"_ba_pano_compassCL\"></div>\n  <div id=\"_ba_pano_360container\">\n      <div id=\"_ba_pano_360frame\"></div>\n  </div>\n  <div id=\"_ba_pano_photosphere\"></div>\n  <div id=\"_ba_pano_360confirm\">\n      <div class=\"_ba_pano_360message\"></div>\n      <button class=\"_ba_pano_360cancel\">Cancel</button>\n      <button class=\"_ba_pano_360save\">Save</button>\n  </div>\n  <div id=\"_ba_pano_360dialog\">\n  <div id=\"_ba_pano_dialogContainer\"></div>\n        <div id=\"_ba_pano_dialog_OK\" class=\"_ba_pano_dialog_buttons\">Ok</div>\n        <div id=\"_ba_pano_dialog_Cancel\" class=\"_ba_pano_dialog_buttons\">Cancel</div>\n    </div>\n  <canvas id=\"_ba_pano_thumb_canvas\"></canvas>\n  <div id=\"_ba_pano_thumb_confirm\">\n      <div class=\"_ba_pano_360message\">Upload thumbnail using this image?</div>\n      <img id=\"_ba_pano_thumb_preview\"/>\n      <button class=\"_ba_pano_360cancel\" id=\"_ba_pano_thumbnail_cancel\">Cancel</button>\n      <button class=\"_ba_pano_360save\" id=\"_ba_pano_thumbnail_save\">Save</button>\n  </div>\n  <img id=\"_ba_pano_thumbnail_hidden_image\" style=\"display:none;\"/> \n  \n  <div id=\"_ba_pano_360_facts_dismiss\">Close</div>\n  \n    <div id=\"_ba_pano_facts_AVEHINC\" style=\"left: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Ave Income</div>\n    </div>\n    <div id=\"_ba_pano_facts_AVEHVAL\" style=\"left: 3%;top:240px;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Home Value</div>\n    </div>\n    <div id=\"_ba_pano_facts_HOWN\" style=\"left: 3%;top:380px;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">% Homeowners</div>\n    </div>\n    \n    <div id=\"_ba_pano_facts_MEDAGE\" style=\"right: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Median Age</div>\n    </div>\n    <div id=\"_ba_pano_facts_COLED\" style=\"top:240px;right: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">College Ed</div>\n    </div>\n    <div id=\"_ba_pano_facts_UNEMP\" style=\"top:380px;right: 3%;\" class=\"_ba_pano_facts\" >\n        <div class=\"_ba_pano_facts_graphic\" ></div>\n        <div class=\"_ba_pano_facts_valueDiv\" ></div>\n        <div class=\"_ba_pano_facts_labelDiv\">Unemployed</div>\n    </div>\n    \n    <svg id=\"geTargetMask\" width=\"100%\" height=\"calc(100% - 40px)\">\n    <rect id=\"geTargetMaskLeft\" width=\"25%\" height=\"100%\" class=\"geTargetMaskRect\" />\n    <rect id=\"geTargetMaskRight\" width=\"25%\" height=\"100%\" x=\"75%\"  class=\"geTargetMaskRect\" />\n    </svg>\n    <div id=\"geTargetArrow\"></div>\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var containerId = 'body';
var $j = jQuery.noConflict(); // jshint ignore:line

$j(document).ready(function () {
  function _pano_xWhite(strings) {
    for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      placeholders[_key - 1] = arguments[_key];
    }

    var withSpace = strings.reduce(function (result, string, i) {
      return result + placeholders[i - 1] + string;
    });
    return withSpace.replace(/$\n^\s*/gm, ' ');
  } // Load HTML for viewer


  var html = _pano_xWhite(_templateObject());

  $j(containerId).html(html);
  _util_js__WEBPACK_IMPORTED_MODULE_3__["default"].loadCSS("./css/ba-panoramic-images.css");

  function _startup() {
    // Extend math functions
    Math.radians = function (degrees) {
      return degrees * Math.PI / 180;
    };

    Math.degrees = function (radians) {
      return radians * 180 / Math.PI;
    };

    var qsHash, qsName;
    /* capture query string params
     *   URL Params:
     *      url  : url to the layer that contains sites
     *      loc  : geographic coordinate of image center - [lat:<coord>, lon:<coord>]
     *      site : site Id that this image relates to (this is not the feature id)
     *      att  :  site attachment id in the case that we are displaying an existing site image
     *      tok  :  token
     */

    var qsInfo = {};
    var qs = decodeURIComponent(document.URL.split('?')[1]);
    var qsIdx = {
      url: 'baseUrl',
      name: 'name',
      loc: 'location',
      site: 'siteId',
      att: 'attachmentId',
      tok: 'token'
    };

    if (qs != undefined) {
      qs = qs.split('&');

      for (var i = 0; i < qs.length; i++) {
        qsHash = qs[i].split('=');
        qsName = qsIdx[qsHash[0]];

        if (qsName && qsHash[1]) {
          qsInfo[qsName] = qsHash[1];
        }
      }
    }

    if (qsInfo.baseUrl && qsInfo.location && qsInfo.siteId && qsInfo.token && qsInfo.name) {
      _BASitesAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].ServiceURL = qsInfo.baseUrl;
      _BASitesAdapter__WEBPACK_IMPORTED_MODULE_7__["default"].CurrentSite = {
        displayName: qsInfo.name,
        featureId: qsInfo.siteId,
        location: qsInfo.location
      };
    }

    var fileAdapter = new _ArcGISAccess__WEBPACK_IMPORTED_MODULE_4__["default"]();
    fileAdapter.setFileInfo(qsInfo);
    window.view = new _psv360__WEBPACK_IMPORTED_MODULE_5__["default"](fileAdapter);
    window.view.create_360_image();
    _psv360__WEBPACK_IMPORTED_MODULE_5__["default"].EditMode = _psv360__WEBPACK_IMPORTED_MODULE_5__["default"].EditType.none;
    $j('#_ba_pano_facts_POP div._ba_pano_facts_valueDiv').html('7,133');
    $j('#_ba_pano_facts_POP div._ba_pano_facts_labelDiv').html("Household");
    fileAdapter.getSites(_psvMath__WEBPACK_IMPORTED_MODULE_8__["default"].UnitsType.miles);
  }

  _util_js__WEBPACK_IMPORTED_MODULE_3__["default"].Token = "";
  _util_js__WEBPACK_IMPORTED_MODULE_3__["default"].async(_startup, 100);
});

window._ba_pano_updateHeading = function (h) {
  _util_js__WEBPACK_IMPORTED_MODULE_3__["default"]._updateHeading(h);
};

_geDynamics__WEBPACK_IMPORTED_MODULE_6__["default"].sectionVariables = {
  avehinc: {
    elementId: '#_ba_pano_facts_AVEHINC',
    values: [87475, 42000, 38002, 74390, 65000, 72000, 88000, 94000]
  },
  avehal: {
    elementId: '#_ba_pano_facts_AVEHVAL',
    values: [465046, 320000, 260000, 399000, 401000, 470000, 504000, 490000]
  },
  hown: {
    elementId: '#_ba_pano_facts_HOWN',
    values: [12, 9, 11, 60, 48, 40, 44, 37]
  },
  medage: {
    elementId: '#_ba_pano_facts_MEDAGE',
    values: [35.8, 29, 27, 40, 36, 42, 39, 34]
  },
  coled: {
    elementId: '#_ba_pano_facts_COLED',
    values: [37, 33, 18, 20, 44, 40, 38, 38]
  },
  unemp: {
    elementId: '#_ba_pano_facts_UNEMP',
    values: [5, 6, 8, 4.4, 3.9, 2, 3, 3.8]
  }
};

window._ba_pano_onToggleFacts = function () {
  _geDynamics__WEBPACK_IMPORTED_MODULE_6__["default"].toggleFacts();
};

window._ba_pano_onHeadingChange = function (heading) {
  if ($j('#_ba_pano_360_facts_dismiss').css('display') == 'block') {
    var v = _geDynamics__WEBPACK_IMPORTED_MODULE_6__["default"].updateVariables(heading);
  }
};

_util_js__WEBPACK_IMPORTED_MODULE_3__["default"].HeadingChangedCallbacks = [_ba_pano_onHeadingChange];
_geDynamics__WEBPACK_IMPORTED_MODULE_6__["default"].Resolution = _geDynamics__WEBPACK_IMPORTED_MODULE_6__["default"].ResolutionType.medium;
_geDynamics__WEBPACK_IMPORTED_MODULE_6__["default"].createSections({});

function _fitMask() {
  var svg = $j('#geTargetMask');
  var wt = $j(window).width();
  var ht = $j(window).height() - 40;
  svg.width(wt);
  svg.height(ht);
  var rectWt = Math.max(124, wt / 4);
  var x = wt - rectWt;
  $j('#geTargetMask rect').attr('width', rectWt + 'px');
  $j('#geTargetMaskRight').attr('x', x + 'px');
}

$j(window).on('resize', function () {
  setTimeout(_fitMask, 0);
});
setTimeout(_fitMask, 300);

/***/ }),

/***/ "./js6/progress.js":
/*!*************************!*\
  !*** ./js6/progress.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressPopup; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./js6/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ProgressPopup =
/*#__PURE__*/
function () {
  function ProgressPopup() {
    _classCallCheck(this, ProgressPopup);
  }

  _createClass(ProgressPopup, null, [{
    key: "show",
    value: function show(percent, msg) {
      ProgressPopup.startSpinner(); // TODO: show popup

      console.log(percent + '% ', +msg);
    }
  }, {
    key: "update",
    value: function update(percent, msg) {
      console.log(percent + '% ', +msg);
    }
  }, {
    key: "hide",
    value: function hide(msg) {
      function _hidePopup() {// TODO: hide progress popup
      }

      ProgressPopup.stopSpinner();

      if (_util__WEBPACK_IMPORTED_MODULE_0__["default"].hasText(msg)) {
        _util__WEBPACK_IMPORTED_MODULE_0__["default"].async(_hidePopup, 800);
      } else {
        _hidePopup();
      }
    }
  }, {
    key: "startSpinner",
    value: function startSpinner() {
      console.log('start busy spinner');
    }
  }, {
    key: "stopSpinner",
    value: function stopSpinner() {
      console.log('stop busy spinner');
    }
  }]);

  return ProgressPopup;
}();



/***/ }),

/***/ "./js6/psv360.js":
/*!***********************!*\
  !*** ./js6/psv360.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PSV360; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imageProcessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageProcessing */ "./js6/imageProcessing.js");
/* harmony import */ var _geDynamics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geDynamics */ "./js6/geDynamics.js");
/* harmony import */ var _psvMath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./psvMath */ "./js6/psvMath.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var PSV360 =
/*#__PURE__*/
function () {
  function PSV360(adapter) {
    _classCallCheck(this, PSV360);

    this.PSViewer = null;
    this.imageProcessor = new _imageProcessing__WEBPACK_IMPORTED_MODULE_1__["default"](adapter);
    this._360_currentImage = 0;
    this._360_photoTrueNorthAdjustment = 0;
    this._options360 = {};
    this.fileAdapter = adapter;
    this.editMode = null;
    this.panos = [{
      url: './images/360/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
      desc: 'Bryce Canyon',
      target: {
        longitude: 3.848,
        latitude: -0.244
      }
    }, {
      url: './images/360/R0010131_esri.jpg',
      desc: 'ESRI Building M1 lobby</b>',
      target: {
        longitude: 3.848,
        latitude: -0.244
      }
    }, {
      url: './images/360/Bryce-Canyon-By-Jess-Beauchemin.jpg',
      desc: 'Bryce Canyon 2',
      target: {
        longitude: 3.715,
        latitude: 0.574
      }
    }, {
      url: './images/360/PANO_20140718_161703.jpg',
      desc: 'Chinese government building</b>',
      target: {
        longitude: 3.848,
        latitude: -0.244
      }
    }];
    this.defaultLon = 0;
    this.defaultLat = 0;

    function _fitOuter() {
      var curHt = $j(window).height();
      var curWt = $j(window).width();
      $j('#_ba_pano_360container').width(curWt - 10 + 'px');
      $j('#_ba_pano_360container').height(curHt - 10 + 'px');
    }

    $j("#_ba_pano_360frame").resizable({
      containment: '#_ba_pano_360container',
      aspectRatio: true,
      handles: "nw, ne, sw,se"
    }).draggable({
      containment: '#_ba_pano_360container'
    });

    _fitOuter(); // Resize event handler


    $j(window).resize(function () {
      _fitOuter();
    });
  }

  _createClass(PSV360, [{
    key: "showPopup",
    value: function showPopup(msg, saveCB, cancelCB, placement) {
      var confirmBox = $j("#_ba_pano_360confirm");
      confirmBox.find("._ba_pano_360message").text(msg);
      confirmBox.find("._ba_pano_360save,._ba_pano_360cancel").unbind().click(function () {
        confirmBox.hide(300);
      });
      confirmBox.find("._ba_pano_360save").click(saveCB);
      confirmBox.find("._ba_pano_360cancel").click(cancelCB);

      if (placement) {
        switch (placement) {
          case 'bottomright':
            {
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
  }, {
    key: "showDialog",
    value: function showDialog(html, okCB, cancelCB, placement) {
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

      dialog.show(500); //view.PSViewer._displayCompassReading(0);
    }
  }, {
    key: "hideDialog",
    value: function hideDialog() {
      $j("#_ba_pano_360dialog").hide();
      $j("#_ba_pano_dialogContainer").empty();
    }
  }, {
    key: "_lang",
    value: function _lang(key, param) {
      console.log('get Language: ' + key);
    }
  }, {
    key: "_onCancelThumbnail",
    value: function _onCancelThumbnail() {
      // TODO: implement cancel
      $j('#_ba_pano_360container').hide();
    }
  }, {
    key: "_extractThumbnailImage",
    value: function _extractThumbnailImage(canvas) {
      var d = $j.Deferred();
      this.imageProcessor.generateThumbnailBytes(canvas).then(function () {
        var bytes = BAFS.attach.info.thumbnailImage;
        var imgSource = BAFS.imagePrefix + bytes;
        $j('#_ba_pano_thumb_preview').attr('src', imgSource);
        $j('#_ba_pano_thumb_preview').show();
        d.resolve();
      }, function (err) {
        console.log(err);
        d.reject(err);
      });
      return d.promise();
    }
  }, {
    key: "_onSetThumbnail",
    value: function _onSetThumbnail() {
      var view = window.view; // save thumbnail from within frame

      var frame = $j("#_ba_pano_360frame");
      var rawtop = frame.css('top');
      var rawleft = frame.css('left');
      var top = parseInt(rawtop.substr(0, rawtop.length - 2));
      var left = parseInt(rawleft.substr(0, rawleft.length - 2));
      var width = frame.width();
      var height = frame.height();
      var canvas = document.getElementById("_ba_pano_thumb_canvas");
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d"); // extract image from main canvas

      var c = $j('#_ba_pano_photosphere .psv-canvas-container canvas')[0];
      $j(c).attr('id', 'mainSphericalCanvas');
      var mainCanvas = document.getElementById('mainSphericalCanvas'); // capture visible area of spherical image

      var imgSource = mainCanvas.toDataURL('image/jpeg');
      var tmpImg = $j('#_ba_pano_thumbnail_hidden_image');
      var imgClipped;
      var img = new Image();

      img.onload = function () {
        var drawWidth = mainCanvas.width * (width / window.innerWidth);
        var drawHeighth = drawWidth * (height / width);
        var drawTop = top * mainCanvas.height / window.innerHeight;
        var drawLeft = left * mainCanvas.width / window.innerWidth;
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
          }); // extract thumnail bits

          view._extractThumbnailImage(canvas).then(function (data) {
            // check if site is created
            // if needed, save current image to site
            console.log("created thumb"); // upload thumbnail
          }, function (err) {
            console.log(err);
          });

          console.log("completed thumbnail extraction");
        };

        img.src = './images/icon360_48x35.png';
      };

      img.src = imgSource; // tmpImg.on('load', function(){
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
      console.log("asdf:)");
    }
  }, {
    key: "_onSetTrueNorth",
    value: function _onSetTrueNorth() {
      // save any changes made to the image @@@@@@@@@@@@@@@@
      $j('#_ba_pano_compassCL').hide(); // Save photo true north adjustment

      var lon = _psvMath__WEBPACK_IMPORTED_MODULE_3__["default"].rad2deg(view.PSViewer.prop.position.longitude) % 360;
      var offset = lon > 180 ? -(360 - lon) : lon;
      view._360_photoTrueNorthAdjustment += offset; // if (window.localStorage){
      //   window.localStorage.setItem('_360_trueNorth_adjustment',       this._360_photoTrueNorthAdjustment);
      // }
      // recreate the  image

      view.create_360_image();
    }
  }, {
    key: "_onCancelTrueNorth",
    value: function _onCancelTrueNorth() {
      $j('#_ba_pano_compassDiv').hide();
      $j('#_ba_pano_compassCL').hide();
    }
  }, {
    key: "create_360_image",
    value: function create_360_image() {
      var self = this; // reset image viewer

      this.PSViewer = null;
      $j('#_ba_pano_photosphere').empty();
      $j('#_ba_pano_compassDiv').show();
      this.PSViewer = new PhotoSphereViewer({
        container: '_ba_pano_photosphere',
        panorama: this.panos[0].url,
        caption: this.panos[0].desc,
        loading_img: './images/photosphere-logo.gif',
        anim_speed: '-2rpm',
        default_fov: 50,
        default_long: _psvMath__WEBPACK_IMPORTED_MODULE_3__["default"].deg2rad(this.defaultLon),
        default_lat: _psvMath__WEBPACK_IMPORTED_MODULE_3__["default"].deg2rad(this.defaultLat),
        sphere_correction: {
          pan: _psvMath__WEBPACK_IMPORTED_MODULE_3__["default"].deg2rad(view._360_photoTrueNorthAdjustment),
          tilt: 0,
          roll: 0
        },
        fisheye: true,
        move_speed: 1.1,
        // clampLatitude: true,
        time_anim: false,
        //    touchmove_two_fingers: true,
        //    mousemove_hover: true,
        navbar: ['autorotate', 'zoom', 'download', 'markers', 'exif', 'facts', {
          id: 'true_north_button',
          title: 'Set True North',
          className: 'custom-button',
          content: '<img src="./images/true_north.png" class="trueNorthButton">',
          onClick: function onClick() {
            $j('#_ba_pano_compassDiv').show();
            $j('#_ba_pano_compassCL').show();
            self.showPopup('Position image True North in center of screen and click Save', self._onSetTrueNorth, self._onCancelTrueNorth);
          }
        }, {
          id: 'set_thumbnail_button',
          title: 'Select Thumbnail',
          className: 'custom-button',
          content: '<img src="./images/thumbnail_button.png" class="thumbnailButton">',
          onClick: function onClick() {
            $j('#_ba_pano_360container').show(400);
            self.showPopup('Move/resize Thumbnail frame and choose Save', self._onSetThumbnail, self._onCancelThumbnail, 'bottomright');
          }
        }, {
          title: 'Change image',
          className: 'custom-button',
          content: '<img src="./images/nextimage32.png" class="nextImageButton">',
          onClick: function () {
            var i = 0;
            var loading = false;
            return function () {
              if (loading) {
                return;
              }

              i = 1 - i;
              loading = true;
              self.PSViewer.clearMarkers();
              self._360_currentImage = (self._360_currentImage + 1) % self.panos.length;

              try {
                self.PSViewer.setPanorama(self.panos[self._360_currentImage].url, self.panos[self._360_currentImage].target, true).then(function () {
                  view.PSViewer.setCaption(self.panos[self._360_currentImage].desc);
                  loading = false;
                });
              } catch (ex) {
                console.log(ex);
              }
            };
          }()
        }, 'caption',
        /* 'gyroscope',*/
        'stereo', 'fullscreen'],
        markers: function () {
          var a = []; //
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
            id: 'polygon',
            content: 'This mountain is so great it has dots on it!',
            polygon_px: [3184, 794, 3268, 841, 3367, 1194, 3327, 1307, 3065, 1221, 3097, 847],
            svgStyle: {
              fill: 'url(#points)',
              //'rgba(255,0,0,0.3)',
              stroke: 'rgba(255, 130, 50, 0.8)',
              strokeWidth: '4px'
            },
            tooltip: {
              content: 'This is a mountain',
              position: 'right bottom'
            }
          }); //

          a.push({
            id: 'polyline',
            polyline_rad: [5.924, 0.064, 5.859, -0.061, 5.710, -0.132, 5.410, -0.287, 4.329, -0.490, 3.838, -0.370, 3.725, -0.241],
            svgStyle: {
              stroke: 'rgba(80, 100, 50, 0.8)',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '10px'
            },
            tooltip: 'This is a track'
          }); //
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
            id: 'text',
            html: 'This <b>is</b> text <img src="./images/pin3.png" style="height: 24px; vertical-align: top;"/>',
            anchor: 'bottom right',
            style: {
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Helvetica, sans-serif',
              textAlign: 'center'
            },
            longitude: 0.45,
            latitude: -0.4
          }); //
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
            id: 'path',
            tooltip: 'A custom path',
            path: 'M 0 0 L 60 60 L 60 0 L 0 60 L 0 0',
            svgStyle: {
              fill: 'rgba(255,255,0,0.3)',
              stroke: 'yellow',
              strokeWidth: '2px'
            },
            longitude: -0.5,
            latitude: -0.38,
            anchor: 'center left'
          }); //
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
        }()
      });
      this.PSViewer.on('click', function (e) {
        if (!window.view) {
          return;
        } // User clicked on 360 image


        switch (PSV360.EditMode) {
          case PSV360.EditType.none:
            {
              /* do nothing */
              break;
            }

          case PSV360.EditType.addImageSpot:
            {
              // show popup that asks for
              //    url OR local file system
              //    url reference or save image to site
              //
              view.showDialog('Add image spot', function () {
                view.hideDialog();
              }, function () {
                view.hideDialog();
              });
              break;
            }

          case PSV360.EditType.addMarker:
            {
              view.showDialog('Add marker', function () {
                view.hideDialog();
              }, function () {
                view.hideDialog();
              }); // view.PSViewer.addMarker({
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

          case PSV360.EditType.addLine:
            {
              view.showDialog('Add line', function () {
                view.hideDialog();
              }, function () {
                view.hideDialog();
              });
              break;
            }

          case PSV360.EditType.addPolygon:
            {
              view.showDialog('Add polygon', function () {
                view.hideDialog();
              }, function () {
                view.hideDialog();
              });
              break;
            }

          case PSV360.EditType.addLabel:
            {
              view.showDialog('Add label', function () {
                view.hideDialog();
              }, function () {
                view.hideDialog();
              });
              break;
            }
        }
      });
      this.PSViewer.on('select-marker', function (marker, dblclick) {
        if (marker.data && marker.data.deletable) {
          if (dblclick) {
            view.PSViewer.removeMarker(marker);
          } else {// PSViewer.updateMarker({
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
    } // _hasValidSiteInfo() {
    //     return Util.hasText(_options360.baseUrl) && Util.hasText(_options360.siteId) && Util.hasText(_options360.token);
    // }

    /*
    * Prompts for image
    *   Image can be a URL to a valid 360 image, or panorama (must be equirectangular)
    *   Image can be a local resource
    *
    *   The image will be viewed/edited and potentially saved as a site attachment (as image or url reference)
    */

  }, {
    key: "_promptForImage",
    value: function _promptForImage() {
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

  }, {
    key: "_promptForRelatedImage",
    value: function _promptForRelatedImage() {
      var d = $j.Deferred();
      d.resolve();
      return d.promise();
    }
  }, {
    key: "startSpinner",
    value: function startSpinner() {
      // avoid stuttering gif by re-adding html to DOM every time
      var div = $j('#thumbnailsGridSpinnerDiv');
      div.show(0, function () {
        $j('<div id="thumbnailsGridSpinner"></div>').appendTo(div);
      });
    }
  }, {
    key: "stopSpinner",
    value: function stopSpinner() {} // var div = $j('#thumbnailsGridSpinnerDiv');
    // div.empty();
    // div.hide();
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

  }], [{
    key: "EditMode",
    set: function set(t) {
      this._editMode = t;
    },
    get: function get() {
      return this.hasOwnProperty('_editMode') ? this._editMode : PSV360.EditType.none;
    }
  }, {
    key: "EditType",
    get: function get() {
      return {
        none: 0,
        addImageSpot: 1,
        addMarker: 2,
        addLine: 3,
        addPolygon: 4,
        addLabel: 5
      };
    }
  }]);

  return PSV360;
}();



/***/ }),

/***/ "./js6/psvMath.js":
/*!************************!*\
  !*** ./js6/psvMath.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PSVMath; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./js6/util.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PSVMath =
/*#__PURE__*/
function () {
  function PSVMath() {
    _classCallCheck(this, PSVMath);
  }

  _createClass(PSVMath, null, [{
    key: "calculateBearingDist",

    /*
     * Calculates bearing and distance for an array of points
     *
     * Format:  [
     *   {
     *      name:<location identifier>,
     *      lat: <latitude>,
     *      lon: <longitude>
     *   },
     *   ...
     * ]
     */
    value: function calculateBearingDist(points, units) {
      var data = [];
      var lat1 = 34.054389720727656;
      var lon1 = -117.19956127926712;

      function bearingInitial(lat1, long1, lat2, long2) {
        return (bearingDegrees(lat1, long1, lat2, long2) + 360) % 360;
      }

      function bearingFinal(lat1, long1, lat2, long2) {
        return (bearingDegrees(lat2, long2, lat1, long1) + 180) % 360;
      }

      function bearingDegrees(lat1, long1, lat2, long2) {
        var d2r = Math.PI / 180.0;
        var phi1 = lat1 * d2r;
        var phi2 = lat2 * d2r;
        var lam1 = long1 * d2r;
        var lam2 = long2 * d2r;
        return Math.atan2(Math.sin(lam2 - lam1) * Math.cos(phi2), Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(lam2 - lam1)) * 180 / Math.PI;
      }

      $j.each(points, function (k, v) {
        var bearingDeg = bearingInitial(lat1, lon1, v.lat, v.lon);
        var dist = PSVMath.distanceBetweenPoints(units, lat1, lon1, v.lat, v.lon);
        data.push({
          name: v.name,
          bearing: bearingDeg,
          dist: dist
        });
      });
      return data;
    }
  }, {
    key: "distanceBetweenPoints",
    value: function distanceBetweenPoints(units, lat1, lon1, lat2, lon2) {
      var rtn;
      var d2r = Math.PI / 180;
      var phi1 = lat1 * d2r;
      var phi2 = lat2 * d2r;
      var lam1 = lon1 * d2r;
      var lam2 = lon2 * d2r;
      var km = 6371.01 * Math.acos(Math.sin(phi1) * Math.sin(phi2) + Math.cos(phi1) * Math.cos(phi2) * Math.cos(lam2 - lam1));

      switch (units) {
        case PSVMath.UnitsType.meters:
          {
            rtn = km * 1000;
            break;
          }

        case PSVMath.UnitsType.kilometers:
          {
            rtn = km;
            break;
          }

        case PSVMath.UnitsType.miles:
          {
            rtn = PSVMath.metersToMiles(km * 1000);
            break;
          }
      }

      return rtn;
    } // Semi-axes of WGS-84 geoidal reference

  }, {
    key: "WGS84EarthRadius",
    // Earth radius at a given latitude, according to the WGS-84 ellipsoid [m]
    value: function WGS84EarthRadius(lat) {
      if (!_util__WEBPACK_IMPORTED_MODULE_1__["default"].isDef(lat)) {
        return 6371e3; // metres
      } // http://en.wikipedia.org/wiki/Earth_radius


      var An = PSVMath.WGS84_a * PSVMath.WGS84_a * Math.cos(lat);
      var Bn = PSVMath.WGS84_b * PSVMath.WGS84_b * Math.sin(lat);
      var Ad = PSVMath.WGS84_a * Math.cos(lat);
      var Bd = PSVMath.WGS84_b * Math.sin(lat);
      return Math.sqrt((An * An + Bn * Bn) / (Ad * Ad + Bd * Bd));
    }
  }, {
    key: "setNearbyRangeInMiles",
    value: function setNearbyRangeInMiles(miles) {
      PSVMath.boundingDistanceFromPointKm = PSVMath.milesToKm(miles);
    }
  }, {
    key: "milesToKm",
    value: function milesToKm(miles) {
      return miles / 0.621371192237334;
    }
  }, {
    key: "metersToMiles",
    value: function metersToMiles(meters) {
      return meters / 1609.344;
    }
  }, {
    key: "convertMilesToLocaleKmString",
    value: function convertMilesToLocaleKmString(miles, nDecimals) {
      var factor = nDecimals && nDecimals > 0 ? Math.round(nDecimals) * 10 : 1;
      var val = Math.round(this.milesToKm(miles) * factor) / factor;
      return _util__WEBPACK_IMPORTED_MODULE_1__["default"].getLocalizedNumber(val, nDecimals);
    }
  }, {
    key: "getNearbyBoundingBox",
    // The 'point' parameter is an object:
    //   {
    //     lat: number, // in degrees
    //     lon: number  // in degrees
    //   }
    //
    value: function getNearbyBoundingBox(point) {
      try {
        // Bounding box surrounding the point at given coordinates,
        // assuming local approximation of Earth surface as a sphere
        // of radius given by WGS84
        var lat = PSVMath.deg2rad(point.lat);
        var lon = PSVMath.deg2rad(point.lon);
        var halfSide = 1000 * PSVMath.boundingDistanceFromPointKm; // Radius of Earth at given latitude

        var radius = PSVMath.WGS84EarthRadius(lat); // Radius of the parallel at given latitude

        var pradius = radius * Math.cos(lat);
        var latMin = lat - halfSide / radius;
        var latMax = lat + halfSide / radius;
        var lonMin = lon - halfSide / pradius;
        var lonMax = lon + halfSide / pradius;
        var latMinDeg = PSVMath.rad2deg(latMin);
        var latMaxDeg = PSVMath.rad2deg(latMax);
        var lonMinDeg = PSVMath.rad2deg(lonMin);
        var lonMaxDeg = PSVMath.rad2deg(lonMax);
        var latlons = [[latMinDeg, lonMinDeg], [latMinDeg, lonMaxDeg], [latMaxDeg, lonMaxDeg], [latMaxDeg, lonMinDeg], [latMinDeg, lonMinDeg]]; // verify the brr size

        return {
          latlons: latlons,
          minPoint: {
            lat: latMinDeg,
            lon: lonMinDeg
          },
          maxPoint: {
            lat: latMaxDeg,
            lon: lonMaxDeg
          }
        };
      } catch (ex) {
        console.log(ex);
      }
    }
  }, {
    key: "deg2rad",
    value: function deg2rad(degrees) {
      return Math.PI * degrees / 180.0;
    }
  }, {
    key: "rad2deg",
    value: function rad2deg(radians) {
      return 180.0 * radians / Math.PI;
    }
  }, {
    key: "UnitsType",
    get: function get() {
      return {
        meters: 1,
        kilometers: 2,
        miles: 3
      };
    }
  }, {
    key: "WGS84_a",
    get: function get() {
      return 6378137.0; // Major semiaxis [m]
    }
  }, {
    key: "WGS84_b",
    get: function get() {
      return 6356752.3; // Minor semiaxis [m]
    }
  }, {
    key: "boundingDistanceFromPointKm",
    set: function set(kilometers) {
      PSVMath._boundingDistFromPtKm = kilometers;
    },
    get: function get() {
      var fallback = 40.2336; // 25 miles in kilometers;

      return this.hasOwnProperty('_boundingDistFromPtKm') ? this._boundingDistFromPtKm : fallback;
    }
  }]);

  return PSVMath;
}();



/***/ }),

/***/ "./js6/util.js":
/*!*********************!*\
  !*** ./js6/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Util; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "notDef",
    value: function notDef(obj) {
      return typeof obj === 'undefined' || obj === null;
    }
  }, {
    key: "isDef",
    value: function isDef(obj) {
      return !Util.notDef(obj);
    }
  }, {
    key: "hasText",
    value: function hasText(s) {
      return Util.isDef(str) && typeof str === "string" && str.length > 0 && str.trim().length > 0;
    }
  }, {
    key: "async",
    value: function async(rtn, ms) {
      return setTimeout(rtn, ms);
    }
  }, {
    key: "onException",
    value: function onException(ex) {
      console.log(ex);
    }
  }, {
    key: "log",
    value: function log(msg) {
      console.log(msg);
    }
  }, {
    key: "getExtension",
    value: function getExtension(s, toUpper) {
      var idx = s.lastIndexOf('.');

      if (idx >= 0 && s.length > idx + 1) {
        var str = s.substr(idx + 1);
        return toUpper ? str.toUpperCase() : str;
      } else {
        return null;
      }
    }
  }, {
    key: "removeExtension",
    value: function removeExtension(s) {
      return s.replace(/\.[^/.]+$/, "");
    }
  }, {
    key: "loadCSS",
    value: function loadCSS(url) {
      if (!$j('link[href="' + url + '"]').length) $j('head').append('<link rel="stylesheet" type="text/css" href="' + url + '">');
    }
  }, {
    key: "_updateHeading",
    value: function _updateHeading(heading) {
      if (Util.HeadingChangedCallbacks) {
        $j.each(Util.HeadingChangedCallbacks, function (k, v) {
          v(heading);
        });
      }
    }
  }, {
    key: "formatNumberWithCommas",
    value: function formatNumberWithCommas(x, nDecimals) {
      var n = nDecimals || 2;
      return parseFloat(x.toFixed(n)).toLocaleString().replace(/\.([0-9])$/, ".$10"); // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }, {
    key: "getKeys",
    value: function getKeys(obj) {
      var k,
          keys = [];

      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      return keys;
    }
  }, {
    key: "endsWith",
    value: function endsWith(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
  }, {
    key: "getLocalizedNumber",
    value: function getLocalizedNumber(n, nDecimals) {
      var nLocalized;
      var digits = nDecimals || nDecimals === 0 ? nDecimals : 1;

      if (n || n === 0) {
        try {
          var sFormat = '';

          for (var i = 0; i < digits; i++) {
            sFormat += '0';
          }

          sFormat = '0,0.[' + sFormat + ']';
          nLocalized = numeral(n).format(sFormat);
        } catch (ex) {
          console.log(ex);
        }
      }

      return nLocalized;
    }
  }, {
    key: "MAX_CANVAS_OUTPUT_DIMENSION",
    // Constants
    get: function get() {
      // Due to memory resource allocation limits on iPhones, limit canvas and output size
      return 1770;
    }
  }, {
    key: "MAX_OUTPUT_SIZE",
    get: function get() {
      return Util.MAX_CANVAS_OUTPUT_DIMENSION * Util.MAX_CANVAS_OUTPUT_DIMENSION;
    }
  }, {
    key: "IMAGEPREFIX",
    get: function get() {
      return 'data:image/jpeg;base64,';
    }
  }, {
    key: "_MAX_INPUT_FILE_SIZE_FOR_ATTACHMENTS_MB",
    get: function get() {
      return 50;
    }
  }, {
    key: "_ThumbnailImageDimension",
    get: function get() {
      return 440;
    }
  }, {
    key: "_DEFAULT_ATTACHMENT_ICONS",
    get: function get() {
      return [null, // 0
      'generic_icon.png', // 1
      'icon_7zip.png', // 2
      'icon_excel.png', // 3
      'icon_pdf.png', // 4
      'icon_ppt.png', // 5
      'icon_txt.png', // 6
      'icon_video.png', // 7
      'icon_word.png', // 8
      'icon_zip.png', // 9
      ''];
    }
  }, {
    key: "_ATTACHMENT_TYPES_TO_ICON_MAP",
    get: function get() {
      return {
        '7Z': 2,
        'AIF': 1,
        'AVI': 1,
        'BMP': 1,
        'DOC': 8,
        'DOCX': 8,
        'DOT': 1,
        'ECW': 1,
        'EMF': 1,
        'EPA': 1,
        'GIF': 1,
        'GML': 1,
        'GTAR': 1,
        'GZ': 1,
        'IMG': 1,
        'J2K': 1,
        'JP2': 1,
        'JPC': 1,
        'JPE': 1,
        'JPEG': 1,
        'JPF': 1,
        'JPG': 1,
        'JSON': 1,
        'MDB': 1,
        'MID': 1,
        'MOV': 7,
        'MP2': 7,
        'MP3': 7,
        'MP4': 7,
        'MPA': 7,
        'MPE': 1,
        'MPEG': 7,
        'MPG': 7,
        'MPV2': 7,
        'PDF': 4,
        'PNG': 1,
        'PPT': 1,
        'PPTX': 1,
        'PS': 1,
        'PSD': 1,
        'QT': 1,
        'RA': 1,
        'RAM': 1,
        'RAW': 1,
        'RMI': 1,
        'SID': 1,
        'TAR': 9,
        'TGZ': 1,
        'TIF': 1,
        'TIFF': 1,
        'TXT': 1,
        'VRML': 1,
        'WAV': 7,
        'WMA': 1,
        'WMF': 1,
        'WPS': 1,
        'XLS': 3,
        'XLSX': 3,
        'XLT': 1,
        'XML': 1,
        'ZIP': 9,
        //
        imageTypes: {
          'JPEG': 1,
          'JPG': 1,
          'PNG': 1,
          'TIF': 1,
          'TIFF': 1,
          'GIF': 1
        }
      };
    }
  }, {
    key: "_SANITIZE_ERROR_TEXT",
    get: function get() {
      return '[error]';
    }
  }, {
    key: "Token",
    // static TOKEN property
    get: function get() {
      return this.hasOwnProperty('_token') ? this._token : null;
    },
    set: function set(t) {
      this._token = t;
    }
  }, {
    key: "HeadingChangedCallbacks",
    get: function get() {
      return this.hasOwnProperty('_headingChangedCallbacks') ? this._headingChangedCallbacks : null;
    },
    set: function set(arr) {
      this._headingChangedCallbacks = arr;
    }
  }]);

  return Util;
}();



/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map