/*
 * Anything that is added to the 360 image is managed by this class
 *  - image popups
 *  - 360 image spots
 *  - markers
 *  - lines, polygons,
 *
 *  - site layers with neaby filter
 *  - feature layers with nearby filter
 */
export default class Annotations{

    static set containerId(id){
        this._containerId = id;
    }
    static get containerId(){
        return this.hasOwnProperty('_containerId') ? this._containerId : null;
    }
    static get panelElement(){
        return this.hasOwnProperty('_containerId') ? $j(this._containerId) : null;
    }
    static get _containerIds(){
        return {
            panel: this.hasOwnProperty('_containerId') ? this._containerId : null,
            markers: '#_ba_anno_markers',
            imageSpots: '#_ba_anno_imageSpots',
            notes: '#_ba_anno_notes',
            geometry: '#_ba_anno_geom'
        };
    }
    static renderAnnotations(){
        if (Annotations.containerId){
            $j(Annotations.containerId).empty();

        }
    }

    static renderSites(){
        // title
        // edit
        // ul list of sites
    }

    static renderFeatures(){
        // title
        // edit
        // feature list
    }



    static gotoMarker(id){

    }
    static renderMarkerList(){
        // title
        // edit button
        // ul list of markers
    }




    /*
      <ul class="psv-markers-list">
  {{~ it.markers: marker }}
    <li data-psv-marker="{{= marker.id }}" class="psv-markers-list-item {{? marker.className }}{{= marker.className }}{{?}}">
      {{? marker.image }}<img class="psv-markers-list-image" src="{{= marker.image }}"/>{{?}}
      <p class="psv-markers-list-name">{{? marker.tooltip }}{{= marker.tooltip.content }}{{?? marker.html }}{{= marker.html }}{{??}}{{= marker.id }}{{?}}</p>
    </li>
  {{~}}
  </ul>
     */


}
