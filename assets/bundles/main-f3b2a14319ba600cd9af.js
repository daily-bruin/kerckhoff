!function(t){function e(e){for(var s,r,o=e[0],l=e[1],u=e[2],d=0,f=[];d<o.length;d++)r=o[d],i[r]&&f.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);for(c&&c(e);f.length;)f.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={2:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;n.push([76,0]),a()}({12:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("b-navbar",{attrs:{toggleable:"",type:"light",variant:"light"}},[e("div",{staticClass:"container"},[e("b-link",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("div",{staticClass:"d-flex align-items-center branding"},[e("img",{staticClass:"logo pr-1 mr-2",attrs:{src:"/static/img/db_logo.svg"}}),this._v(" "),e("span",{staticClass:"title font-weight-bold"},[this._v("\n          FEATURES\n        ")])])]),this._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-nav",{attrs:{"is-nav-bar":""}},[e("b-nav-item",[this._v("Pages")]),this._v(" "),e("b-nav-item",[this._v("Team")])],1),this._v(" "),e("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[e("b-nav-item",[e("icon",{attrs:{name:"search"}})],1)],1)],1)],1)])};s._withStripped=!0;var i=a(0),n=!1;var r=function(t){n||a(17)},o=Object(i.a)({name:"navbar"},s,[],!1,r,"data-v-3ad8dc7e",null);o.options.__file="assets\\js\\components\\Navbar.vue";var l=o.exports,u=function(){var t=this.$createElement;this._self._c;return this._m(0)};u._withStripped=!0;var c=!1;var d=function(t){c||a(15)},f=Object(i.a)({name:"page-foot"},u,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col col-md-auto"},[a("span",{staticClass:"text-muted"},[t._v("© 2017 The Daily Bruin")])])]),t._v(" "),a("div",{staticClass:"row justify-content-md-center mb-2"},[a("div",{staticClass:"col col-md-auto"},[a("span",{staticClass:"text-muted"},[t._v("Handcrafted with love in 118 Kerchkoff Hall")])])]),t._v(" "),a("div",{staticClass:"row justify-content-md-center text-center"},[a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("People")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("Recruiting")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("DailyBruin.com")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("Bruinwalk")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"/accounts/login"}},[t._v("Manage")])])])])])}],!1,d,null,null);f.options.__file="assets\\js\\components\\Footer.vue";var v={props:["type"],components:{Navbar:l,PageFoot:f.exports,Profile:a(7).default},name:"mainModule"},p=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("Navbar"),this._v(" "),e("router-view"),this._v(" "),e("PageFoot")],1)};p._withStripped=!0;var _=Object(i.a)(v,p,[],!1,null,null,null);_.options.__file="assets\\js\\MainModule.vue";e.default=_.exports},14:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\nbody {\n  min-height: 100vh;\n  position: relative;\n  padding-bottom: 100px;\n}\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100px;\n}\n",""])},15:function(t,e,a){var s=a(14);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5).default)("5bbed97b",s,!1,{})},16:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.branding .logo[data-v-3ad8dc7e] {\n  width: 200px;\n  border-right: 1px solid #333;\n}\n.branding .title[data-v-3ad8dc7e] {\n  font-size: 0.8em;\n}\n",""])},17:function(t,e,a){var s=a(16);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(5).default)("5651ce84",s,!1,{})},37:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement;this._self._c;return this._m(0)};s._withStripped=!0;var i=a(0),n=Object(i.a)({name:"display-view"},s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-3"},[e("h2",[this._v("Display view!")])])}],!1,null,null,null);n.options.__file="assets\\js\\components\\Display.vue";e.default=n.exports},4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.axios=e.utils=void 0;var s=n(a(28)),i=n(a(22));function n(t){return t&&t.__esModule?t:{default:t}}s.default.defaults.xsrfHeaderName="X-CSRFToken",s.default.defaults.xsrfCookieName="csrftoken";var r={getCSRFToken:function(){return i.default.get("csrftoken")},asFormData:function(t){Object.keys(t).reduce(function(e,a){return e.append(a,t[a]),e},new FormData)}};e.utils=r,e.axios=s.default},64:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(a(10)),i=r(a(29)),n=r(a(37));function r(t){return t&&t.__esModule?t:{default:t}}s.default.use(i.default);var o=[{path:"/",component:n.default}];e.default=new i.default({mode:"history",routes:o})},7:function(t,e,a){"use strict";a.r(e);var s={name:"user-profile",data:function(){return{userInfo:info}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-3"},[a("h2",[t._v("Hello "+t._s(t.userInfo.first_name)+",")]),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col col-md-4"},[""===t.userInfo.profile_img?a("img",{staticClass:"img-fluid rounded",attrs:{src:"/static/img/placeholder.png"}}):t._e(),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])};i._withStripped=!0;var n=a(0),r=Object(n.a)(s,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"mt-4"},[e("li",[e("a",{attrs:{href:"/accounts/logout"}},[this._v("Upload New")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/accounts/logout"}},[this._v("Logout")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("p",[this._v("Commodo esse commodo eu id laboris sunt ullamco exercitation consectetur eu eiusmod. Reprehenderit et et adipisicing non minim duis elit ad laboris dolore aliquip dolor. Nisi cillum voluptate esse veniam reprehenderit fugiat voluptate eiusmod aliqua. Elit ad sit minim excepteur in laborum occaecat. Aliquip aute ut pariatur elit ullamco nisi commodo pariatur enim irure pariatur consectetur mollit. Ad deserunt dolore fugiat non esse officia nulla ad dolore do fugiat irure.")])])}],!1,null,null,null);r.options.__file="assets\\js\\components\\UserProfile.vue";e.default=r.exports},76:function(t,e,a){"use strict";var s=l(a(10)),i=l(a(19));a(31),a(30),a(80);var n=l(a(8)),r=l(a(12)),o=l(a(64));l(a(4));function l(t){return t&&t.__esModule?t:{default:t}}a(21),a(20),s.default.use(i.default),s.default.component("icon",n.default);new s.default({router:o.default,el:"#app",template:"<MainModule />",components:{MainModule:r.default}})}});