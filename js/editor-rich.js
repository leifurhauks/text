(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1:function(n,t,e){"use strict";e.d(t,"a",function(){return r}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return o});
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
var i=["text/markdown"],o=["text/plain","application/cmd","application/javascript","application/json","application/xml","application/x-empty","application/x-msdos-program","application/x-php","application/x-pearl","application/x-text","application/yaml"],r=[].concat(i,o)},3:function(n,e,i){"use strict";i.d(e,"a",function(){return u}),i.d(e,"b",function(){return d}),i.d(e,"c",function(){return s});var o=i(14),r=i.n(o),a=i(2),c=i(1);function l(n,t,e,i,o,r,a){try{var c=n[r](a),l=c.value}catch(n){return void e(n)}c.done?t(l):Promise.resolve(l).then(i,o)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
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
var u=function(){var n,t=(n=regeneratorRuntime.mark(function n(t,e){var i,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r()({method:"PROPFIND",url:Object(a.generateRemoteUrl)("dav/files/".concat(t).concat(e)),headers:{requesttoken:OC.requestToken,"content-Type":"text/xml"},data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns" xmlns:ocs="http://open-collaboration-services.org/ns">\n  <d:prop>\n    <d:getlastmodified />\n    <d:getetag />\n    <d:getcontenttype />\n    <d:resourcetype />\n    <oc:fileid />\n    <oc:permissions />\n    <oc:size />\n    <d:getcontentlength />\n    <nc:has-preview />\n    <nc:mount-type />\n    <nc:is-encrypted />\n    <ocs:share-permissions />\n    <oc:tags />\n    <oc:favorite />\n    <oc:comments-unread />\n    <oc:owner-id />\n    <oc:owner-display-name />\n    <oc:share-types />\n  </d:prop>\n</d:propfind>'});case 2:return i=n.sent,o=OCA.Files.App.fileList.filesClient._client.parseMultiStatus(i.data),n.abrupt("return",o.map(function(n){var t=OCA.Files.App.fileList.filesClient._parseFileInfo(n);return t.href=n.href,t}));case 5:case"end":return n.stop()}},n)}),function(){var t=this,e=arguments;return new Promise(function(i,o){var r=n.apply(t,e);function a(n){l(r,i,o,a,c,"next",n)}function c(n){l(r,i,o,a,c,"throw",n)}a(void 0)})});return function(n,e){return t.apply(this,arguments)}}(),s=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document.md"),iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(n){e.createFile(n).then(function(n,t){var i=new OCA.Files.FileInfoModel(t);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction("Edit with text app",i,e)})}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},d=function(){var n,e=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,o=document.getElementById("dir").value;if(!e||""!==o){var r=document.createElement("div");r.id="text-viewer-fallback",document.body.appendChild(r);for(var a=0;a<c.a.length;a++)n=c.a[a],OCA.Files.fileActions.register(n,"Edit with text app",OC.PERMISSION_UPDATE|OC.PERMISSION_READ,OC.imagePath("core","actions/rename"),function(n){var t=window.FileList.findFile(n);Promise.all([i.e(0).then(i.bind(null,15)),Promise.all([i.e(0),i.e(197),i.e(192)]).then(i.bind(null,34))]).then(function(i){var o=window.FileList.getCurrentDirectory()+"/"+n,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(n){return n(c,{props:{fileId:t?t.id:null,active:!0,shareToken:e,relativePath:o,mimeType:t.mimetype}})}}).$mount(r)})},t("text","Edit")),OCA.Files.fileActions.setDefault(c.a[a],"Edit with text app")}}},350:function(n,t,e){"use strict";var i=e(64);e.n(i).a},351:function(n,t,e){(n.exports=e(44)(!1)).push([n.i,".menubar[data-v-743d126c] {\n  position: fixed;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  display: flex;\n  z-index: 10010;\n  background-color: var(--color-main-background-translucent);\n  height: 44px;\n}\n.menubar .menubar-icons[data-v-743d126c] {\n    flex-grow: 1;\n    margin-left: calc((100% - 660px) / 2);\n}\n@media (max-width: 660px) {\n.menubar .menubar-icons[data-v-743d126c] {\n      margin-left: 0;\n}\n}\n.menubar button[data-v-743d126c] {\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  background-size: 16px;\n  border: 0;\n  background-color: transparent;\n  opacity: .5;\n  color: var(--color-main-text);\n  background-position: center center;\n  vertical-align: top;\n}\n.menubar button[data-v-743d126c]:hover, .menubar button[data-v-743d126c]:focus, .menubar button[data-v-743d126c]:active {\n    background-color: var(--color-background-dark);\n}\n.menubar button.is-active[data-v-743d126c], .menubar button[data-v-743d126c]:hover, .menubar button[data-v-743d126c]:focus {\n    opacity: 1;\n}\n.menubar button.icon-undo[data-v-743d126c], .menubar button.icon-redo[data-v-743d126c] {\n    opacity: .4;\n}\n.menubar .submenu[data-v-743d126c] {\n  display: inline-block;\n  width: 44px;\n  height: 44px;\n  position: relative;\n  vertical-align: top;\n}\n",""])},352:function(n,t,e){"use strict";var i=e(65);e.n(i).a},353:function(n,t,e){(n.exports=e(44)(!1)).push([n.i,".menububble[data-v-dcf701dc] {\n  position: absolute;\n  display: flex;\n  z-index: 10020;\n  background: var(--color-main-background-translucent);\n  box-shadow: 0 1px 5px var(--color-box-shadow);\n  border-radius: 5px;\n  padding: 0.3rem;\n  margin-bottom: 0.5rem;\n  visibility: hidden;\n  opacity: 0;\n  transform: translateX(-50%);\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.menububble.is-active[data-v-dcf701dc] {\n    opacity: 1;\n    visibility: visible;\n}\n.menububble__button[data-v-dcf701dc] {\n    display: inline-flex;\n    border: 0;\n    padding: 0.2rem 0.5rem;\n    margin-right: 0.2rem;\n    border-radius: 3px;\n    cursor: pointer;\n}\n.menububble__button[data-v-dcf701dc]:last-child {\n      margin-right: 0;\n}\n.menububble__form[data-v-dcf701dc] {\n    display: flex;\n    align-items: center;\n}\n.menububble__input[data-v-dcf701dc] {\n    font: inherit;\n    border: none;\n    background: transparent;\n    min-width: 150px;\n}\n",""])},362:function(n,e,i){"use strict";i.r(e);var o=i(46),r=i(49),a=i.n(r),c=[{label:t("text","Undo"),class:"icon-undo",isActive:function(n){},action:function(n){return n.undo()}},{label:"Redo",class:"icon-redo",isActive:function(n){},action:function(n){return n.redo()}},{label:"Bold",class:"icon-bold",isActive:function(n){return n.strong()},action:function(n){return n.strong()}},{label:"Italic",class:"icon-italic",isActive:function(n){return n.em()},action:function(n){return n.em()}},{label:"Strikethough",class:"icon-strike",isActive:function(n){return n.strike()},action:function(n){return n.strike()}},{label:"Paragraph",class:"icon-paragraph",isActive:function(n){},action:function(n){return n.paragraph()}},{label:"Headings",visible:!1,children:[{label:"Heading 1",class:"icon-h1",isActive:function(n){return n.heading({level:1})},action:function(n){return n.heading({level:1})}},{label:"Heading 2",class:"icon-h2",isActive:function(n){return n.heading({level:2})},action:function(n){return n.heading({level:2})}},{label:"Heading 3",class:"icon-h3",isActive:function(n){return n.heading({level:3})},action:function(n){return n.heading({level:3})}},{label:"Heading 4",class:"icon-h4",isActive:function(n){return n.heading({level:4})},action:function(n){return n.heading({level:4})}},{label:"Heading 5",class:"icon-h5",isActive:function(n){return n.heading({level:5})},action:function(n){return n.heading({level:5})}},{label:"Heading 6",class:"icon-h6",isActive:function(n){return n.heading({level:6})},action:function(n){return n.heading({level:6})}}]},{label:"Unordered list",class:"icon-ul",isActive:function(n){return n.bullet_list()},action:function(n){return n.bullet_list()}},{label:"Ordered list",class:"icon-ol",isActive:function(n){return n.ordered_list()},action:function(n){return n.ordered_list()}},{label:"Blockquote",class:"icon-quote",isActive:function(n){return n.blockquote()},action:function(n){return n.blockquote()}},{label:"Code block",class:"icon-code",isActive:function(n){return n.code_block()},action:function(n){return n.code_block()}}],l=i(3),u=i(347),s=i.n(u),d=i(348),f=i.n(d),p=i(63),b=i.n(p),v=i(349),m=i.n(v);function h(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],i=!0,o=!1,r=void 0;try{for(var a,c=n[Symbol.iterator]();!(i=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);i=!0);}catch(n){o=!0,r=n}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={name:"MenuBar",components:{EditorMenuBar:o.c,ActionButton:f.a,PopoverMenu:b.a,Actions:s.a},directives:{Tooltip:a.a,ClickOutside:m.a},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},icons:g(c)}},computed:{isPublic:function(){return document.getElementById("isPublic")&&"1"===document.getElementById("isPublic").value},isHiddenInMenu:function(){var n=this;return function(t){return t-n.iconCount>=0}},getIconClasses:function(){return function(n,t){var e={"is-active":t.isActive(n)};return e[t.class]=!0,e}},isChildMenuVisible:function(){var n=this;return function(t){return!!n.submenuVisibility.hasOwnProperty(t.label)&&n.submenuVisibility[t.label]}},allIcons:function(){var n=this;return this.isPublic?this.icons:[].concat(g(this.icons),[{label:"Insert image",class:"icon-image",isActive:function(){},action:function(t){n.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var n=this;return function(t,e,i,o){var r=[],a=function(a){r.push({text:i[a].label,icon:i[a].class,action:function(){i[a].action(e),n.hideChildMenu(o)},active:i[a].isActive(t)})};for(var c in i)a(c);return r}},childIconClass:function(){return function(n,t){for(var e in t){var i=t[e];if(i.isActive(n))return i.class}return"icon-h1"}},iconCount:function(){this.forceRecompute,this.windowWidth;var n=this.$refs.menubar?this.$refs.menubar.clientWidth:this.windowWidth-200,t=Math.max(Math.floor(n/44)-2,0);return t}},beforeMount:function(){this.redrawMenuBar()},mounted:function(){window.addEventListener("resize",this.getWindowWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var n=this;this.$nextTick(function(){n.getWindowWidth(),n.forceRecompute++})},clickIcon:function(n,t){return t.action(n)},getWindowWidth:function(n){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(n){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(n){this.$set(this.submenuVisibility,n.label,!1)},toggleChildMenu:function(n){var t=!!this.submenuVisibility.hasOwnProperty(n.label)&&this.submenuVisibility[n.label];this.$set(this.submenuVisibility,n.label,!t)},showImagePrompt:function(n){var t=OC.getCurrentUser();if(t){var e=n;OC.dialogs.filepicker("Insert an image",function(n){Object(l.a)(t.uid,n).then(function(n){var t=n[0];console.debug(t);var i=OC.generateUrl("/core/preview?")+"fileId=".concat(t.id,"&x=1024&y=1024&a=true"),o=OC.generateUrl("/f/"+t.id),r={mimetype:t.mimetype,hasPreview:t.hasPreview,fileId:t.id},a=(t.hasPreview?i:o)+"#"+Object.entries(r).map(function(n){var t=h(n,2),e=t[0],i=t[1];return"".concat(e,"=").concat(encodeURIComponent(i))}).join("&");e({src:a,alt:t.name})})},!1,[],!0)}}}},w=(i(350),i(5)),y=Object(w.a)(k,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("editor-menu-bar",{attrs:{editor:n.editor},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.commands,o=t.isActive;return[e("div",{staticClass:"menubar"},[n.isRichEditor?e("div",{ref:"menubar",staticClass:"menubar-icons"},[n._l(n.allIcons,function(t,r){return[t.class?e("button",{directives:[{name:"show",rawName:"v-show",value:r<n.iconCount,expression:"$index < iconCount"}],key:t.label,class:n.getIconClasses(o,t),attrs:{title:t.label},on:{click:function(e){return n.clickIcon(i,t)}}}):[e("div",{directives:[{name:"show",rawName:"v-show",value:r<n.iconCount,expression:"$index < iconCount"},{name:"click-outside",rawName:"v-click-outside",value:function(){return n.hideChildMenu(t)},expression:"() => hideChildMenu(icon)"}],key:t.label,staticClass:"submenu"},[e("button",{class:n.childIconClass(o,t.children),attrs:{title:t.label},on:{click:function(e){return e.preventDefault(),n.toggleChildMenu(t)}}}),n._v(" "),e("div",{staticClass:"popovermenu menu-center",class:{open:n.isChildMenuVisible(t)}},[e("popover-menu",{attrs:{menu:n.childPopoverMenu(o,i,t.children,t)}})],1)])]]}),n._v(" "),e("actions",[n._l(n.allIcons,function(t,o){return[t.class&&n.isHiddenInMenu(o)?e("action-button",{key:t.class,attrs:{icon:t.class},on:{click:function(e){return n.clickIcon(i,t)}}},[n._v("\n\t\t\t\t\t\t"+n._s(t.label)+"\n\t\t\t\t\t")]):!t.class&&n.isHiddenInMenu(o)?n._l(t.children,function(t){return e("action-button",{key:t.class,attrs:{icon:t.class},on:{click:function(e){return n.clickIcon(i,t)}}},[n._v("\n\t\t\t\t\t\t\t"+n._s(t.label)+"\n\t\t\t\t\t\t")])}):n._e()]})],2)],2):n._e(),n._v(" "),n._t("default",[n._v("\n\t\t\tLeft side\n\t\t")])],2)]}}],null,!0)})},[],!1,null,"743d126c",null);e.default=y.exports},363:function(n,t,e){"use strict";e.r(t);var i=e(46),o=e(49),r=e.n(o),a={name:"MenuBubble",components:{EditorMenuBubble:i.d},directives:{tooltip:r.a},props:{editor:{type:Object,required:!1,default:null}},data:function(){return{linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(n){var t=this;this.linkUrl=n.href,this.linkMenuIsActive=!0,this.$nextTick(function(){t.$refs.linkInput.focus()})},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(n,t){!t||t.match(/^[a-zA-Z]+:\/\//)||t.match(/^\//)||(t="https://"+t),n({href:t}),this.hideLinkMenu()}}},c=(e(352),e(5)),l=Object(c.a)(a,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("editor-menu-bubble",{staticClass:"menububble",attrs:{editor:n.editor},on:{hide:n.hideLinkMenu},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.commands,o=t.isActive,r=t.getMarkAttrs,a=t.menu;return[e("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:"left: "+a.left+"px; bottom: "+a.bottom+"px;"},[n.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(t){return t.preventDefault(),n.setLinkUrl(i.link,n.linkUrl)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:n.linkUrl},on:{keydown:function(t){return!t.type.indexOf("key")&&n._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:n.hideLinkMenu(t)},input:function(t){t.target.composing||(n.linkUrl=t.target.value)}}}),n._v(" "),e("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button"},on:{click:function(t){return n.setLinkUrl(i.link,n.linkUrl)}}})]):[e("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(t){n.showLinkMenu(r("link"))}}},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:o.link()?"Update Link":"Add Link",expression:"isActive.link() ? 'Update Link' : 'Add Link'"}],staticClass:"icon-link"}),n._v(" "),e("span",[n._v(n._s(n.t("text","Add link")))])])]],2)]}}])})},[],!1,null,"dcf701dc",null);t.default=l.exports},64:function(n,t,e){var i=e(351);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e(45).default)("b7f105e4",i,!0,{})},65:function(n,t,e){var i=e(353);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e(45).default)("ef006100",i,!0,{})}}]);
//# sourceMappingURL=editor-rich.js.map?v=6e346a73e2461e6c694b