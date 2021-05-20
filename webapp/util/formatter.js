sap.ui.define([],function(){
    "use strict";
    return{
        shiftFormatter:function(code){
            if(code=='1'){
                return "0900hrs-1800hrs"
            }else if(code=='2'){
                return "1400hrs-2359hrs"
            }else{
                return "0000hrs-0900hrs"
            }
        }
    }
})