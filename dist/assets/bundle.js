(()=>{var e={231:()=>{var e=document.documentElement,t=document.querySelector(".back-to-top");window.onscroll=function(){e.scrollTop>360?t.classList.remove("back-to-top--hidden"):t.classList.add("back-to-top--hidden")},t.addEventListener("click",(function(){e.scrollTo({top:0,behavior:"smooth"})}))},94:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,'html{height:100vh}.command-line{font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace;background-color:#444;border-radius:3px;border:none;position:relative;line-height:1.4em;padding:10px;overflow:auto}.command-line--input{color:#fff}.command-line--output{color:#63e463}.command-line__comment{color:#ccc}.navMain__flexWrapper{display:flex;align-items:flex-start}@media(max-width: 600px){.navMain__flexWrapper{flex-wrap:wrap}}.navbar{width:100%;z-index:2;background:#fff;top:0}@media(min-width: 600px){.navbar{max-width:300px}}header{font-size:2.8em !important}h2{font-weight:300}code{background:#d3d3d3;padding:2px;color:#393939;border-radius:3px;border:1px solid #ccc;background-color:#f9f9f9;display:inline-block}.main{flex-basis:100%;position:relative;overflow-y:scroll;height:100vh}header{font-size:1.8em}.main-section *+*{margin-top:1.5em}.back-to-top{opacity:.6;position:fixed;bottom:0;border-radius:50% 50% 0 0;height:70px;width:70px;padding:15px 10px}.back-to-top>svg{height:40px;width:40px}@media(min-width: 600px){.back-to-top{display:none}}.back-to-top--hidden{display:none}',""]);const i=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var c=e[r],d=t.base?c[0]+t.base:c[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:m(f,t),references:1}),o.push(l)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=p||(p=d(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=d(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var d=c(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=d}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(231);var e=n(379),t=n.n(e),o=n(94);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals})()})();