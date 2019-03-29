import Util from './util.js'
import ArcGISAccess from "./ArcGISAccess";
import PSV360 from "./psv360";
import GEDynamics from "./geDynamics";
import BASitesAdapter from "./BASitesAdapter"
import PSVMath from "./psvMath";

var containerId = 'body';
const $j        = jQuery.noConflict(); // jshint ignore:line

$j(document).ready(function () {
    function _pano_xWhite(strings, ...placeholders) {
        let withSpace = strings.reduce((result, string, i) => (result + placeholders[i - 1] + string));
        return withSpace.replace(/$\n^\s*/gm, ' ');
    }

// Load HTML for viewer
    var html = _pano_xWhite` 
   <div id="_ba_pano_compassDiv"> \
      <div id="_ba_pano_compassNS">N</div>
      <div id="_ba_pano_compassDegrees">270</div>
      <div id="_ba_pano_compassDegrees2"></div>
      <div id="_ba_pano_compassPtr"></div>
  </div>
  <div id="_ba_pano_compassCL"></div>
  <div id="_ba_pano_360container">
      <div id="_ba_pano_360frame"></div>
  </div>
  <div id="_ba_pano_photosphere"></div>
  <div id="_ba_pano_360confirm">
      <div class="_ba_pano_360message"></div>
      <button class="_ba_pano_360cancel">Cancel</button>
      <button class="_ba_pano_360save">Save</button>
  </div>
  <div id="_ba_pano_360dialog">
  <div id="_ba_pano_dialogContainer"></div>
        <div id="_ba_pano_dialog_OK" class="_ba_pano_dialog_buttons">Ok</div>
        <div id="_ba_pano_dialog_Cancel" class="_ba_pano_dialog_buttons">Cancel</div>
    </div>
  <canvas id="_ba_pano_thumb_canvas"></canvas>
  <div id="_ba_pano_thumb_confirm">
      <div class="_ba_pano_360message">Upload thumbnail using this image?</div>
      <img id="_ba_pano_thumb_preview"/>
      <button class="_ba_pano_360cancel" id="_ba_pano_thumbnail_cancel">Cancel</button>
      <button class="_ba_pano_360save" id="_ba_pano_thumbnail_save">Save</button>
  </div>
  <img id="_ba_pano_thumbnail_hidden_image" style="display:none;"/> 
  
  <div id="_ba_pano_360_facts_dismiss">Close</div>
  
    <div id="_ba_pano_facts_AVEHINC" style="left: 3%;" class="_ba_pano_facts" >
        <div class="_ba_pano_facts_graphic" ></div>
        <div class="_ba_pano_facts_valueDiv" ></div>
        <div class="_ba_pano_facts_labelDiv">Ave Income</div>
    </div>
    <div id="_ba_pano_facts_AVEHVAL" style="left: 3%;top:240px;" class="_ba_pano_facts" >
        <div class="_ba_pano_facts_graphic" ></div>
        <div class="_ba_pano_facts_valueDiv" ></div>
        <div class="_ba_pano_facts_labelDiv">Home Value</div>
    </div>
    <div id="_ba_pano_facts_HOWN" style="left: 3%;top:380px;" class="_ba_pano_facts" >
        <div class="_ba_pano_facts_graphic" ></div>
        <div class="_ba_pano_facts_valueDiv" ></div>
        <div class="_ba_pano_facts_labelDiv">% Homeowners</div>
    </div>
    
    <div id="_ba_pano_facts_MEDAGE" style="right: 3%;" class="_ba_pano_facts" >
        <div class="_ba_pano_facts_graphic" ></div>
        <div class="_ba_pano_facts_valueDiv" ></div>
        <div class="_ba_pano_facts_labelDiv">Median Age</div>
    </div>
    <div id="_ba_pano_facts_COLED" style="top:240px;right: 3%;" class="_ba_pano_facts" >
        <div class="_ba_pano_facts_graphic" ></div>
        <div class="_ba_pano_facts_valueDiv" ></div>
        <div class="_ba_pano_facts_labelDiv">College Ed</div>
    </div>
    <div id="_ba_pano_facts_UNEMP" style="top:380px;right: 3%;" class="_ba_pano_facts" >
        <div class="_ba_pano_facts_graphic" ></div>
        <div class="_ba_pano_facts_valueDiv" ></div>
        <div class="_ba_pano_facts_labelDiv">Unemployed</div>
    </div>
    
    <svg id="geTargetMask" width="100%" height="calc(100% - 40px)">
    <rect id="geTargetMaskLeft" width="25%" height="100%" class="geTargetMaskRect" />
    <rect id="geTargetMaskRight" width="25%" height="100%" x="75%"  class="geTargetMaskRect" />
    </svg>
    <div id="geTargetArrow"></div>
        `;

    $j(containerId).html(html);

    Util.loadCSS("./css/ba-panoramic-images.css");

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
        var qs     = decodeURIComponent(document.URL.split('?')[1]);
        var qsIdx  = {url: 'baseUrl', name: 'name', loc: 'location', site: 'siteId', att: 'attachmentId', tok: 'token'};
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
            BASitesAdapter.ServiceURL  = qsInfo.baseUrl;
            BASitesAdapter.CurrentSite = {
                displayName: qsInfo.name,
                featureId  : qsInfo.siteId,
                location   : qsInfo.location
            };
        }
        var fileAdapter = new ArcGISAccess();
        fileAdapter.setFileInfo(qsInfo);

        window.view = new PSV360(fileAdapter);
        window.view.create_360_image();
        PSV360.EditMode = PSV360.EditType.none;
        $j('#_ba_pano_facts_POP div._ba_pano_facts_valueDiv').html('7,133');
        $j('#_ba_pano_facts_POP div._ba_pano_facts_labelDiv').html("Household");

        fileAdapter.getSites(PSVMath.UnitsType.miles);
    }

    Util.Token = "";
    Util.async(_startup, 100);
});

