(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[197],{242:function(n,e,t){"use strict";t.r(e);var a=t(243),s=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e.default=s.a},243:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(t(199)),s=u(t(392)),i=t(29);function u(n){return n&&n.__esModule?n:{default:n}}var o={name:"GuestNameDialog",components:{Avatar:s.default},directives:{tooltip:a.default},props:{syncService:{type:Object,default:null}},data:function(){return{guestName:"",guestNameBuffered:""}},computed:{avatarUrl:function(){var n=(0,i.generateUrl)("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+n}},beforeMount:function(){this.guestName=this.syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName:function(){var n=this,e=this.syncService.session.guestName;this.syncService.updateSession(this.guestName).then((function(){localStorage.setItem("nick",n.guestName),n.updateBufferedGuestName()})).catch((function(t){n.guestName=e}))},updateBufferedGuestName:function(){this.guestNameBuffered=this.guestName}}};e.default=o},704:function(n,e,t){"use strict";t.r(e);var a=t(750),s=t(242);for(var i in s)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return s[n]}))}(i);t(751);var u=t(15),o=Object(u.a)(s.default,a.a,a.b,!1,null,"295cde23",null);e.default=o.exports},732:function(n,e,t){"use strict";var a=t(27),s=t.n(a),i=t(28),u=t.n(i)()(s.a);u.push([n.i,"form.guest-name-dialog[data-v-295cde23]{display:flex;max-width:200px;margin:auto;margin-top:-2px;padding:3px}form.guest-name-dialog[data-v-295cde23] img{margin:0 !important}form.guest-name-dialog input[type=text][data-v-295cde23]{flex-grow:1}form.guest-name-dialog label[data-v-295cde23]{padding:3px;height:32px}\n","",{version:3,sources:["webpack://./src/components/GuestNameDialog.vue"],names:[],mappings:"AA4FA,wCACC,YAAa,CACb,eAAgB,CAChB,WAAY,CACZ,eAAgB,CAChB,WAAY,CALb,4CAQE,mBAAoB,CARtB,yDAYE,WAAY,CAZd,8CAeE,WAAY,CACZ,WAAY",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nform.guest-name-dialog {\n\tdisplay: flex;\n\tmax-width: 200px;\n\tmargin: auto;\n\tmargin-top: -2px;\n\tpadding: 3px;\n\n\t& /deep/ img {\n\t\tmargin: 0 !important;\n\t}\n\n\tinput[type=text] {\n\t\tflex-grow: 1;\n\t}\n\tlabel {\n\t\tpadding: 3px;\n\t\theight: 32px;\n\t}\n}\n"],sourceRoot:""}]),e.a=u},750:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return s}));var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:n.t("text","Enter your name so other users can see who is editing"),expression:"t('text', 'Enter your name so other users can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(e){return e.preventDefault(),n.setGuestName()}}},[t("label",[t("Avatar",{attrs:{url:n.avatarUrl,"disable-tooltip":!0,size:32}})],1),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":n.t("text","Edit guest name")},domProps:{value:n.guestName},on:{input:function(e){e.target.composing||(n.guestName=e.target.value)}}}),n._v(" "),t("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":n.t("text","Save guest name"),value:""}})])},s=[]},751:function(n,e,t){"use strict";var a=t(26),s=t.n(a),i=t(732),u={insert:"head",singleton:!1};s()(i.a,u),i.a.locals}}]);
//# sourceMappingURL=editor-guest.js.map?v=5b4ea5f5dbd72b8910fa