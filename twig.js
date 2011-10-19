/**
 * twig.js
 * https://github.com/schmittjoh/twig.js
 *
 * (C) 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 * Licensed under the Apache 2.0 License.
 *
 * Portions of this code are from the Google Closure Library received
 * from the Closure Authors under the Apache 2.0 License.
 */
(function() {var g=null,h=false,i,j=this;function k(a,b,c){a=a.split(".");c=c||j;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&b!==void 0?c[d]=b:c=c[d]?c[d]:c[d]={}}
function l(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function o(a){return l(a)=="array"}function p(a){return typeof a=="string"}function q(a){a=l(a);return a=="object"||a=="array"||a=="function"}var r="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),s=0;function t(a,b,c){return a.call.apply(a.bind,arguments)}
function u(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}else return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?t:u;return v.apply(g,arguments)}function w(a,b){k(a,b,void 0)};var x=/&/g,y=/</g,z=/>/g,A=/\"/g,B=/[&<>\"]/,C={"\x00":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"},D={"'":"\\'"};var E;(E="ScriptEngine"in j&&j.ScriptEngine()=="JScript")&&(j.ScriptEngineMajorVersion(),j.ScriptEngineMinorVersion(),j.ScriptEngineBuildVersion());function F(a,b){this.a=E?[]:"";a!=g&&this.append.apply(this,arguments)}E?(F.prototype.c=0,F.prototype.append=function(a,b,c){b==g?this.a[this.c++]=a:(this.a.push.apply(this.a,arguments),this.c=this.a.length);return this}):F.prototype.append=function(a,b,c){this.a+=a;if(b!=g)for(var d=1;d<arguments.length;d++)this.a+=arguments[d];return this};F.prototype.clear=function(){E?this.c=this.a.length=0:this.a=""};F.prototype.toString=function(){if(E){var a=this.a.join("");this.clear();a&&this.append(a);return a}else return this.a};function G(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}var H="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");function I(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<H.length;e++)c=H[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var J=Array.prototype,K=J.indexOf?function(a,b,c){return J.indexOf.call(a,b,c)}:function(a,b,c){c=c==g?0:c<0?Math.max(0,a.length+c):c;if(p(a))return!p(b)||b.length!=1?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},L=J.forEach?function(a,b,c){J.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=p(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var M=v,r="twig_ui_"+Math.floor(Math.random()*2147483648).toString(36);function N(a){return g===a||h===a||void 0===a||0===a?true:O(a)?0===P(a):h}function Q(a,b){I.apply(g,Array.prototype.slice.call(arguments,0));return a}function O(a){return o(a)||p(a)||q(a)}function P(a){if(o(a))return a.length;if(p(a))return a.length;if(q(a)){var b=0,c;for(c in a)b++;return b}throw Error(typeof a+" is not countable.");};function R(a){this.env_=a;this.b=[];this.k={}}i=R.prototype;i.m=function(){return this.b};i.q=function(a){this.b=a};i.u=function(a){this.k=a};i.getParent=function(a){a=this.getParent_(a);return h===a?h:this.env_.d(a)};i.p=function(a,b,c){if(a in this.k){var d=new F;this.k[a](d,b,c||{});return d.toString()}d=this.getParent(b);if(h!==d)return d.i(a,b,c);throw Error("The template '"+this.w()+"' has no parent, and no trait defining the block '"+a+"'.");};
i.i=function(a,b,c){if(c&&a in c){var d=new F,f=c[a];delete c[a];f(d,b,c);return d.toString()}if(a in this.b)return d=new F,this.b[a](d,b,c||{}),d.toString();d=this.getParent(b);return h!==d?d.i(a,b,c):""};i.h=function(a,b){var c=new F;this.render_(c,a||{},b||{});return c.toString()};function S(){this.f={};this.g={};this.j={};this.e={};this.n={};this.v="UTF-8"}i=S.prototype;i.h=function(a,b){var c=this.d(a);return c.h.call(c,Q({},this.n,b||{}))};i.filter=function(a,b,c){if(!(a in this.f))throw Error("The filter '"+a+"' does not exist.");return this.f[a].apply(g,Array.prototype.slice.call(arguments,1))};i.o=function(a,b,c){if(!(a in this.g))throw Error("The function '"+a+"' does not exist.");return this.g[a].apply(g,Array.prototype.slice.call(arguments,1))};
i.test=function(a,b,c){if(!(a in this.j))throw Error("The test '"+a+"' does not exist.");return this.j[a].apply(g,Array.prototype.slice.call(arguments,1))};i.r=function(a,b){this.f[a]=b};i.s=function(a,b){this.g[a]=b};i.t=function(a,b){this.j[a]=b};i.d=function(a){var b=a[r]||(a[r]=++s);if(b in this.e)return this.e[b];a=new a(this);return this.e[b]=a};function T(a){this.l=a}T.prototype.toString=function(){return this.l};window.Twig=new S;w("goog.provide",function(a){k(a)});w("twig.attr",function(a,b,c,d,f){d=d||"any";f=f!==void 0?f:h;if(b in a){if("array"!==d&&l(a[b])=="function")return f?true:a[b].apply(a,c||[]);if("method"!==d)return f?true:a[b]}if("array"===d||o(a))return f?h:g;var b=b.toLowerCase(),e="get"+b,m="is"+b;return(b=G(a,function(a,b){b=b.toLowerCase();return b===e||b===m}))&&l(a[b])=="function"?f?true:a[b].apply(a,c||[]):f?h:g});w("twig.bind",M);
w("twig.inherits",function(a,b){function c(){}c.prototype=b.prototype;a.z=b.prototype;a.prototype=new c});w("twig.extend",Q);w("twig.spaceless",function(a){return a.replace(/>[\s\xa0]+</g,"><").replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")});w("twig.range",function(a,b){for(var c=[];a<=b;a+=1)c.push(a);return c});w("twig.contains",function(a,b){var c;if(o(a))c=K(a,b)>=0;else if(p(a))c=a.indexOf(b)!=-1;else a:{for(c in a)if(a[c]==b){c=true;break a}c=h}return c});w("twig.countable",O);w("twig.count",P);
w("twig.forEach",function(a,b,c){if(o(a))L(a,b,c);else for(var d in a)b.call(c,a[d],d,a)});w("twig.empty",N);w("twig.filter.capitalize",function(a,b){return b.charAt(0).toUpperCase()+b.substring(1)});
w("twig.filter.escape",function(a,b,c,d,f){var U;if(f&&b instanceof T)return b.toString();b=b==g?"":String(b);if("js"===c){a=String(b);if(a.quote)b=a.quote();else{b=['"'];for(c=0;c<a.length;c++){var e=a.charAt(c),m=e.charCodeAt(0),d=b,f=c+1,n;if(!(n=C[e])){if(!(m>31&&m<127))if(e in D)e=D[e];else if(e in C)U=D[e]=C[e],e=U;else{m=e;n=e.charCodeAt(0);if(n>31&&n<127)m=e;else{if(n<256){if(m="\\x",n<16||n>256)m+="0"}else m="\\u",n<4096&&(m+="0");m+=n.toString(16).toUpperCase()}e=D[e]=m}n=e}d[f]=n}b.push('"');
b=b.join("")}return b.substring(1,b.length-1)}else if(!c||"html"===c)return a=b,B.test(a)&&(a.indexOf("&")!=-1&&(a=a.replace(x,"&amp;")),a.indexOf("<")!=-1&&(a=a.replace(y,"&lt;")),a.indexOf(">")!=-1&&(a=a.replace(z,"&gt;")),a.indexOf('"')!=-1&&(a=a.replace(A,"&quot;"))),a;throw Error("The type '"+c+"' is not supported.");});w("twig.filter.length",function(a,b){return P(b)});w("twig.filter.def",function(a,b){return N(a)?b||"":a});
w("twig.filter.replace",function(a,b){for(var c in b)a=a.replace(RegExp(c,"g"),b[c]);return a});w("twig.StringBuffer",F);F.prototype.append=F.prototype.append;F.prototype.toString=F.prototype.toString;S.prototype.createTemplate=S.prototype.d;S.prototype.filter=S.prototype.filter;S.prototype.invoke=S.prototype.o;S.prototype.test=S.prototype.test;S.prototype.setFilter=S.prototype.r;S.prototype.setFunction=S.prototype.s;S.prototype.setTest=S.prototype.t;S.prototype.render=S.prototype.h;
w("twig.Template",R);R.prototype.setTraits=R.prototype.u;R.prototype.setBlocks=R.prototype.q;R.prototype.getBlocks=R.prototype.m;R.prototype.renderParentBlock=R.prototype.p;R.prototype.renderBlock=R.prototype.i;w("twig.Markup",T);})();
