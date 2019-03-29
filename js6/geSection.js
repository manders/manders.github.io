import GEDynamics from "./geDynamics";
import Util from "./util";

export default class GESection {

    constructor(index, nSections, degreeRange, geometry) {
        var self = this;
        this.sectionIndex = index;
        this.prev         = (index == 0) ? nSections - 1 : index - 1;
        this.next         = (index == nSections - 1) ? 0 : index + 1;
        this.degrees      = degreeRange;
        this.vars   = {};
        this.geom   = geometry || {};
        this.values = {};

        // Set all the section LMH values for each variable
        var keys = Util.getKeys(GEDynamics.sectionVariables);
        $j.each(keys, function (k, v) {
            self.values[v] = {lo: null, mid: GEDynamics.sectionVariables[v].values[self.sectionIndex], hi: null};
        });
        GEDynamics._sections.push(this);

        // last section triggers a full values computation
        if (index >= (nSections - 1)) {
            GESection.computeAllSectionsValues();
        }
    }

    nextSection() {
        return GEDynamics._sections[this.next];
    }

    prevSection() {
        return GEDynamics._sections[this.prev];
    }

    // Call this after all sections have been created
    static computeAllSectionsValues() {
        var i, sect;
        for (i=0;i<GEDynamics._sections.length;i++) {
            sect = GEDynamics._sections[i];

            var keys = Util.getKeys(sect.values);
            $j.each(keys, function (k, v) {

                var val;
                var next = GEDynamics._sections[sect.next];
                var prev = GEDynamics._sections[sect.prev];

                var mid      = sect.values[v].mid;
                var prevVals = GEDynamics._sections[sect.prev].values[v];
                var nextVals = GEDynamics._sections[sect.next].values[v];

                var prevMid = prevVals.mid;
                var nextMid = nextVals.mid;
                var target  = sect.values[v];

                if (!Util.isDef(target.lo)) {
                    target.lo   = prevVals.mid + ((mid - prevMid) / 2);
                    prevVals.hi = target.lo;
                }
                if (!Util.isDef(target.hi)) {
                    target.hi   = mid + (nextVals.mid - mid) / 2;
                    nextVals.lo = target.hi;
                }
            });
        }
    }

    // return LMH values for section and variable
    getValues(varName) {
        return this.values[varName];
    }

    /*
     * Calculate all variable values for the current heading in degrees
     */
    updateVariableValues(heading) {
        var keys   = Util.getKeys(this.values);
        var values = {};
        for (var i = 0; i < keys.length; i++) {
            // Get variable's value at this heading
            values[keys[i]] = this.calculateValue(keys[i], heading);

            // Update the UI element value text
            var elementId = GEDynamics.sectionVariables[keys[i]].elementId + ' div._ba_pano_facts_valueDiv';
            if (elementId){
                var s = Util.formatNumberWithCommas(Math.round(values[keys[i]],1));
                $j(elementId).html(s);
            }
        }
        return values;
    }

    /*
     * Calculate one value (for a variable) based on heading
     */
    calculateValue(varName, heading) {
        var v, vs, pct;
        if (Util.isDef(heading) && this.values) {
            var degInHalfSect = (this.degrees[1] - this.degrees[0] + 1) / 2;
            var mid           = this.degrees[0] + degInHalfSect;

            if (heading === this.degrees[0]) {
                v = this.values[varName].lo;
            } else if (heading === mid) {
                v = this.values[varName].mid;
            } else if (heading === this.degrees[1]) {
                v = this.values[varName].hi;
            } else if (heading < mid) {
                vs  = heading - this.degrees[0];
                pct = vs / degInHalfSect;
                v   = this.values[varName].lo + ((this.values[varName].mid - this.values[varName].lo) * pct);
            } else {
                vs  = heading - mid;
                pct = vs / degInHalfSect;
                v   = this.values[varName].mid + ((this.values[varName].hi - this.values[varName].mid) * pct);
            }
        }
        return v;
    }
}
