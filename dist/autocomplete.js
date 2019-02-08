var Autocomplete=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}var o=function(){function t(n){e(this,t);var o=this,r=new XMLHttpRequest;this._xhr=r,r.responseType="json",r.addEventListener("load",function(e){o._onComplete&&o._onComplete.call(o,this.response)}),r.addEventListener("error",function(e){o._onError&&o._onError.call(o,this.response)}),r.open("GET",n),r.send()}return n(t,[{key:"abort",value:function(){this._xhr&&this._xhr.abort()}},{key:"onComplete",value:function(e){this._onComplete=e}},{key:"onError",value:function(e){this._onError=e}}]),t}();function r(){}return function(){function t(n,o){e(this,t),this._parseURI="string"==typeof n?function(e){var t=function(e){var t=e.substr(-1);return"="==t||"/"==t?e:"".concat(e,"/")}(e);return function(e){return"".concat(t).concat(e)}}(n):n,this._throttleTime=o,this._activeRequest=null,this._onError=r,this._onComplete=r}return n(t,[{key:"request",value:function(e){var t=this;clearTimeout(this._intervalID),this._intervalID=setTimeout(function(n){t._activeRequest&&t._activeRequest.abort(),t._activeRequest=new o(t._parseURI(e)),t._activeRequest.onError(t._onError),t._activeRequest.onComplete(t._onComplete)},this._throttleTime)}},{key:"onComplete",value:function(e){this._onComplete=e}},{key:"onError",value:function(e){this._onError=e}}]),t}()}();