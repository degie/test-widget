(function () {

    function n(t) {
        var url = "http://damiangawlas.pl/projekty/test-widget/dist/";
        return url + t;
    }

    function createIframe() {

        // IFRAME START
        //////////////////
        var iframe = document.createElement('iframe');
        var options = {
            color: 'black'
        };
        // var html = '<!DOCTYPE html>\n<html ng-app=widget>\n  <head>\n    <title>Checkout</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta charset="utf-8">\n   <script>window.$options = ' + JSON.stringify(options) + ';</script>\n    <style type="text/css">              \n      .accent-border { border-color: ' + options.color + "; }\n      .accent-border-important { border-color: " + options.color + " !important; }\n      .accent-background { background-color: " + options.color + "; }\n      .accent-background-important { background-color: " + options.color + " !important; }\n      .accent-color { color: " + options.color + "; }\n      .accent-color-important { color: " + options.color + ' !important; }\n\n      html, body {\n        height: 100%;\n        margin: 0px;\n        padding: 0px;\n      }\n\n      #loading-wrapper, #loading-wrapper * {\ndisplay:none;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: content-box;\n      }\n\n      #loading-wrapper {\n        position: relative;\n        padding: 15px;\n        background: white;\n        border-radius: 6px;\n        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-size: 14px;\n        top: 50%;\n        height: auto;\n        }\n\n      #loading-spinner {\n        height: 30px;\n        width: 30px;\n        position: absolute;\n        top: 20px;\n        left: 50%;\n        margin: 0 0 0 -25px;\n        opacity: 1;\n        filter: alpha(opacity=100);\n        background-color: rgba(255, 255, 255, 0.701961);\n        -webkit-animation: rotation .7s infinite linear;\n        -moz-animation: rotation .7s infinite linear;\n        -o-animation: rotation .7s infinite linear;\n        animation: rotation .7s infinite linear;\n        border-left: 8px solid rgba(0, 0, 0, 0.2);\n        border-right: 8px solid rgba(0, 0, 0, 0.2);\n        border-bottom: 8px solid rgba(0, 0, 0, 0.2);\n        border-top: 8px solid ' + options.color + ';\n        border-radius: 100%;\n      }\n\n      #loading-message {\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        width: 100%;\n        margin-top: 60px;\n        text-align: center;\n        z-index: 100;\n        outline: none;\n        color: #4d4d4d;\n      }\n\n      @-webkit-keyframes rotation {\n        from {\n          -webkit-transform: rotate(0deg);\n        }\n        to {\n          -webkit-transform: rotate(359deg);\n        }\n      }\n      @-moz-keyframes rotation {\n        from {\n          -moz-transform: rotate(0deg);\n        }\n        to {\n          -moz-transform: rotate(359deg);\n        }\n      }\n      @-o-keyframes rotation {\n        from {\n          -o-transform: rotate(0deg);\n        }\n        to {\n          -o-transform: rotate(359deg);\n        }\n      }\n      @keyframes rotation {\n        from {\n          transform: rotate(0deg);\n        }\n        to {\n          transform: rotate(359deg);\n        }\n      }\n    </style>\n  <style type="text/css">@import url("' + n("styles/vendor-9472fa3abf.css") + '");</style>\n <style type="text/css">@import url("' + n("styles/app-c022e43e8a.css") + '");</style>\n    </head>\n  <body>\n    <div id="loading-wrapper">\n      <div id="loading-spinner"></div>\n      <div id="loading-message">Loading...</div>\n    </div>\n <div ui-view></div>\n     <script src="' + n("scripts/vendor.js") + '"></script>\n  <script src="' + n("scripts/app.js") + '"></script>\n   </body>\n</html>';
        iframe.allowtransparency = "true";
        iframe.frameBorder = "0";
        iframe.style.display = "none";
        iframe.style.zIndex = "16777271";
        iframe.style.border = "0px none transparent";
        iframe.style.overflowX = "hidden";
        iframe.style.overflowY = "auto";
        iframe.style.margin = "0px";
        iframe.style.padding = "0px";
        iframe.style.position = "fixed";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.wekbitTapHighlightColor = "transparent";
        // iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
        iframe.src = 'http://damiangawlas.pl/projekty/test-widget/dist/index.html';
        document.body.appendChild(iframe);
        // console.log(iframe.contentDocument);
        // iframe.contentDocument.write(html);
        // console.log('iframe.contentWindow =', iframe.contentWindow);
        //////////////////
        // IFRAME END





        // STYLE START
        //////////////////
        var style = document.createElement("style");
        var head = document.getElementsByTagName("head")[0];
        var css = ".kleek-btn {background:black;color:white;padding:15px 30px;cursor:pointer;border-radius:3px;text-transform:uppercase;font-family:'Helvetica',sans-serif;display:inline-block;}";
        head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style);
        style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css));
        // STYLE END
        //////////////////






        // BUTTON START
        //////////////////
        var button = document.createElement("span");
        button.setAttribute("class", "kleek-btn");
        button.innerText = "Book with KLEEK";
        button.addEventListener('click', function() {
            iframe.style.display === "block" ? iframe.style.display = "none" : iframe.style.display = "block";
        }, false);

        document.body.appendChild(button);
        // BUTTON END
        //////////////////




    }

    createIframe();

}).call(this);
