define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for botonentrar **/
    AS_Button_ba84daa286744082aec68258976133c9: function AS_Button_ba84daa286744082aec68258976133c9(eventobject) {
        var self = this;

        function MOVE_ACTION____c11c79b393874ed1b63d76e6c6c7e0a9_Callback() {}
        function MOVE_ACTION____affcfb27b2fe4a99a5fd68058bba573c_Callback() {}
        self.view.arribamove.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-435dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____affcfb27b2fe4a99a5fd68058bba573c_Callback
        });
        self.view.fondoparis.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-40%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1
        }, {
            "animationEnd": MOVE_ACTION____c11c79b393874ed1b63d76e6c6c7e0a9_Callback
        });
    },
    /** onClick defined for botonalert **/
    AS_Button_d774909e8fad4804b5002495b760197c: function AS_Button_d774909e8fad4804b5002495b760197c(eventobject) {
        var self = this;

        function SHOW_ALERT__fdc4cd05d5484448bf873be32a3e2883_True() {}
        function SHOW_ALERT__fdc4cd05d5484448bf873be32a3e2883_Callback() {
            SHOW_ALERT__fdc4cd05d5484448bf873be32a3e2883_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": "ALERTA DE SEGURIDAD",
            "yesLabel": "OK",
            "message": "esta app requiere de un wifi seguro no publico",
            "alertHandler": SHOW_ALERT__fdc4cd05d5484448bf873be32a3e2883_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
});