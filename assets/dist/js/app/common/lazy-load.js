/**
 * @project        dcf
 * @author         Digital Campus Nebraska
 * @website        http://digitalcampus.us/
 * @copyright      Copyright (c) 2018, BSD-3-Clause
 *
 */
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=n():e.dcfLazyLoad=n()}(void 0,function(){var e=document.querySelectorAll(".dcf-lazy-img"),n=e.length,o=void 0;if("IntersectionObserver"in window){o=new IntersectionObserver(function(e){0===n&&o.disconnect();for(var t=0;t<e.length;t++){var r=e[t];r.intersectionRatio>0&&(n--,o.unobserve(r.target),i(r.target))}},{rootMargin:"0px",threshold:.5});for(var t=0;t<e.length;t++){var r=e[t];r.classList.contains("dcf-lazy-img-handled")||o.observe(r)}}else!function(e){for(var n=0;n<e.length;n++){var o=e[n];i(o)}}(e);function i(e){var n,o=e.dataset.src;if(o)return(n=o,new Promise(function(e,o){var t=new Image;t.src=n,t.onload=e,t.onerror=o})).then(function(){!function(e,n){e.classList.add("dcf-lazy-img-handled"),e.src=n,e.classList.add("dcf-fade-up")}(e,o)})}return Lazy-load});
//# sourceMappingURL=lazy-load.js.map