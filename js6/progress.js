import Util from './util'

export default class ProgressPopup{

    static show(percent, msg){
        ProgressPopup.startSpinner();
        // TODO: show popup

        console.log(percent + '% ', +msg);
    }

    static update(percent, msg){
        console.log(percent + '% ', +msg);
    }

    static hide(msg){
        function _hidePopup(){
            // TODO: hide progress popup
        }
        ProgressPopup.stopSpinner();
        if (Util.hasText(msg)) {
            Util.async(_hidePopup, 800);
        }
        else{
            _hidePopup();
        }
    }
    static startSpinner(){
        console.log('start busy spinner');
    }

    static stopSpinner(){
        console.log('stop busy spinner');
    }
}
