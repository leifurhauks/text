(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[192],{12:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o}));
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
var i=["text/markdown"],o=["text/plain","application/cmd","application/javascript","application/json","application/xml","application/x-empty","application/x-msdos-program","application/x-php","application/x-pearl","application/x-text","application/yaml"],r=[].concat(i,o)},265:function(t,n,e){var i=e(551);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(245).default)("40612835",i,!0,{})},266:function(t,n,e){var i=e(553);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(245).default)("79148c10",i,!0,{})},550:function(t,n,e){"use strict";var i=e(265);e.n(i).a},551:function(t,n,e){(t.exports=e(244)(!1)).push([t.i,".menubar[data-v-3f2d6b91]{position:fixed;position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:10010;background-color:var(--color-main-background-translucent);height:44px}.menubar .menubar-icons[data-v-3f2d6b91]{flex-grow:1;margin-left:calc((100% - 660px) / 2)}@media (max-width: 660px){.menubar .menubar-icons[data-v-3f2d6b91]{margin-left:0}}.menubar button[data-v-3f2d6b91]{width:44px;height:44px;margin:0;background-size:16px;border:0;background-color:transparent;opacity:.5;color:var(--color-main-text);background-position:center center;vertical-align:top}.menubar button[data-v-3f2d6b91]:hover,.menubar button[data-v-3f2d6b91]:focus,.menubar button[data-v-3f2d6b91]:active{background-color:var(--color-background-dark)}.menubar button.is-active[data-v-3f2d6b91],.menubar button[data-v-3f2d6b91]:hover,.menubar button[data-v-3f2d6b91]:focus{opacity:1}.menubar button.icon-undo[data-v-3f2d6b91],.menubar button.icon-redo[data-v-3f2d6b91]{opacity:.4}.menubar .submenu[data-v-3f2d6b91]{display:inline-block;width:44px;height:44px;position:relative;vertical-align:top}\n",""])},552:function(t,n,e){"use strict";var i=e(266);e.n(i).a},553:function(t,n,e){(t.exports=e(244)(!1)).push([t.i,".menububble[data-v-7735676e]{position:absolute;display:flex;z-index:10020;background:var(--color-main-background-translucent);box-shadow:0 1px 5px var(--color-box-shadow);border-radius:5px;padding:0.3rem;margin-bottom:0.5rem;visibility:hidden;opacity:0;transform:translateX(-50%);transition:opacity 0.2s, visibility 0.2s}.menububble.is-active[data-v-7735676e]{opacity:1;visibility:visible}.menububble__button[data-v-7735676e]{display:inline-flex;border:0;padding:0.2rem 0.5rem;margin-right:0.2rem;border-radius:3px;cursor:pointer}.menububble__button[data-v-7735676e]:last-child{margin-right:0}.menububble__form[data-v-7735676e]{display:flex;align-items:center}.menububble__input[data-v-7735676e]{font:inherit;border:none;background:transparent;min-width:150px}\n",""])},560:function(n,e,i){"use strict";i.r(e);var o=i(246),r=i(249),a=i.n(r),c=[{label:t("text","Undo"),class:"icon-undo",isActive:function(t){},action:function(t){return t.undo()}},{label:t("text","Redo"),class:"icon-redo",isActive:function(t){},action:function(t){return t.redo()}},{label:t("text","Bold"),class:"icon-bold",isActive:function(t){return t.strong()},action:function(t){return t.strong()}},{label:t("text","Italic"),class:"icon-italic",isActive:function(t){return t.em()},action:function(t){return t.em()}},{label:t("text","Strikethrough"),class:"icon-strike",isActive:function(t){return t.strike()},action:function(t){return t.strike()}},{label:t("text","Paragraph"),class:"icon-paragraph",isActive:function(t){},action:function(t){return t.paragraph()}},{label:t("text","Headings"),visible:!1,children:[{label:t("text","Heading 1"),class:"icon-h1",isActive:function(t){return t.heading({level:1})},action:function(t){return t.heading({level:1})}},{label:t("text","Heading 2"),class:"icon-h2",isActive:function(t){return t.heading({level:2})},action:function(t){return t.heading({level:2})}},{label:t("text","Heading 3"),class:"icon-h3",isActive:function(t){return t.heading({level:3})},action:function(t){return t.heading({level:3})}},{label:t("text","Heading 4"),class:"icon-h4",isActive:function(t){return t.heading({level:4})},action:function(t){return t.heading({level:4})}},{label:t("text","Heading 5"),class:"icon-h5",isActive:function(t){return t.heading({level:5})},action:function(t){return t.heading({level:5})}},{label:t("text","Heading 6"),class:"icon-h6",isActive:function(t){return t.heading({level:6})},action:function(t){return t.heading({level:6})}}]},{label:t("text","Unordered list"),class:"icon-ul",isActive:function(t){return t.bullet_list()},action:function(t){return t.bullet_list()}},{label:t("text","Ordered list"),class:"icon-ol",isActive:function(t){return t.ordered_list()},action:function(t){return t.ordered_list()}},{label:t("text","Blockquote"),class:"icon-quote",isActive:function(t){return t.blockquote()},action:function(t){return t.blockquote()}},{label:t("text","Code block"),class:"icon-code",isActive:function(t){return t.code_block()},action:function(t){return t.code_block()}}],l=i(57),u=i(547),s=i.n(u),d=i(548),f=i.n(d),p=i(264),b=i.n(p),v=i(549),m=i.n(v);function h(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var e=[],i=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);i=!0);}catch(t){o=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={name:"MenuBar",components:{EditorMenuBar:o.c,ActionButton:f.a,PopoverMenu:b.a,Actions:s.a},directives:{Tooltip:a.a,ClickOutside:m.a},props:{editor:{type:Object,required:!1,default:null},isRichEditor:{type:Boolean,default:!0}},data:function(){return{windowWidth:0,windowHeight:0,forceRecompute:0,submenuVisibility:{},icons:g(c)}},computed:{isPublic:function(){return document.getElementById("isPublic")&&"1"===document.getElementById("isPublic").value},isHiddenInMenu:function(){var t=this;return function(n){return n-t.iconCount>=0}},getIconClasses:function(){return function(t,n){var e={"is-active":n.isActive(t)};return e[n.class]=!0,e}},isChildMenuVisible:function(){var t=this;return function(n){return!!t.submenuVisibility.hasOwnProperty(n.label)&&t.submenuVisibility[n.label]}},allIcons:function(){var n=this;return this.isPublic?this.icons:[].concat(g(this.icons),[{label:t("text","Insert image"),class:"icon-image",isActive:function(){},action:function(t){n.showImagePrompt(t.image)}}])},childPopoverMenu:function(){var t=this;return function(n,e,i,o){var r=[],a=function(a){r.push({text:i[a].label,icon:i[a].class,action:function(){i[a].action(e),t.hideChildMenu(o)},active:i[a].isActive(n)})};for(var c in i)a(c);return r}},childIconClass:function(){return function(t,n){for(var e in n){var i=n[e];if(i.isActive(t))return i.class}return"icon-h1"}},iconCount:function(){this.forceRecompute,this.windowWidth;var t=this.$refs.menubar?this.$refs.menubar.clientWidth:this.windowWidth-200,n=Math.max(Math.floor(t/44)-2,0);return n}},beforeMount:function(){this.redrawMenuBar()},mounted:function(){window.addEventListener("resize",this.getWindowWidth)},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)},methods:{redrawMenuBar:function(){var t=this;this.$nextTick((function(){t.getWindowWidth(),t.forceRecompute++}))},clickIcon:function(t,n){return n.action(t)},getWindowWidth:function(t){this.windowWidth=document.documentElement.clientWidth},getWindowHeight:function(t){this.windowHeight=document.documentElement.clientHeight},hideChildMenu:function(t){this.$set(this.submenuVisibility,t.label,!1)},toggleChildMenu:function(t){var n=!!this.submenuVisibility.hasOwnProperty(t.label)&&this.submenuVisibility[t.label];this.$set(this.submenuVisibility,t.label,!n)},showImagePrompt:function(t){var n=OC.getCurrentUser();if(n){var e=t;OC.dialogs.filepicker("Insert an image",(function(t){Object(l.a)(n.uid,t).then((function(t){var n=t[0];console.debug(n);var i=OC.generateUrl("/core/preview?")+"fileId=".concat(n.id,"&x=1024&y=1024&a=true"),o=OC.generateUrl("/f/"+n.id),r={mimetype:n.mimetype,hasPreview:n.hasPreview,fileId:n.id},a=(n.hasPreview?i:o)+"#"+Object.entries(r).map((function(t){var n=h(t,2),e=n[0],i=n[1];return"".concat(e,"=").concat(encodeURIComponent(i))})).join("&");e({src:a,alt:n.name})}))}),!1,[],!0)}}}},x=(i(550),i(59)),y=Object(x.a)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("EditorMenuBar",{attrs:{editor:t.editor},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.commands,o=n.isActive;return[e("div",{staticClass:"menubar"},[t.isRichEditor?e("div",{ref:"menubar",staticClass:"menubar-icons"},[t._l(t.allIcons,(function(n,r){return[n.class?e("button",{directives:[{name:"show",rawName:"v-show",value:r<t.iconCount,expression:"$index < iconCount"}],key:n.label,class:t.getIconClasses(o,n),attrs:{title:n.label},on:{click:function(e){return t.clickIcon(i,n)}}}):[e("div",{directives:[{name:"show",rawName:"v-show",value:r<t.iconCount,expression:"$index < iconCount"},{name:"click-outside",rawName:"v-click-outside",value:function(){return t.hideChildMenu(n)},expression:"() => hideChildMenu(icon)"}],key:n.label,staticClass:"submenu"},[e("button",{class:t.childIconClass(o,n.children),attrs:{title:n.label},on:{click:function(e){return e.preventDefault(),t.toggleChildMenu(n)}}}),t._v(" "),e("div",{staticClass:"popovermenu menu-center",class:{open:t.isChildMenuVisible(n)}},[e("PopoverMenu",{attrs:{menu:t.childPopoverMenu(o,i,n.children,n)}})],1)])]]})),t._v(" "),e("Actions",[t._l(t.allIcons,(function(n,o){return[n.class&&t.isHiddenInMenu(o)?e("ActionButton",{key:n.class,attrs:{icon:n.class},on:{click:function(e){return t.clickIcon(i,n)}}},[t._v("\n\t\t\t\t\t\t"+t._s(n.label)+"\n\t\t\t\t\t")]):!n.class&&t.isHiddenInMenu(o)?t._l(n.children,(function(n){return e("ActionButton",{key:n.class,attrs:{icon:n.class},on:{click:function(e){return t.clickIcon(i,n)}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(n.label)+"\n\t\t\t\t\t\t")])})):t._e()]}))],2)],2):t._e(),t._v(" "),t._t("default",[t._v("\n\t\t\tLeft side\n\t\t")])],2)]}}],null,!0)})}),[],!1,null,"3f2d6b91",null);e.default=y.exports},562:function(t,n,e){"use strict";e.r(n);var i=e(246),o=e(249),r=e.n(o),a={name:"MenuBubble",components:{EditorMenuBubble:i.d},directives:{tooltip:r.a},props:{editor:{type:Object,required:!1,default:null}},data:function(){return{linkUrl:null,linkMenuIsActive:!1}},methods:{showLinkMenu:function(t){var n=this;this.linkUrl=t.href,this.linkMenuIsActive=!0,this.$nextTick((function(){n.$refs.linkInput.focus()}))},hideLinkMenu:function(){this.linkUrl=null,this.linkMenuIsActive=!1},setLinkUrl:function(t,n){!n||n.match(/^[a-zA-Z]+:\/\//)||n.match(/^\//)||(n="https://"+n),t({href:n}),this.hideLinkMenu()}}},c=(e(552),e(59)),l=Object(c.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("EditorMenuBubble",{staticClass:"menububble",attrs:{editor:t.editor},on:{hide:t.hideLinkMenu},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.commands,o=n.isActive,r=n.getMarkAttrs,a=n.menu;return[e("div",{staticClass:"menububble",class:{"is-active":a.isActive},style:"left: "+a.left+"px; bottom: "+a.bottom+"px;"},[t.linkMenuIsActive?e("form",{staticClass:"menububble__form",on:{submit:function(n){return n.preventDefault(),t.setLinkUrl(i.link,t.linkUrl)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.linkUrl,expression:"linkUrl"}],ref:"linkInput",staticClass:"menububble__input",attrs:{type:"text",placeholder:"https://"},domProps:{value:t.linkUrl},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.hideLinkMenu(n)},input:function(n){n.target.composing||(t.linkUrl=n.target.value)}}}),t._v(" "),e("button",{staticClass:"menububble__button icon-confirm",attrs:{type:"button"},on:{click:function(n){return t.setLinkUrl(i.link,t.linkUrl)}}})]):[e("button",{staticClass:"menububble__button",class:{"is-active":o.link()},on:{click:function(n){t.showLinkMenu(r("link"))}}},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:o.link()?"Update Link":"Add Link",expression:"isActive.link() ? 'Update Link' : 'Add Link'"}],staticClass:"icon-link"}),t._v(" "),e("span",[t._v(t._s(t.t("text","Add link")))])])]],2)]}}])})}),[],!1,null,"7735676e",null);n.default=l.exports},57:function(n,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return d})),i.d(e,"c",(function(){return s}));var o=i(56),r=i.n(o),a=i(55),c=i(12);function l(t,n,e,i,o,r,a){try{var c=t[r](a),l=c.value}catch(t){return void e(t)}c.done?n(l):Promise.resolve(l).then(i,o)}
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
var u=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,e){var i,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r()({method:"PROPFIND",url:Object(a.generateRemoteUrl)("dav/files/".concat(n).concat(e)),headers:{requesttoken:OC.requestToken,"content-Type":"text/xml"},data:'<?xml version="1.0"?>\n<d:propfind  xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns" xmlns:ocs="http://open-collaboration-services.org/ns">\n  <d:prop>\n    <d:getlastmodified />\n    <d:getetag />\n    <d:getcontenttype />\n    <d:resourcetype />\n    <oc:fileid />\n    <oc:permissions />\n    <oc:size />\n    <d:getcontentlength />\n    <nc:has-preview />\n    <nc:mount-type />\n    <nc:is-encrypted />\n    <ocs:share-permissions />\n    <oc:tags />\n    <oc:favorite />\n    <oc:comments-unread />\n    <oc:owner-id />\n    <oc:owner-display-name />\n    <oc:share-types />\n  </d:prop>\n</d:propfind>'});case 2:return i=t.sent,o=OCA.Files.App.fileList.filesClient._client.parseMultiStatus(i.data),t.abrupt("return",o.map((function(t){var n=OCA.Files.App.fileList.filesClient._parseFileInfo(t);return n.href=t.href,n})));case 5:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(i,o){var r=t.apply(n,e);function a(t){l(r,i,o,a,c,"next",t)}function c(t){l(r,i,o,a,c,"throw",t)}a(void 0)}))});return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n={attach:function(n){var e=n.fileList;"files"!==e.id&&"files.public"!==e.id||n.addMenuEntry({id:"file",displayName:t("text","New text document"),templateName:t("text","New text document")+".md",iconClass:"icon-filetype-text",fileType:"file",actionHandler:function(t){e.createFile(t).then((function(t,n){var i=new OCA.Files.FileInfoModel(n);void 0!==OCA.Viewer?OCA.Files.fileActions.triggerAction("view",i,e):void 0===OCA.Viewer&&OCA.Files.fileActions.triggerAction("Edit with text app",i,e)}))}})}};OC.Plugins.register("OCA.Files.NewFileMenu",n)},d=function(){var n,e=document.getElementById("sharingToken")?document.getElementById("sharingToken").value:null,o=document.getElementById("dir").value;if(!e||""!==o){var r=document.createElement("div");r.id="text-viewer-fallback",document.body.appendChild(r);for(var a=0;a<c.a.length;a++)n=c.a[a],OCA.Files.fileActions.register(n,"Edit with text app",OC.PERMISSION_UPDATE|OC.PERMISSION_READ,OC.imagePath("core","actions/rename"),(function(t){var n=window.FileList.findFile(t);Promise.all([i.e(0).then(i.bind(null,111)),Promise.all([i.e(0),i.e(199),i.e(194)]).then(i.bind(null,234))]).then((function(i){var o=window.FileList.getCurrentDirectory()+"/"+t,a=i[0].default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;var c=i[1].default;new a({render:function(t){return t(c,{props:{fileId:n?n.id:null,active:!0,shareToken:e,relativePath:o,mimeType:n.mimetype}})}}).$mount(r)}))}),t("text","Edit")),OCA.Files.fileActions.setDefault(c.a[a],"Edit with text app")}}}}]);
//# sourceMappingURL=editor-rich.js.map?v=699239d79b273c5220fc