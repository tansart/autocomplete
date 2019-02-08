"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Request=function(){function e(t){_classCallCheck(this,e);var n=this,r=new XMLHttpRequest;this._xhr=r,r.responseType="json",r.addEventListener("load",function(e){n._onComplete.call(n,this.response)}),r.addEventListener("error",function(e){n._onError.call(n,this.response)}),r.open("GET",t),r.send()}return _createClass(e,[{key:"abort",value:function(){this._xhr&&this._xhr.abort()}},{key:"onComplete",value:function(e){this._onComplete=e}},{key:"onError",value:function(e){this._onError=e}}]),e}(),Autocomplete=function(){function e(t,n){_classCallCheck(this,e),this._parseURI="string"==typeof t?preNormaliseEndpoint(t):t,this._throttleTime=n,this._activeRequest=null}return _createClass(e,[{key:"request",value:function(e){var t=this;clearTimeout(this._intervalID),this._intervalID=setTimeout(function(n){t._activeRequest&&t._activeRequest.abort(),t._activeRequest=new Request(t._parseURI(e))},this._throttleTime)}}]),e}();function preNormaliseEndpoint(e){var t=normaliseEndpoint(e);return function(e){return"".concat(t).concat(e)}}function normaliseEndpoint(e){var t=e.substr(-1);return"="==t||"/"==t?e:"".concat(e,"/")}module.exports=Autocomplete;