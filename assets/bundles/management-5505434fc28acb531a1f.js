!function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)r=l[d],i[r]&&p.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);for(u&&u(e);p.length;)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={1:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},r.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([96,0]),a()}({11:function(t,e,a){"use strict";a.r(e);var s={name:"user-profile",data:function(){return{userInfo:info}}},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-3"},[a("h2",[t._v("Hello "+t._s(t.userInfo.first_name)+",")]),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col col-md-4"},[""===t.userInfo.profile_img?a("img",{staticClass:"img-fluid rounded",attrs:{src:"/static/img/placeholder.png"}}):t._e(),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])};i._withStripped=!0;var n=a(0),r=Object(n.a)(s,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"mt-4"},[e("li",[e("a",{attrs:{href:"/accounts/logout"}},[this._v("Upload New")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/accounts/logout"}},[this._v("Logout")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("p",[this._v("Commodo esse commodo eu id laboris sunt ullamco exercitation consectetur eu eiusmod. Reprehenderit et et adipisicing non minim duis elit ad laboris dolore aliquip dolor. Nisi cillum voluptate esse veniam reprehenderit fugiat voluptate eiusmod aliqua. Elit ad sit minim excepteur in laborum occaecat. Aliquip aute ut pariatur elit ullamco nisi commodo pariatur enim irure pariatur consectetur mollit. Ad deserunt dolore fugiat non esse officia nulla ad dolore do fugiat irure.")])])}],!1,null,null,null);r.options.__file="assets\\js\\components\\UserProfile.vue";e.default=r.exports},132:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-2"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col col-md-2"},[e("b-list-group",[e("b-list-group-item",{attrs:{to:"/manage/pages/new"}},[this._v("Upload")])],1)],1),this._v(" "),e("div",{staticClass:"col col-md-10"},[e("router-view")],1)])])};s._withStripped=!0;var i=a(0),n=Object(i.a)({name:"manage-view"},s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col col-sm-12"},[e("h1",{staticClass:"mt-2"},[this._v("Pages")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-2"},[e("h4",{staticClass:"mt-0"},[this._v("Random site 1")])]),this._v(" "),e("div",{staticClass:"row mb-2"},[e("h4",{staticClass:"mt-0"},[this._v("Random site 2")])]),this._v(" "),e("div",{staticClass:"row mb-2"},[e("h4",{staticClass:"mt-0"},[this._v("Random site 3")])])])}],!1,null,null,null);n.options.__file="assets\\js\\components\\management\\Pages.vue";e.default=n.exports},20:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("b-navbar",{attrs:{toggleable:"",type:"light",variant:"light"}},[e("div",{staticClass:"container"},[e("b-link",{staticClass:"navbar-brand",attrs:{href:"/"}},[e("div",{staticClass:"d-flex align-items-center branding"},[e("img",{staticClass:"logo pr-1 mr-2",attrs:{src:"/static/img/db_logo.svg"}}),this._v(" "),e("span",{staticClass:"title font-weight-bold"},[this._v("\n          FEATURES\n        ")])])]),this._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-nav",{attrs:{"is-nav-bar":""}},[e("b-nav-item",[this._v("Pages")]),this._v(" "),e("b-nav-item",[this._v("Team")])],1),this._v(" "),e("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[e("b-nav-item",[e("icon",{attrs:{name:"search"}})],1)],1)],1)],1)])};s._withStripped=!0;var i=a(0),n=!1;var r=function(t){n||a(28)},l=Object(i.a)({name:"navbar"},s,[],!1,r,"data-v-3ad8dc7e",null);l.options.__file="assets\\js\\components\\Navbar.vue";var o=l.exports,c=function(){var t=this.$createElement;this._self._c;return this._m(0)};c._withStripped=!0;var u=!1;var d=function(t){u||a(26)},p=Object(i.a)({name:"page-foot"},c,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col col-md-auto"},[a("span",{staticClass:"text-muted"},[t._v("© 2017 The Daily Bruin")])])]),t._v(" "),a("div",{staticClass:"row justify-content-md-center mb-2"},[a("div",{staticClass:"col col-md-auto"},[a("span",{staticClass:"text-muted"},[t._v("Handcrafted with love in 118 Kerchkoff Hall")])])]),t._v(" "),a("div",{staticClass:"row justify-content-md-center text-center"},[a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("People")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("Recruiting")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("DailyBruin.com")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"#"}},[t._v("Bruinwalk")])]),t._v(" "),a("div",{staticClass:"col"},[a("a",{attrs:{href:"/accounts/login"}},[t._v("Manage")])])])])])}],!1,d,null,null);p.options.__file="assets\\js\\components\\Footer.vue";var f={props:["type"],components:{Navbar:o,PageFoot:p.exports,Profile:a(11).default},name:"mainModule"},v=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("Navbar"),this._v(" "),e("router-view"),this._v(" "),e("PageFoot")],1)};v._withStripped=!0;var m=Object(i.a)(f,v,[],!1,null,null,null);m.options.__file="assets\\js\\MainModule.vue";e.default=m.exports},25:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\nbody {\n  min-height: 100vh;\n  position: relative;\n  padding-bottom: 100px;\n}\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100px;\n}\n",""])},26:function(t,e,a){var s=a(25);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(7).default)("5bbed97b",s,!1,{})},27:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.branding .logo[data-v-3ad8dc7e] {\n  width: 200px;\n  border-right: 1px solid #333;\n}\n.branding .title[data-v-3ad8dc7e] {\n  font-size: 0.8em;\n}\n",""])},28:function(t,e,a){var s=a(27);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(7).default)("5651ce84",s,!1,{})},5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.axios=e.utils=void 0;var s=n(a(46)),i=n(a(40));function n(t){return t&&t.__esModule?t:{default:t}}s.default.defaults.xsrfHeaderName="X-CSRFToken",s.default.defaults.xsrfCookieName="csrftoken";var r={getCSRFToken:function(){return i.default.get("csrftoken")},asFormData:function(t){Object.keys(t).reduce(function(e,a){return e.append(a,t[a]),e},new FormData)}};e.utils=r,e.axios=s.default},53:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mt-2"},[this._m(0),this._v(" "),e("div",{staticClass:"row mb-3"},[e("div",{staticClass:"col col-md-2"},[e("b-list-group",[e("b-list-group-item",{attrs:{to:"/manage/packages"}},[this._v("Packages")]),this._v(" "),e("b-list-group-item",{attrs:{to:"/manage/pages"}},[this._v("Static Sites")])],1)],1),this._v(" "),e("div",{staticClass:"col col-md-10"},[e("router-view")],1)])])};s._withStripped=!0;var i=a(0),n=Object(i.a)({name:"manage-view"},s,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col col-sm-12"},[e("h1",{staticClass:"mt-2"},[this._v("Sites Manager")])])])}],!1,null,null,null);n.options.__file="assets\\js\\components\\Manage.vue";e.default=n.exports},54:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this.$createElement;return(this._self._c||t)("h2",[this._v("Mgmt Display view!")])};s._withStripped=!0;var i=a(0),n=Object(i.a)({name:"manage-display-view"},s,[],!1,null,null,null);n.options.__file="assets\\js\\components\\management\\ManageDisplay.vue";e.default=n.exports},55:function(t,e,a){"use strict";a.r(e);var s=a(29),i={components:{FileUpload:a.n(s).a},computed:{readyForUpload:function(){return 0!==this.files.length&&0===this.files.filter(t=>"NOT READY"===t.s3_state).length}},methods:{inputFile:function(t,e){t&&!e&&(console.log("adding a new file, getting stuff"),console.log(t.file),this.getSignedRequestAndUpload(t)),t&&e&&(console.log("update event!!!"),console.log(t)),t&&e&&!t.active&&e.active&&(console.log("response",t.response),t.xhr&&console.log("status",t.xhr.status))},uploadFile(t,e,a){console.log("uploadinggg");const s=new XMLHttpRequest;s.open("POST",e.url),s.setRequestHeader("x-amz-acl","public-read");const i=new FormData;for(let t in e.data.fields)i.append(t,e.data.fields[t]);i.append("file",t),s.onreadystatechange=(()=>{4===s.readyState&&(200===s.status||204===s.status?(document.getElementById("preview").src=a,document.getElementById("avatar-url").value=a):alert("Could not upload file."))}),s.send(i)},getSignedRequestAndUpload(t){const e=t.file,a=new XMLHttpRequest;this.$set(t,"s3_state","NOT READY"),a.open("GET",`/api/sign-s3?file_name=${e.name}&file_type=${e.type}`),a.onreadystatechange=(()=>{if(4===a.readyState)if(200===a.status){const e=JSON.parse(a.responseText),s=e.data;this.$refs.upload.update(t,{s3_state:"READY",s3_response:e,postAction:s.url,data:s.fields,active:!0})}else alert("Could not get signed URL.")}),a.send()},initUpload(){console.log("Sfdsdfsdfdfsdf");const t=document.getElementById("file-input").files[0];if(!t)return alert("No file selected.");getSignedRequest(t)}},data:()=>({files:[],max:100,progress:33})},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"example-drag"},[a("div",{staticClass:"upload"},[t.files.length?a("ul",t._l(t.files,function(e,s){return a("li",{key:e.id},[a("span",[t._v(t._s(e.name))]),t._v(" -\n            "),a("span",[t._v(t._s(e.size))]),t._v(" -\n            "),a("span",[t._v(t._s(e.s3_state))]),t._v(" "),e.error?a("span",[t._v(t._s(e.error))]):e.success?a("span",[t._v("success")]):e.active?a("span",[t._v("active")]):e.active?a("span",[t._v("active")]):a("span")])})):a("ul",[t._m(0)])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$refs.upload&&t.$refs.upload.dropActive,expression:"$refs.upload && $refs.upload.dropActive"}],staticClass:"drop-active"},[a("h3",[t._v("Drop files to upload")])]),t._v(" "),a("div",{staticClass:"example-btn"},[a("file-upload",{ref:"upload",staticClass:"btn btn-primary",attrs:{multiple:!0,drop:!0,"drop-directory":!0},on:{"input-file":t.inputFile},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[a("i",{staticClass:"fa fa-plus"}),t._v("\n        Select files\n      ")]),t._v(" "),!t.readyForUpload||t.$refs.upload&&t.$refs.upload.active?t._e():a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$refs.upload.active}}},[a("i",{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}}),t._v("\n        Start Upload\n      ")])],1),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"progresss-bar"},[t._m(1),t._v(" "),a("b-progress",{attrs:{value:t.progress,variant:"info",max:t.max,"show-progress":"",animated:""}})],1)])])])])};n._withStripped=!0;var r=a(0),l=!1;var o=function(t){l||a(93)},c=Object(r.a)(i,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"7"}},[e("div",{staticClass:"text-center p-5"},[e("h4",[this._v("Drop files anywhere to upload or")]),this._v(" "),e("label",{staticClass:"btn btn-lg btn-primary",attrs:{for:"file"}},[this._v("Select Files")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("Progress:"),e("br")])}],!1,o,null,null);c.options.__file="assets\\js\\components\\management\\NewSite.vue";e.default=c.exports},56:function(t,e,a){"use strict";a.r(e);var s=a(5),i={name:"manage-display-view",computed:{hasError:function(){for(let t in this.errs)return null!=this.errs[t]&&console.log("err"),!0;return console.log("no err"),!1},tabIndex:{get:function(){this.packageSets.findIndex(t=>t.slug==this.packageSet)},set:function(t){t&&(this.packageSetDetails=this.packageSets[t],this.packageSet=this.packageSets[t].slug,console.log(this.$refs.packagesTable[t].refresh),this.refreshTable())}}},beforeMount:function(){this.$route.params.pset&&(this.packageSet=this.$route.params.pset),s.axios.get("/api/packages/").then(t=>{this.packageSets=t.data.data,this.packageSet||(this.packageSetDetails=this.packageSets[0],this.packageSet=this.packageSets[0].slug)})},data:()=>({packageSet:"",packageSetDetails:{},packageSets:[],tableFields:["slug","description","publish_date","last_fetched_date",{key:"gdrive_url",label:"GDrive Link",formatter:t=>'<a target="_blank" href="'+t+'">Go</a>'}],form:{slug:"",description:"",drive_folder_url:"",publish_date:""},errs:{slug:null,description:null,drive_folder_url:null,publish_date:null},submitted:!1,currentPage:1,totalRows:0}),methods:{refreshTable:function(){let t=this.packageSets.findIndex(t=>t.slug==this.packageSet);this.$refs.packagesTable[t].refresh()},packageData:function(t){return s.axios.get("/api/packages/"+this.packageSet).then(t=>{const e=t.data;return this.currentPage=e.meta.current_page,this.totalRows=e.meta.total,console.log(e),e.data})},submitForm:function(t){console.log(this.form),this.submitted=!0;s.axios.post("/api/packages/"+this.packageSet,this.form).then(t=>{console.log(t),this.form={slug:"",description:"",drive_folder_url:"",publish_date:""},this.errs={slug:null,description:null,drive_folder_url:null,publish_date:null},this.$refs.createModal.hide(),this.refreshTable()}).catch(t=>{console.log(t.response),this.errs=t.response.data,this.submitted=!1})}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("b-tabs",{model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.packageSets,function(e){return a("b-tab",{key:e.slug,attrs:{title:e.slug}},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col"},[a("b-button-group",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.create-modal",modifiers:{"create-modal":!0}}],attrs:{variant:"primary"}},[a("icon",{staticClass:"align-middle",attrs:{name:"plus"}}),t._v(" "),a("span",{staticClass:"align-middle ml-1"},[t._v("New Package")])],1),t._v(" "),a("b-button",{on:{click:t.refreshTable}},[a("icon",{staticClass:"align-middle",attrs:{name:"refresh"}})],1),t._v(" "),a("b-button",{attrs:{target:"_blank",href:e.gdrive_url,variant:"success"}},[a("icon",{staticClass:"align-middle",attrs:{name:"hdd-o"}})],1)],1)],1)]),t._v(" "),a("b-table",{ref:"packagesTable",refInFor:!0,staticClass:"mt-3",attrs:{responsive:"",hover:"",items:t.packageData,fields:t.tableFields},scopedSlots:t._u([{key:"slug",fn:function(s){return[a("b-link",{attrs:{to:"/manage/packages/"+e.slug+"/"+s.value}},[t._v("\n            "+t._s(s.value)+"\n          ")])]}}])}),t._v(" "),a("b-pagination",{attrs:{"total-rows":t.totalRows,"per-page":30},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)})),t._v(" "),a("b-modal",{ref:"createModal",attrs:{id:"create-modal",size:"lg",title:"New Package"}},[a("b-form",{ref:"packageForm",on:{submit:t.submitForm}},[a("div",{staticClass:"container",attrs:{fluid:""}},[a("b-form-group",{attrs:{id:"slug-label",label:"Package Slug:","label-for":"slug-input",description:"The article slug (e.g. sports.mbb.oregon)"}},[a("b-form-input",{attrs:{id:"slug-input",type:"text",state:null==t.errs.slug&&null,required:"",placeholder:"Enter package slug"},model:{value:t.form.slug,callback:function(e){t.$set(t.form,"slug",e)},expression:"form.slug"}}),t._v(" "),t.errs.slug?a("b-form-invalid-feedback",[t._v("\n              "+t._s(t.errs.slug[0])+"\n            ")]):t._e()],1),t._v(" "),a("b-form-group",{attrs:{id:"desc-label",label:"Package Description:","label-for":"desc-input",description:"A brief description of the package."}},[a("b-form-input",{attrs:{id:"desc-input",type:"text",state:null==t.errs.description&&null,required:"",placeholder:"Enter package description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),t.errs.description?a("b-form-invalid-feedback",[t._v("\n              "+t._s(t.errs.description[0])+"\n            ")]):t._e()],1),t._v(" "),a("b-form-group",{attrs:{id:"url-label",label:"Package Google Drive URL:","label-for":"url-input",description:"(Optional) Link to the Google drive folder (inside the Repo folder) if it has already been created. We'll create the folder for you if this is left blank."}},[a("b-form-input",{attrs:{id:"url-input",type:"url",state:null==t.errs.drive_folder_url&&null,placeholder:"Enter Google Drive URL"},model:{value:t.form.drive_folder_url,callback:function(e){t.$set(t.form,"drive_folder_url",e)},expression:"form.drive_folder_url"}}),t._v(" "),t.errs.drive_folder_url?a("b-form-invalid-feedback",[t._v("\n              "+t._s(t.errs.drive_folder_url[0])+"\n            ")]):t._e()],1),t._v(" "),a("b-form-group",{attrs:{id:"date-label",label:"Publish Date:","label-for":"date-input",description:"The package publishing date."}},[a("b-form-input",{attrs:{id:"date-input",type:"date",state:null==t.errs.publish_date&&null},model:{value:t.form.publish_date,callback:function(e){t.$set(t.form,"publish_date",e)},expression:"form.publish_date"}}),t._v(" "),t.errs.publish_date?a("b-form-invalid-feedback",[t._v("\n              "+t._s(t.errs.publish_date[0])+"\n            ")]):t._e()],1)],1)]),t._v(" "),a("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[t.submitted?a("h4",[t._v("\n        Creating...\n      ")]):a("b-btn",{attrs:{variant:"primary"},on:{click:t.submitForm}},[t._v("\n        Submit\n      ")])],1)],1)],1)};n._withStripped=!0;var r=a(0),l=Object(r.a)(i,n,[],!1,null,null,null);l.options.__file="assets\\js\\components\\management\\Packages.vue";e.default=l.exports},57:function(t,e,a){"use strict";a.r(e);var s=a(5),i=(a(15),a(52)),n=a.n(i),r=a(30),l=a.n(r),o={name:"package-view",computed:{isReallyFetching:function(){return this.isFetching||this.packageData.processing},fmMetaPretty:function(){return this.packageData.cached_article_preview?JSON.stringify(l()(this.packageData.cached_article_preview).data,null,2):{}},compiledMd:function(){return this.packageData.cached_article_preview?n()(l()(this.packageData.cached_article_preview).content,{sanitize:!0}):"Package is not fetched."}},data:()=>({packageData:{},isFetching:!1,isLoading:!0}),beforeMount:function(){s.axios.get("/api/packages/"+this.$route.params.pset+"/"+this.$route.params.slug+"/").then(t=>{this.packageData=t.data,this.isLoading=!1,console.log(this.packageData)})},methods:{fetchGdrive:function(){this.isFetching=!0,s.axios.post("/api/packages/"+this.$route.params.pset+"/"+this.$route.params.slug+"/fetch").then(t=>{console.log("Done fetching........"),this.isFetching=!1,console.log(t.data),this.packageData=t.data})}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h2",[t._v("\n      "+t._s(t.packageData.slug||t.$route.params.slug)+"\n      "),a("b-button",{staticClass:"ml-2",attrs:{size:"sm",variant:"secondary",disabled:t.isReallyFetching},on:{click:t.fetchGdrive}},[t.isReallyFetching?a("span",[t._v("\n          Fetching...\n        ")]):a("span",[t._v("\n          Update from GDrive\n        ")])])],1)])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"row"},[a("h5",{staticClass:"text-muted"},[t._v("\n      "+t._s(t.packageData.description)+" | "),a("a",{attrs:{href:t.packageData?t.packageData.drive_folder_url:"#",disabled:t.isLoading}},[a("small",[t._v("Link")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[t.isLoading?a("h3",[t._v("\n        Loading...\n      ")]):a("div",[a("h5",[t._v("Metadata")]),t._v(" "),a("pre",[a("code",[t._v(t._s(t.fmMetaPretty))])]),t._v(" "),a("h5",[t._v("Preview")]),t._v(" "),a("div",{staticClass:"preview",domProps:{innerHTML:t._s(t.compiledMd)}})])]),t._v(" "),t.isLoading?t._e():a("div",{staticClass:"col-md-4"},[a("h5",[t._v("Images")]),t._v(" "),t._l(t.packageData.images.s3,function(e,s){return a("div",[a("b-card",{staticClass:"mb-3",attrs:{"img-src":e.url,"img-alt":e.key,"img-top":""}},[a("p",{staticClass:"card-text"},[a("samp",{staticClass:"small"},[t._v(t._s(e.url))])])])],1)})],2)])])};c._withStripped=!0;var u=a(0),d=!1;var p=function(t){d||a(91)},f=Object(u.a)(o,c,[],!1,p,null,null);f.options.__file="assets\\js\\components\\management\\PackageView.vue";e.default=f.exports},89:function(t,e){},90:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.preview img {\n  max-width: 100%;\n}\ncode {\n  max-width: 100%;\n}\n",""])},91:function(t,e,a){var s=a(90);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(7).default)("4befe46d",s,!1,{})},92:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"\n.example-drag label.btn {\n  margin-bottom: 0;\n  margin-right: 1rem;\n}\n.example-drag .drop-active {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  position: fixed;\n  z-index: 9999;\n  opacity: .6;\n  text-align: center;\n  background: #000;\n}\n.example-drag .drop-active h3 {\n  margin: -.5em 0 0;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  font-size: 40px;\n  color: #fff;\n  padding: 0;\n}\n",""])},93:function(t,e,a){var s=a(92);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a(7).default)("6379b057",s,!1,{})},94:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=p(a(15)),i=p(a(47)),n=p(a(11)),r=p(a(53)),l=p(a(54)),o=p(a(55)),c=p(a(56)),u=p(a(57)),d=p(a(132));function p(t){return t&&t.__esModule?t:{default:t}}s.default.use(i.default);var f=[{path:"/accounts/profile",component:n.default},{path:"/manage",component:r.default,children:[{path:"",component:l.default},{path:"pages",component:d.default},{path:"pages/new",component:o.default},{path:"packages",component:c.default},{path:"packages/:pset",component:c.default},{path:"packages/:pset/:slug",component:u.default}]}];e.default=new i.default({mode:"history",routes:f})},96:function(t,e,a){"use strict";var s=c(a(15)),i=c(a(31));a(50),a(49),a(48),a(95);var n=c(a(4)),r=c(a(29)),l=c(a(20)),o=c(a(94));function c(t){return t&&t.__esModule?t:{default:t}}a(39),a(38),s.default.use(i.default),s.default.component("file-upload",r.default),s.default.component("icon",n.default);new s.default({router:o.default,el:"#app",components:{MainModule:l.default},template:"<MainModule />"})}});