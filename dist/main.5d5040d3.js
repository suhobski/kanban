parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yEtu":[function(require,module,exports) {
"use strict";function e(){document.querySelectorAll(".task__button--full-comment").forEach(function(e){e.addEventListener("click",function(e){e.target.parentNode.style.height="auto",e.target.style.display="none"})})}function t(){document.querySelectorAll(".task").forEach(function(e){e.addEventListener("click",function(t){var n=e.querySelector(".menu"),l=e.querySelector(".menu__list"),o=e.querySelector(".menu__button");t.target==o||t.target===n?l.classList.toggle("menu__display"):l.classList.remove("menu__display")}),e.addEventListener("mouseleave",function(t){var n=e.querySelector(".menu__list");t.target==e&&n.classList.remove("menu__display")})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayFullComment=e,exports.displayMenu=t;
},{}],"wgsO":[function(require,module,exports) {
"use strict";var e=require("./view.js");(0,e.displayFullComment)(),(0,e.displayMenu)();
},{"./view.js":"yEtu"}]},{},["wgsO"], null)