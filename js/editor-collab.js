(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[190],{331:function(t,e,n){window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=24)}([function(t,e,n){"use strict";function i(t,e,n,i,a,o,s,c){var r,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),s?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},d._ssrRegister=r):a&&(r=c?function(){a.call(this,this.$root.$options.shadowRoot)}:a),r)if(d.functional){d._injectStyles=r;var l=d.render;d.render=function(t,e){return r.call(e),l(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,r):[r]}return{exports:t,options:d}}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,i,a,o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var c=(n=s,i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(a," */")),r=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot).concat(t," */")}));return[o].concat(r).concat([c]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<t.length;s++){var c=t[s];null!=c[0]&&i[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},a=0;a<e.length;a++){var o=e[a],s=o[0],c={id:t+":"+a,css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(c):n.push(i[s]={id:s,parts:[c]})}return n}n.r(e),n.d(e,"default",(function(){return m}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=a&&(document.head||document.getElementsByTagName("head")[0]),c=null,r=0,d=!1,l=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,e,n,a){d=n,u=a||{};var s=i(t,e);return v(s),function(e){for(var n=[],a=0;a<s.length;a++){var c=s[a];(r=o[c.id]).refs--,n.push(r)}for(e?v(s=i(t,e)):s=[],a=0;a<n.length;a++){var r;if(0===(r=n[a]).refs){for(var d=0;d<r.parts.length;d++)r.parts[d]();delete o[r.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(h(n.parts[a]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(h(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:s}}}}function b(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function h(t){var e,n,i=document.querySelector("style["+p+'~="'+t.id+'"]');if(i){if(d)return l;i.parentNode.removeChild(i)}if(f){var a=r++;i=c||(c=b()),e=y.bind(null,i,a,!1),n=y.bind(null,i,a,!0)}else i=b(),e=function(t,e){var n=e.css,i=e.media,a=e.sourceMap;if(i&&t.setAttribute("media",i),u.ssrId&&t.setAttribute(p,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var x,g=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function y(t,e,n,i){var a=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var o=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},,,,,,,,,,,,,,,,function(t,e,n){var i=n(42);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(2).default)("6d914181",i,!0,{})},function(t,e,n){var i=n(44);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(2).default)("2fc216d3",i,!0,{})},function(t,e,n){var i=n(46);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,n(2).default)("95523852",i,!0,{})},,,,function(t,e,n){"use strict";n.r(e);var i={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(t){return!t.input||-1!==["text","checkbox"].indexOf(t.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(t){return!1}}},methods:{action:function(t){this.item.action&&this.item.action(t)}}},a=(n(41),n(43),n(0)),o={name:"PopoverMenu",components:{PopoverMenuItem:Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.item.href?n("a",{staticClass:"focusable",attrs:{href:t.item.href?t.item.href:"#",target:t.item.target?t.item.target:"",download:t.item.download,rel:"noreferrer noopener"},on:{click:t.action}},[t.iconIsUrl?n("img",{attrs:{src:t.item.icon}}):n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):t.item.input?n("span",{staticClass:"menuitem",class:{active:t.item.active}},["checkbox"!==t.item.input?n("span",{class:t.item.icon}):t._e(),t._v(" "),"text"===t.item.input?n("form",{class:t.item.input,on:{submit:function(e){return e.preventDefault(),t.item.action(e)}}},[n("input",{attrs:{type:t.item.input,placeholder:t.item.text,required:""},domProps:{value:t.item.value}}),t._v(" "),n("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"checkbox"},domProps:{checked:Array.isArray(t.item.model)?t._i(t.item.model,null)>-1:t.item.model},on:{change:[function(e){var n=t.item.model,i=e.target,a=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);i.checked?o<0&&t.$set(t.item,"model",n.concat([null])):o>-1&&t.$set(t.item,"model",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.item,"model",a)},t.item.action]}}):"radio"===t.item.input?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:"radio"},domProps:{checked:t._q(t.item.model,null)},on:{change:[function(e){return t.$set(t.item,"model",null)},t.item.action]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.model,expression:"item.model"}],class:t.item.input,attrs:{id:t.key,type:t.item.input},domProps:{value:t.item.model},on:{change:t.item.action,input:function(e){e.target.composing||t.$set(t.item,"model",e.target.value)}}}),t._v(" "),n("label",{attrs:{for:t.key},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")])]],2):t.item.action?n("button",{staticClass:"menuitem focusable",class:{active:t.item.active},attrs:{disabled:t.item.disabled},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.item.action(e)}}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()]):n("span",{staticClass:"menuitem",class:{active:t.item.active}},[n("span",{class:t.item.icon}),t._v(" "),t.item.text&&t.item.longtext?n("p",[n("strong",{staticClass:"menuitem-text"},[t._v("\n\t\t\t\t"+t._s(t.item.text)+"\n\t\t\t")]),n("br"),t._v(" "),n("span",{staticClass:"menuitem-text-detail"},[t._v("\n\t\t\t\t"+t._s(t.item.longtext)+"\n\t\t\t")])]):t.item.text?n("span",[t._v("\n\t\t\t"+t._s(t.item.text)+"\n\t\t")]):t.item.longtext?n("p",[t._v("\n\t\t\t"+t._s(t.item.longtext)+"\n\t\t")]):t._e()])])}),[],!1,null,"8dc4efb0",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},s=(n(45),Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("ul",this._l(this.menu,(function(t,n){return e("PopoverMenuItem",{key:n,attrs:{item:t}})})),1)}),[],!1,null,"2f982451",null).exports);n.d(e,"PopoverMenu",(function(){return s})),
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
e.default=s},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(18);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\nbutton.menuitem[data-v-8dc4efb0] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-8dc4efb0] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-8dc4efb0]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-8dc4efb0] {\n\tcursor: default;\n}\n.menuitem.active[data-v-8dc4efb0] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n",""])},function(t,e,n){"use strict";var i=n(19);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"li[data-v-8dc4efb0]{display:flex;flex:0 0 auto}li.hidden[data-v-8dc4efb0]{display:none}li>button[data-v-8dc4efb0],li>a[data-v-8dc4efb0],li>.menuitem[data-v-8dc4efb0]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-8dc4efb0],li>button span[class*=' icon-'][data-v-8dc4efb0],li>button[class^='icon-'][data-v-8dc4efb0],li>button[class*=' icon-'][data-v-8dc4efb0],li>a span[class^='icon-'][data-v-8dc4efb0],li>a span[class*=' icon-'][data-v-8dc4efb0],li>a[class^='icon-'][data-v-8dc4efb0],li>a[class*=' icon-'][data-v-8dc4efb0],li>.menuitem span[class^='icon-'][data-v-8dc4efb0],li>.menuitem span[class*=' icon-'][data-v-8dc4efb0],li>.menuitem[class^='icon-'][data-v-8dc4efb0],li>.menuitem[class*=' icon-'][data-v-8dc4efb0]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-8dc4efb0],li>button span[class*=' icon-'][data-v-8dc4efb0],li>a span[class^='icon-'][data-v-8dc4efb0],li>a span[class*=' icon-'][data-v-8dc4efb0],li>.menuitem span[class^='icon-'][data-v-8dc4efb0],li>.menuitem span[class*=' icon-'][data-v-8dc4efb0]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-8dc4efb0],li>button[class*=' icon-'][data-v-8dc4efb0],li>a[class^='icon-'][data-v-8dc4efb0],li>a[class*=' icon-'][data-v-8dc4efb0],li>.menuitem[class^='icon-'][data-v-8dc4efb0],li>.menuitem[class*=' icon-'][data-v-8dc4efb0]{padding:0 14px 0 44px}li>button[data-v-8dc4efb0]:not(:disabled):hover,li>button[data-v-8dc4efb0]:not(:disabled):focus,li>button:not(:disabled).active[data-v-8dc4efb0],li>a[data-v-8dc4efb0]:not(:disabled):hover,li>a[data-v-8dc4efb0]:not(:disabled):focus,li>a:not(:disabled).active[data-v-8dc4efb0],li>.menuitem[data-v-8dc4efb0]:not(:disabled):hover,li>.menuitem[data-v-8dc4efb0]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-8dc4efb0]{opacity:1 !important}li>button.action[data-v-8dc4efb0],li>a.action[data-v-8dc4efb0],li>.menuitem.action[data-v-8dc4efb0]{padding:inherit !important}li>button>span[data-v-8dc4efb0],li>a>span[data-v-8dc4efb0],li>.menuitem>span[data-v-8dc4efb0]{cursor:pointer;white-space:nowrap}li>button>p[data-v-8dc4efb0],li>a>p[data-v-8dc4efb0],li>.menuitem>p[data-v-8dc4efb0]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal}li>button>select[data-v-8dc4efb0],li>a>select[data-v-8dc4efb0],li>.menuitem>select[data-v-8dc4efb0]{margin:0;margin-left:6px}li>button[data-v-8dc4efb0]:not(:empty),li>a[data-v-8dc4efb0]:not(:empty),li>.menuitem[data-v-8dc4efb0]:not(:empty){padding-right:14px !important}li>button>img[data-v-8dc4efb0],li>a>img[data-v-8dc4efb0],li>.menuitem>img[data-v-8dc4efb0]{width:16px;padding:14px}li>button>input.radio+label[data-v-8dc4efb0],li>button>input.checkbox+label[data-v-8dc4efb0],li>a>input.radio+label[data-v-8dc4efb0],li>a>input.checkbox+label[data-v-8dc4efb0],li>.menuitem>input.radio+label[data-v-8dc4efb0],li>.menuitem>input.checkbox+label[data-v-8dc4efb0]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-8dc4efb0]::before,li>a>input.checkbox+label[data-v-8dc4efb0]::before,li>.menuitem>input.checkbox+label[data-v-8dc4efb0]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-8dc4efb0]::before,li>a>input.radio+label[data-v-8dc4efb0]::before,li>.menuitem>input.radio+label[data-v-8dc4efb0]::before{margin:-2px 12px 0}li>button>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-8dc4efb0],li>a form[data-v-8dc4efb0],li>.menuitem form[data-v-8dc4efb0]{display:flex;flex:1 1 auto}li>button form[data-v-8dc4efb0]:not(:first-child),li>a form[data-v-8dc4efb0]:not(:first-child),li>.menuitem form[data-v-8dc4efb0]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-8dc4efb0],li>button>span[style*='display:none']+form[data-v-8dc4efb0],li>a>span.hidden+form[data-v-8dc4efb0],li>a>span[style*='display:none']+form[data-v-8dc4efb0],li>.menuitem>span.hidden+form[data-v-8dc4efb0],li>.menuitem>span[style*='display:none']+form[data-v-8dc4efb0]{margin-left:0}li>button input[data-v-8dc4efb0],li>a input[data-v-8dc4efb0],li>.menuitem input[data-v-8dc4efb0]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-8dc4efb0]:not(:first-child),li>a input[data-v-8dc4efb0]:not(:first-child),li>.menuitem input[data-v-8dc4efb0]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-8dc4efb0]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-8dc4efb0]{margin-bottom:12px}li>button[data-v-8dc4efb0]{padding:0}li>button span[data-v-8dc4efb0]{opacity:1}\n",""])},function(t,e,n){"use strict";var i=n(20);n.n(i).a},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"ul[data-v-2f982451]{display:flex;flex-direction:column}\n",""])}])},336:function(t,e,n){var i=n(628);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(148).default)("62686f3e",i,!0,{})},627:function(t,e,n){"use strict";var i=n(336);n.n(i).a},628:function(t,e,n){(t.exports=n(147)(!1)).push([t.i,".session-list[data-v-d41c1edc]{position:relative}.session-list[data-v-d41c1edc] .popovermenu{margin-right:-4px}.session-list[data-v-d41c1edc] .popovermenu img{padding:0;width:32px !important;height:32px !important;margin:6px;border-radius:50%}.avatar-list[data-v-d41c1edc]{display:inline-flex;flex-direction:row-reverse}.avatar-list .avatardiv[data-v-d41c1edc],.avatar-list[data-v-d41c1edc] .avatardiv{width:36px;height:36px;margin-right:-8px;border:2px solid var(--color-main-background);background-color:var(--color-main-background) !important;box-sizing:content-box !important}.avatar-list .avatardiv.icon-more[data-v-d41c1edc],.avatar-list[data-v-d41c1edc] .avatardiv.icon-more{width:32px;height:32px;opacity:.5;background-color:var(--color-background-dark) !important;cursor:pointer}.popovermenu[data-v-d41c1edc]{display:block}\n",""])},630:function(t,e,i){"use strict";i.r(e);var a=i(349),o=i.n(a),s=i(331),c=i.n(s),r=i(315),d=i.n(r);function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u={name:"SessionList",components:{Avatar:o.a,PopoverMenu:c.a},directives:{tooltip:d.a},props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{popoverVisible:"",myName:""}},computed:{editorsTooltip:function(){if(this.sessionsPopover.length>0){var t=this.activeSessions.slice(0,3).map((function(t){return t.guestName?t.guestName:t.displayName})).join(", "),e=this.activeSessions.slice(3).length;return t+" "+n("text","and %n other editor","and %n other editors",e)}return this.activeSessions.slice(0,3).map((function(t){return t.guestName?t.guestName:t.displayName})).join(", ")},avatarUrl:function(){return function(t){var e=t.guestName?t.guestName:t.userId,n=!!t.guestName,i=OC.generateUrl(n?"/avatar/guest/{user}/{size}":"/avatar/{user}/{size}",{user:e,size:32});return window.location.protocol+"//"+window.location.host+i}},activeSessions:function(){return Object.values(this.sessions).filter((function(t){return t.lastContact>Date.now()/1e3-30&&!t.isCurrent&&null!==t.userId}))},sessionStyle:function(){return function(t){return{opacity:t.lastContact>Date.now()/1e3-10?1:.5}}},sessionsVisible:function(){return this.activeSessions.slice(0,3)},sessionsPopover:function(){var t=this;return l(this.activeSessions.slice(3).map((function(e){return{href:"#",icon:t.avatarUrl(e),text:e.guestName?e.guestName:e.displayName}})))}},methods:{}},p=(i(627),i(29)),f=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"session-list"},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.editorsTooltip,expression:"editorsTooltip",modifiers:{left:!0}}],staticClass:"avatar-list",on:{click:function(e){t.popoverVisible=!t.popoverVisible}}},[t.sessionsPopover.length>0?n("div",{staticClass:"avatardiv icon-more"}):t._e(),t._v(" "),t._l(t.sessionsVisible,(function(e){return n("Avatar",{key:e.id,style:t.sessionStyle(e),attrs:{url:t.avatarUrl(e),"disable-tooltip":!0,size:32}})}))],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.popoverVisible,expression:"popoverVisible"}],staticClass:"popovermenu menu-right"},[n("PopoverMenu",{attrs:{menu:t.sessionsPopover}}),t._v(" "),t._t("default")],2)])}),[],!1,null,"d41c1edc",null);e.default=f.exports}}]);
//# sourceMappingURL=editor-collab.js.map?v=1992b3f234a3faaf2bc2