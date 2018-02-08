!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.indicative=n.indicative||{},n.indicative.validator=e())}(this,function(){"use strict";function n(n,e){if(!function(n){return null!==n&&"object"==typeof n}(n)||"string"!=typeof e)return n;for(var r=e.split("."),t=0;t<r.length;t++){var i=r[t];if(null===(n=n.hasOwnProperty(i)?n[i]:null))break}return n}function e(n){this.fn=n,this._promise=null}function r(e,t,i,o){if(!t)return[];i=i||0;var u=e[i++],a=e[i];return o||(o=[u],u=""),o=o.reduce(function(e,r){var i=u?r+"."+u:r;if(void 0!==a){var o=n(t,i);if(Array.isArray(o))for(var f=o.length,s=0;s<f;s++)e.push(i+"."+s)}else e.push(i);return e},[]),i===e.length?o:r(e,t,i,o)}function t(e,r,t,i){var o=r.replace(/\.\d/g,".*"),u=f(t),a=e[o+"."+t]||e[o+"."+u]||e[t]||e[u]||"{{validation}} validation failed on {{ field }}";return"function"==typeof a?a(o,t,i):function(e,r,t){t=t||{skipUndefined:!1,throwOnUndefined:!1};for(var i,o=/{{2}(.+?)}{2}/g,u=e;null!==(i=o.exec(e));){var a=i[1].trim();if(a){var f=n(r,a);if(void 0!==f&&null!==f)u=u.replace(i[0],f);else{if(t.throwOnUndefined){var s=new Error("Missing value for "+i[0]);throw s.key=a,s.code="E_MISSING_KEY",s}t.skipUndefined||(u=u.replace(i[0],""))}}}return u}(a,{field:r,validation:t,argument:i})}function i(r,i,o,u,a){return Object.keys(i).reduce(function(s,c){return i[c].map(function(i){s.push(function(r,i,o,u,a,s){var c=i.name,d=i.args;return new e(function(e,i){var l=f(c),h=r[l];if("function"!=typeof h){var p=new Error(l+" is not defined as a validation rule");return s.addError(p,o,l,d),void i(p)}h(u,o,t(a,o,c,d),d,n).then(e).catch(function(n){s.addError(n,o,l,d),i(n)})})}(r,i,c,o,u,a))}),s},[])}function o(n,e,t,o,f,s){return new Promise(function(c,d){f=f||{};var l=function(n,e){return e=e||{},Object.keys(n).reduce(function(t,i){var o=n[i];if("string"==typeof o)o=u(o,new a);else if(!Array.isArray(o))throw new Error("Rules must be defined as a string or an array");return i.indexOf("*")>-1?r(i.split(/\.\*\.?/),e).forEach(function(n){t[n]=o}):t[i]=o,t},{})}(o,t);(function(n,e){function r(e,o){return e>=i?Promise.resolve(t):n[e].then(function(n){return t.push(function(n){return{fullFilled:!0,rejected:!1,value:n,reason:null}}(n)),r(e+1,o)}).catch(function(n){return t.push(function(n){return{fullFilled:!1,rejected:!0,value:null,reason:n}}(n)),o?Promise.resolve(t):r(e+1,o)})}var t=[],i=n.length;return r(0,e)})(i(n,l,t,f,s),e).then(function(n){var e=s.toJSON();if(e)return d(e);c(t)})})}e.prototype.then=function(n,e){return this._promise=this._promise||new Promise(this.fn),this._promise.then(n,e)},e.prototype.catch=function(n){return this._promise=this._promise||new Promise(this.fn),this._promise.catch(n)};var u=function(n,e){e.add();const r=n.length;let t=0,i="name";for(;t<r;){const r=n[t++],o=r.charCodeAt(0);58===o||44===o?(i="arg",e.shiftValue()):124===o?(i="name",e.add()):"arg"===i?e.appendValue(r):e.appendKey(r,o)}return e.toJSON()},a=function(){return{nodes:[],currentNode:null,add(){this.currentNode={name:"",args:[]},this.nodes.push(this.currentNode)},appendKey(n,e){32!==e&&(this.currentNode.name+=n)},appendValue(n){this.currentNode.args[this.currentNode.args.length-1]+=n},shiftValue(){this.currentNode.args.push("")},toJSON(){return this.nodes}}},f=function(n){return n.replace(/_(\w)/g,function(n,e){return e.toUpperCase()})};return function(n,e){var r="Cannot instantiate validator without";if(!n)throw new Error(r+" validations");if(!e)throw new Error(r+" error formatter");return{validate:function(r,t,i,u){return u=new(u||e),o(n,!0,r,t,i,u)},validateAll:function(r,t,i,u){return u=new(u||e),o(n,!1,r,t,i,u)}}}});
