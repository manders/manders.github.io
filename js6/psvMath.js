import Util from './util'

export default class PSVMath {

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
    static calculateBearingDist(points, units) {
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

            return Math.atan2(Math.sin(lam2 - lam1) * Math.cos(phi2),
                Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(lam2 - lam1)
            ) * 180 / Math.PI;
        }

        $j.each(points, function (k, v) {
            var bearingDeg = bearingInitial(lat1, lon1, v.lat, v.lon);
            var dist       = PSVMath.distanceBetweenPoints(units, lat1, lon1, v.lat, v.lon);

            data.push({name: v.name, bearing: bearingDeg, dist: dist});
        });
        return data;
    }

    static get UnitsType() {
        return {meters: 1, kilometers: 2, miles: 3};
    }

    static distanceBetweenPoints(units, lat1, lon1, lat2, lon2) {
        var rtn;
        var d2r  = Math.PI / 180;
        var phi1 = lat1 * d2r;
        var phi2 = lat2 * d2r;
        var lam1 = lon1 * d2r;
        var lam2 = lon2 * d2r;
        var km    = 6371.01 * Math.acos(Math.sin(phi1) * Math.sin(phi2) + Math.cos(phi1) * Math.cos(phi2) * Math.cos(lam2 - lam1));
        switch (units) {
            case(PSVMath.UnitsType.meters): {
                rtn = km * 1000;
                break;
            }
            case(PSVMath.UnitsType.kilometers): {
                rtn = km;
                break;
            }
            case(PSVMath.UnitsType.miles): {
                rtn = PSVMath.metersToMiles(km * 1000);
                break;
            }
        }
        return rtn;
    }

    // Semi-axes of WGS-84 geoidal reference
    static get WGS84_a() {
        return 6378137.0; // Major semiaxis [m]
    }

    static get WGS84_b() {
        return 6356752.3; // Minor semiaxis [m]
    }

    // Earth radius at a given latitude, according to the WGS-84 ellipsoid [m]
    static WGS84EarthRadius(lat) {
        if (!Util.isDef(lat)) {
            return 6371e3; // metres
        }
        // http://en.wikipedia.org/wiki/Earth_radius
        var An = PSVMath.WGS84_a * PSVMath.WGS84_a * Math.cos(lat);
        var Bn = PSVMath.WGS84_b * PSVMath.WGS84_b * Math.sin(lat);
        var Ad = PSVMath.WGS84_a * Math.cos(lat);
        var Bd = PSVMath.WGS84_b * Math.sin(lat);

        return Math.sqrt((An * An + Bn * Bn) / (Ad * Ad + Bd * Bd));
    }

    static set boundingDistanceFromPointKm(kilometers) {
        PSVMath._boundingDistFromPtKm = kilometers;
    }

    static get boundingDistanceFromPointKm() {
        var fallback = 40.2336; // 25 miles in kilometers;
        return this.hasOwnProperty('_boundingDistFromPtKm') ? this._boundingDistFromPtKm : fallback;
    }

    static setNearbyRangeInMiles(miles) {
        PSVMath.boundingDistanceFromPointKm = PSVMath.milesToKm(miles);
    };

    static milesToKm(miles) {
        return miles / 0.621371192237334;
    };

    static metersToMiles(meters) {
        return meters / 1609.344;
    }

    static convertMilesToLocaleKmString(miles, nDecimals) {
        var factor = (nDecimals && nDecimals > 0) ? Math.round(nDecimals) * 10 : 1;

        var val = (Math.round(this.milesToKm(miles) * factor) / factor);
        return Util.getLocalizedNumber(val, nDecimals);
    };

    // The 'point' parameter is an object:
    //   {
    //     lat: number, // in degrees
    //     lon: number  // in degrees
    //   }
    //
    static getNearbyBoundingBox(point) {
        try { // Bounding box surrounding the point at given coordinates,
            // assuming local approximation of Earth surface as a sphere
            // of radius given by WGS84
            var lat      = PSVMath.deg2rad(point.lat);
            var lon      = PSVMath.deg2rad(point.lon);
            var halfSide = 1000 * (PSVMath.boundingDistanceFromPointKm);

            // Radius of Earth at given latitude
            var radius = PSVMath.WGS84EarthRadius(lat);

            // Radius of the parallel at given latitude
            var pradius = radius * Math.cos(lat);
            var latMin  = lat - halfSide / radius;
            var latMax  = lat + halfSide / radius;
            var lonMin  = lon - halfSide / pradius;
            var lonMax  = lon + halfSide / pradius;

            var latMinDeg = PSVMath.rad2deg(latMin);
            var latMaxDeg = PSVMath.rad2deg(latMax);
            var lonMinDeg = PSVMath.rad2deg(lonMin);
            var lonMaxDeg = PSVMath.rad2deg(lonMax);

            var latlons = [
                [latMinDeg, lonMinDeg],
                [latMinDeg, lonMaxDeg],
                [latMaxDeg, lonMaxDeg],
                [latMaxDeg, lonMinDeg],
                [latMinDeg, lonMinDeg]
            ];

            // verify the brr size
            return {
                latlons : latlons,
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

    static deg2rad(degrees) {
        return Math.PI * degrees / 180.0;
    }

    static rad2deg(radians) {
        return 180.0 * radians / Math.PI;
    }
}