window._ba_pano_updateHeading = function (h) {
    Util._updateHeading(h);
};
GEDynamics.sectionVariables   = {
    avehinc: {
        elementId: '#_ba_pano_facts_AVEHINC',
        values   : [87475, 42000, 38002, 74390, 65000, 72000, 88000, 94000]
    },
    avehal : {
        elementId: '#_ba_pano_facts_AVEHVAL',
        values   : [465046, 320000, 260000, 399000, 401000, 470000, 504000, 490000]
    },
    hown   : {
        elementId: '#_ba_pano_facts_HOWN',
        values   : [12, 9, 11, 60, 48, 40, 44, 37]
    },
    medage : {
        elementId: '#_ba_pano_facts_MEDAGE',
        values   : [35.8, 29, 27, 40, 36, 42, 39, 34]
    },
    coled  : {
        elementId: '#_ba_pano_facts_COLED',
        values   : [37, 33, 18, 20, 44, 40, 38, 38]
    },
    unemp  : {
        elementId: '#_ba_pano_facts_UNEMP',
        values   : [5, 6, 8, 4.4, 3.9, 2, 3, 3.8]
    },
};
window._ba_pano_onToggleFacts = function(){
    GEDynamics.toggleFacts();
};

window._ba_pano_onHeadingChange = function (heading) {
    if ($j('#_ba_pano_360_facts_dismiss').css('display') == 'block') {
        var v = GEDynamics.updateVariables(heading);
    }
};

Util.HeadingChangedCallbacks = [_ba_pano_onHeadingChange];

GEDynamics.Resolution = GEDynamics.ResolutionType.medium;
GEDynamics.createSections({});


function _fitMask() {
    var svg = $j('#geTargetMask');
    var wt  = $j(window).width();
    var ht  = $j(window).height() - 40;
    svg.width(wt);
    svg.height(ht);
    var rectWt = Math.max(124, wt / 4);
    var x      = wt - rectWt;
    $j('#geTargetMask rect').attr('width', rectWt + 'px');
    $j('#geTargetMaskRight').attr('x', x + 'px');
}

$j(window).on('resize', function () {
    setTimeout(_fitMask, 0);
});
setTimeout(_fitMask, 300);

