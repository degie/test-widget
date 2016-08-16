(function () {

    function n(t) {
        var url = "http://damiangawlas.pl/projekty/test-widget/assets/";
        return url + t;
    }

    function createIframe() {
        var iframe = document.createElement('iframe');
        var options = {
            color: "#000000"
        };
        var html = '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Checkout</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta charset="utf-8">\n   <script>window.$options = ' + JSON.stringify(options) + ';</script>\n    <style type="text/css">              \n      .accent-border { border-color: ' + options.color + "; }\n      .accent-border-important { border-color: " + options.color + " !important; }\n      .accent-background { background-color: " + options.color + "; }\n      .accent-background-important { background-color: " + options.color + " !important; }\n      .accent-color { color: " + options.color + "; }\n      .accent-color-important { color: " + options.color + ' !important; }\n\n      html, body {\n        height: 100%;\n        margin: 0px;\n        padding: 0px;\n      }\n\n      #loading-wrapper, #loading-wrapper * {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: content-box;\n      }\n\n      #loading-wrapper {\n        position: relative;\n        padding: 15px;\n        background: white;\n        border-radius: 6px;\n        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-size: 14px;\n        top: 50%;\n        height: 80px;\n        margin-top: -80px;\n      }\n\n      #loading-spinner {\n        height: 30px;\n        width: 30px;\n        position: absolute;\n        top: 20px;\n        left: 50%;\n        margin: 0 0 0 -25px;\n        opacity: 1;\n        filter: alpha(opacity=100);\n        background-color: rgba(255, 255, 255, 0.701961);\n        -webkit-animation: rotation .7s infinite linear;\n        -moz-animation: rotation .7s infinite linear;\n        -o-animation: rotation .7s infinite linear;\n        animation: rotation .7s infinite linear;\n        border-left: 8px solid rgba(0, 0, 0, 0.2);\n        border-right: 8px solid rgba(0, 0, 0, 0.2);\n        border-bottom: 8px solid rgba(0, 0, 0, 0.2);\n        border-top: 8px solid ' + options.color + ';\n        border-radius: 100%;\n      }\n\n      #loading-message {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 100%;\n        margin-top: 60px;\n        text-align: center;\n        z-index: 100;\n        outline: none;\n        color: #4d4d4d;\n      }\n\n      @-webkit-keyframes rotation {\n        from {\n          -webkit-transform: rotate(0deg);\n        }\n        to {\n          -webkit-transform: rotate(359deg);\n        }\n      }\n      @-moz-keyframes rotation {\n        from {\n          -moz-transform: rotate(0deg);\n        }\n        to {\n          -moz-transform: rotate(359deg);\n        }\n      }\n      @-o-keyframes rotation {\n        from {\n          -o-transform: rotate(0deg);\n        }\n        to {\n          -o-transform: rotate(359deg);\n        }\n      }\n      @keyframes rotation {\n        from {\n          transform: rotate(0deg);\n        }\n        to {\n          transform: rotate(359deg);\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <div id="loading-wrapper">\n      <div id="loading-spinner"></div>\n      <div id="loading-message">Loading...</div>\n    </div>\n    \n    <script src="' + n("application.js") + '"></script>\n    <style type="text/css">@import url("' + n("application.css") + '");</style>\n  </body>\n</html>';

        iframe.allowtransparency = "true";
        iframe.frameBorder = "0";

        iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        // console.log(iframe.contentDocument);
        // iframe.contentDocument.write(html);


        document.body.appendChild(iframe);
        console.log('iframe.contentWindow =', iframe.contentWindow);
    }

    createIframe();

}).call(this);
