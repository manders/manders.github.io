import GESection from "./geSection";

export default class GEDynamics {

    static get ResolutionType() {
        return {low: 4, better: 6, medium: 8, high: 12};
    }

    static createSections(polygon) {
        // TODO: create geometry for requests
        // create section objects
        var i, lo, hi, s;
        var section, left, right;
        GEDynamics._sections = [];
        var sectionCount     = GEDynamics.Resolution;

        for (i = 0; i < GEDynamics.Resolution; i++) {
            lo    = (i * GEDynamics._increment);
            hi    = lo + GEDynamics._increment - 1
            left  = (i === 0) ? GEDynamics.Resolution - 1 : i - 1;
            right = (i + 1) % GEDynamics.Resolution;

            s = new GESection(i, sectionCount, [lo, hi], {});
        }
        var z = GEDynamics._sections;
    }
    static hideFacts(){
        $j('div._ba_pano_facts').hide();
        $j('#_ba_pano_360_facts_dismiss').hide();
        $j('#geTargetMask').hide();
        $j('#geTargetArrow').hide();

    }
    static showFacts(){
        $j('div._ba_pano_facts').show();
        $j('#_ba_pano_360_facts_dismiss').show();
        $j('#geTargetMask').show();
        $j('#geTargetArrow').show();

        $j('#_ba_pano_360_facts_dismiss').off('click', {});
        $j('#_ba_pano_360_facts_dismiss').on('click', function(){
            GEDynamics.hideFacts();
        });
    }

    static toggleFacts(){
        if ($j('#_ba_pano_360_facts_dismiss').css('display') == 'block') {
            GEDynamics.hideFacts();
        }
        else{
            GEDynamics.showFacts();
        }
    }


    static updateVariables(heading){
        var s = this._whichSection(heading);
        s.updateVariableValues(heading);
    }
    static _whichSection(heading) {
        var eachSection = (360 / GEDynamics.Resolution);
        var index       = Math.floor(heading / eachSection);
        return GEDynamics._sections[index];
    }

    /* ----------------------------------------
     * GE query resolution within buffer
     *   Must be GEDynamics.ResolutionType
     */
    static set Resolution(r) {
        switch (r) {
            case GEDynamics.ResolutionType.low:
            case GEDynamics.ResolutionType.better:
            case GEDynamics.ResolutionType.medium:
            case GEDynamics.ResolutionType.high: {
                this._resolution = r;
                break;
            }
            default: {
                console.log("GEDynamics setup error");
                this._resolution = GEDynamics.ResolutionType.low;
                break;
            }
        }
    }

    static get Resolution() {
        return this.hasOwnProperty('_resolution') ? this._resolution : GEDynamics.ResolutionType.low;
    }

    /* ----------------------------------------
     * Buffer details object
     *  {
     *    radius: <circle radius value in meters>
     *    polygon: single closed polygon (in ArcGIS format)
     *  }
     */
    static set Buffer(b) {
        this._resolution = b;
    }

    static get Buffer() {
        return this.hasOwnProperty('_buffer') ? this._buffer : 1609; //default = 1 mile
    }

    static set _sections(o) {
        this.__sections = o;
    }

    static get _sections() {
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
    static set sectionVariables(o) {
        this._sVariables = o;
    }

    static get sectionVariables() {
        return this.hasOwnProperty('_sVariables') ? this._sVariables : null;
    }

    static get _increment() {
        if (this.Resolution) {
            return 360 / this.Resolution;
        }
        return null;
    }

    static _requestFacts() {

    }
}