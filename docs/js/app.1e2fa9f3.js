(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02d7":function(t,e,n){},"0583":function(t,e,n){},1454:function(t,e,n){},"1b23":function(t,e,n){"use strict";var a=n("5631"),o=n.n(a);o.a},"1ed7":function(t,e,n){"use strict";var a=n("02d7"),o=n.n(a);o.a},2642:function(t,e,n){},"3da7":function(t,e,n){},4023:function(t,e,n){},4657:function(t,e,n){n("d4ca")},5631:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[n("v-list-item",{key:e.text,attrs:{to:e.path,link:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(" "+t._s(e.text)+" ")])],1)],1)]}))],2)],1),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("v-toolbar-title",[t._v("IMFINE SD")])],1),n("v-spacer"),n("v-switch",{staticClass:"switch",attrs:{inset:"",label:"Dark Mode"},on:{click:t.changeMode},model:{value:t.darkStatus,callback:function(e){t.darkStatus=e},expression:"darkStatus"}})],1),n("v-main",[n("router-view")],1)],1)},i=[],s={props:{source:String},methods:{changeMode:function(){console.log("DD = ",this.darkStatus),this.$vuetify.theme.dark=this.darkStatus}},data:function(){return{darkStatus:!1,drawer:null,items:[{icon:"mdi-home",text:"Main",path:"/"},{icon:"mdi-archive",text:"Archives",path:"/archives"},{icon:"mdi-update",text:"Clock",path:"/clock"},{icon:"mdi-image",text:"Image",path:"/image"},{icon:"mdi-file",text:"File",path:"/file"},{icon:"mdi-message",text:"Bot",path:"/bot"},{icon:"mdi-android",text:"Android",path:"/android"},{icon:"mdi-information",text:"About",path:"/about"}]}}},c=s,r=(n("fb19"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),f=n("40dc"),p=n("5bc1"),v=n("132d"),m=n("8860"),h=n("da13"),b=n("1800"),g=n("5d23"),_=n("f6c4"),k=n("f774"),y=n("2fa4"),x=n("b73d"),w=n("2a7f"),C=Object(r["a"])(c,o,i,!1,null,"f0be8fd8",null),E=C.exports;u()(C,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:p["a"],VIcon:v["a"],VList:m["a"],VListItem:h["a"],VListItemAction:b["a"],VListItemContent:g["a"],VListItemTitle:g["b"],VMain:_["a"],VNavigationDrawer:k["a"],VSpacer:y["a"],VSwitch:x["a"],VToolbarTitle:w["a"]});var S=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("imfine-card",{attrs:{id:"icon"},on:{mouseover:!1}})],1)},I=[],O=(n("a9e3"),n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[n("v-card-text",[n("p",{staticClass:"display-1 "},[t._v(" Homes ")])])],1)],1)],1)}),j=[],A={},V=A,L=(n("1b23"),n("b0af")),M=n("99d9"),N=n("adda"),F=Object(r["a"])(V,O,j,!1,null,"2aaccf5c",null),D=F.exports;u()(F,{VCard:L["a"],VCardText:M["a"],VImg:N["a"]});var P={components:{ImfineCard:D},mounted:function(){var t=!1,e=window.innerWidth/2,n=window.innerHeight/2,a=document.getElementById("icon");function o(){a.style.left=e-100+"px",a.style.top=n-100+"px"}window.addEventListener("mousedown",(function(o){var i=Number(a.style.top.replace("px","")),s=Number(a.style.left.replace("px","")),c=o.offsetX-s<=200&&o.offsetX-s>=0&&o.offsetY-i<=200&&o.offsetY-i>=0;c&&(e=o.offsetX,n=o.offsetY,t=!0)})),window.addEventListener("mousemove",(function(a){t&&(e=a.offsetX,n=a.offsetY,o())})),window.addEventListener("mouseup",(function(){t&&(t=!1,o(),e=0,n=0)})),o()}},$=P,B=(n("e168"),Object(r["a"])($,T,I,!1,null,"42836278",null)),R=B.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Project")]),n("th",{staticClass:"text-left"},[t._v("Platform")]),n("th",{staticClass:"text-left"},[t._v("Version")]),n("th",{staticClass:"text-left"},[t._v("File")])])]),n("tbody",t._l(t.files,(function(e){return n("tr",{key:e.name},[n("td",[t._v(t._s(e.project))]),n("td",[t._v(t._s(e.platform))]),n("td",[t._v(t._s(e.version))]),n("td",[e.version>0?n("a",{attrs:{href:e.file}},[t._v("FILE")]):t._e()])])})),0)]},proxy:!0}])})],1)},J=[],U={data:function(){return{files:[{project:"IMDevice",platform:"Mobile",version:2081,file:"https://github.com/imfine-sd/SD_ARCHIVES/raw/master/IMDevice/imdevice.apk"},{project:"IMDevice",platform:"Server",version:0,file:""},{project:"Facade",platform:"Mobile",version:0,file:""},{project:"Facade",platform:"Setting",version:0,file:""},{project:"Facade",platform:"Server",version:0,file:""}]}}},q=U,G=(n("afbb"),n("1f4f")),X=Object(r["a"])(q,Y,J,!1,null,"77ced3e2",null),H=X.exports;u()(X,{VSimpleTable:G["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"time_item",attrs:{id:"clock_bg"}},[n("div",[n("p",{staticClass:"time hour",style:{fontSize:.7*t.font_scale+"vh"}},[t._v(" "+t._s(t.date_info)+" ")]),n("p",{staticClass:"time min",style:{fontSize:.7*t.font_scale+"vh"}},[t._v(" "+t._s(t.time_info)+" ")]),n("p",{staticClass:"time sec",style:{fontSize:t.font_scale+"vh"}},[t._v(" "+t._s(t.sec_info)+" ")])])]),n("div",{staticClass:"btn add",on:{click:function(e){return t.setFontScaleValue(1)}}},[n("v-btn",{attrs:{color:"primary",fab:"","x-large":"",dark:""}},[n("v-icon",[t._v("mdi-plus")])],1)],1),n("div",{staticClass:"btn remove",on:{click:function(e){return t.setFontScaleValue(-1)}}},[n("v-btn",{attrs:{color:"primary",fab:"","x-large":"",dark:""}},[n("v-icon",[t._v("mdi-minus")])],1)],1)])},z=[],W=(n("99af"),null),Q=["#EC7063","#D2B4DE","#85C1E9","#F9E79F","#73C6B6","#BFC9CA"],Z={data:function(){return{date_info:"",time_info:"",sec_info:"",timer:"",font_scale:20}},created:function(){var t=this,e=-1,n=0;console.log(Q,e),this.$nextTick((function(){W=document.getElementById("clock_bg")})),clearInterval(this.timer),this.timer=setInterval((function(){var a=new Date,o=a.getFullYear(),i=a.getMonth()+1,s=a.getDate();i<=9&&(i="0"+i),s<=9&&(s="0"+s),t.date_info="".concat(o,"/").concat(i,"/").concat(s);var c=a.getHours(),r=a.getMinutes(),l=a.getSeconds();c<=9&&(c="0"+c),r<=9&&(r="0"+r),l<=9&&(l="0"+l),t.time_info="".concat(c,":").concat(r,":").concat(l);var u=a.getMilliseconds();u<=9?u="00"+u:u<=99&&(u="0"+u),t.sec_info="".concat(l,".").concat(u),e!=l&&(-1==e?(e=l,n=0,console.log("II",e)):l%5==0&&(console.log(l,e),e=l,n==Q.length-1?n=0:n++,console.log(n),t.setColor(e)))}),1)},methods:{setFontScaleValue:function(t){this.font_scale+=t,console.log(t)},setColor:function(t){t%30==0?W.style.backgroundColor=Q[0]:t%30==5?W.style.backgroundColor=Q[1]:t%30==10?W.style.backgroundColor=Q[2]:t%30==15?W.style.backgroundColor=Q[3]:t%30==20?W.style.backgroundColor=Q[4]:t%30==25&&(W.style.backgroundColor=Q[5])}}},tt=Z,et=(n("1ed7"),n("8336")),nt=Object(r["a"])(tt,K,z,!1,null,"c0b7fd92",null),at=nt.exports;u()(nt,{VBtn:et["a"],VIcon:v["a"]});var ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"logo"},[a("img",{attrs:{id:"icon",src:n("5e65")}})]),a("div",{staticClass:"information"},[a("b",[t._v("Technical Inquiry")]),a("div",[t._v("jongun.won@im-fine.co.kr")]),a("div",[t._v("suyoung.kim@im-fine.co.kr")]),a("br"),a("b",[t._v("Project Inquiry")]),a("div",[t._v("pilsun.yang@im-fine.co.kr")])]),a("canvas",{attrs:{id:"canvas"}})])}],st={data:function(){return{mouse_on:!1}},mounted:function(){var t=!1,e=0,n=0,a=document.getElementById("canvas"),o=a.getContext("2d");function i(t,e,n,a,o){t.beginPath(),t.strokeStyle="red",t.lineWidth=1,t.moveTo(e,n),t.lineTo(a,o),t.stroke(),t.closePath()}a.setAttribute("width",window.innerWidth),a.setAttribute("height",window.innerHeight-100),a.style.width=window.innerWidth,a.style.height=window.innerHeight-100,a.addEventListener("mousedown",(function(a){e=a.offsetX,n=a.offsetY,t=!0})),a.addEventListener("mousemove",(function(a){!0===t&&(i(o,e,n,a.offsetX,a.offsetY),e=a.offsetX,n=a.offsetY)})),window.addEventListener("mouseup",(function(a){!0===t&&(i(o,e,n,a.offsetX,a.offsetY),e=0,n=0,t=!1)})),window.addEventListener("mouseout",(function(a){!0===t&&(i(o,e,n,a.offsetX,a.offsetY),e=0,n=0,t=!1)}))},methods:{onMouseDown:function(){console.log("onMouseDown"),this.mouse_on=!0},onMouseMove:function(){this.mouse_on&&console.log("onMouseMove")},onMouseUp:function(){console.log("onMouseUp"),this.mouse_on=!1}}},ct=st,rt=(n("abfb"),Object(r["a"])(ct,ot,it,!1,null,"f60077a0",null)),lt=rt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Not Found ")])},dt=[],ft=(n("c975"),n("1276"),{mounted:function(){if(-1!=window.location.href.indexOf("access_token")){var t=window.location.href.split("/")[4],e=t.split("&")[0].replace("access_token=","");this.$store.commit("SET_TOKEN",e),this.$router.push("/android")}}}),pt=ft,vt=Object(r["a"])(pt,ut,dt,!1,null,null,null),mt=vt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-list"},t._l(100,(function(t){return n("ImageItem",{key:t,attrs:{"img-src":"https://picsum.photos/id/"+t+"/600/600"}})})),1)},bt=[],gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img-item"},[n("div",{directives:[{name:"img-lazy-loading",rawName:"v-img-lazy-loading",value:t.imgSrc,expression:"imgSrc"}],staticClass:"conatiner"})])},_t=[],kt={name:"ImageItem",props:{imgSrc:String}},yt=kt,xt=(n("5bd2"),Object(r["a"])(yt,gt,_t,!1,null,"3e30a523",null)),wt=xt.exports,Ct={name:"ImageList",components:{ImageItem:wt}},Et=Ct,St=Object(r["a"])(Et,ht,bt,!1,null,"0ae99979",null),Tt=St.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"formDiv"},[n("h2",[t._v("Donwload")]),n("v-text-field",{attrs:{label:"File Name"},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),n("v-textarea",{attrs:{counter:"",label:"File Contents"},model:{value:t.fileContents,callback:function(e){t.fileContents=e},expression:"fileContents"}}),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"},on:{click:t.downloadFile}},[t._v("DOWNLOAD")]),n("v-file-input",{attrs:{accept:"file/*",type:"file",label:"File input"},on:{change:t.loadTextFromFile}})],1)])},Ot=[],jt=(n("b0c0"),{data:function(){return{fileName:"test.txt",fileContents:""}},methods:{downloadFile:function(){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(this.fileContents)),t.setAttribute("download",this.fileName),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},loadTextFromFile:function(t){var e=this,n=t,a=new FileReader;a.onload=function(t){e.fileName=n.name,e.fileContents=t.target.result},a.readAsText(n)}}}),At=jt,Vt=(n("5a9a"),n("23a7")),Lt=n("8654"),Mt=n("a844"),Nt=Object(r["a"])(At,It,Ot,!1,null,"414e32b1",null),Ft=Nt.exports;u()(Nt,{VBtn:et["a"],VFileInput:Vt["a"],VTextField:Lt["a"],VTextarea:Mt["a"]});var Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top_line"}),n("div",{staticClass:"contents_line"})])}],$t={},Bt=$t,Rt=(n("f81c"),Object(r["a"])(Bt,Dt,Pt,!1,null,"0df9e699",null)),Yt=Rt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-10"},[n("v-snackbar",{attrs:{timeout:t.timeout,color:"red",vertical:""},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",a,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")]),n("v-text-field",{attrs:{label:"API_KEY"},model:{value:t.api_key,callback:function(e){t.api_key=e},expression:"api_key"}}),n("v-btn",{attrs:{outlined:"",color:"indigo"},on:{click:t.getList}},[t._v("GET_LIST")]),[n("v-simple-table",{attrs:{height:"300px"},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("User")]),n("th",{staticClass:"text-left"},[t._v("Chat ID")]),n("th",{staticClass:"text-left"},[t._v("Message")])])]),n("tbody",t._l(t.chat_list,(function(e){return n("tr",{key:e.index},[n("td",[t._v(t._s(e.message.chat.first_name))]),n("td",[t._v(t._s(e.message.chat.id))]),n("td",[t._v(t._s(e.message.text))])])})),0)]},proxy:!0}])})],n("v-text-field",{attrs:{label:"Chat ID"},model:{value:t.chat_id,callback:function(e){t.chat_id=e},expression:"chat_id"}}),n("v-text-field",{attrs:{label:"Message"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),n("v-btn",{attrs:{outlined:"",color:"indigo"},on:{click:t.sendMessage}},[t._v("SEND_MESSAGE")])],2)},Ut=[],qt=n("bc3a"),Gt=n.n(qt),Xt={data:function(){return{chat_list:[],api_key:"",chat_id:"",message:"",snackbar:!1,text:"API KEY를 확인해주세요.",timeout:2e3}},methods:{getList:function(){var t=this;console.log("GET_LIST"),console.log(this.api_key,this.api_key.length),0!==this.api_key.length?Gt.a.get("https://api.telegram.org/bot".concat(this.api_key,"/getUpdates")).then((function(e){200==e.status&&(t.chat_list=e.data.result,console.log(e.data.result))})).catch((function(e){console.log(e),t.snackbar=!0})):this.snackbar=!0},sendMessage:function(){var t=this;console.log(this.chat_id,this.message),Gt.a.get("https://api.telegram.org/bot".concat(this.api_key,"/sendMessage?chat_id=").concat(this.chat_id,"&text=").concat(this.message)).then((function(e){200==e.status&&(t.chat_id="",t.message="")})).catch((function(e){console.log(e),t.snackbar=!0}))}}},Ht=Xt,Kt=n("2db4"),zt=Object(r["a"])(Ht,Jt,Ut,!1,null,null,null),Wt=zt.exports;u()(zt,{VBtn:et["a"],VSimpleTable:G["a"],VSnackbar:Kt["a"],VTextField:Lt["a"]});var Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ma-5"},[this.getToken?n("div",[n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.getList}},[t._v(" GET LIST ")]),n("v-btn",{staticClass:"ml-4",attrs:{outlined:"",color:"primary"},on:{click:t.register}},[t._v(" REGISTER ")]),n("v-btn",{staticClass:"ml-4",attrs:{outlined:"",color:"primary"},on:{click:t.unregister}},[t._v(" UNREGISTER ")]),n("v-data-table",{staticClass:"mt-12 mb-5 elevation-1",attrs:{headers:t.headers,items:t.device_list,"item-key":"name","show-select":""},model:{value:t.selected_list,callback:function(e){t.selected_list=e},expression:"selected_list"}}),n("v-row",{staticClass:"ml-2 mb-4"},[n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.lock}},[t._v(" LOCK ")]),n("v-btn",{staticClass:"ml-4",attrs:{outlined:"",color:"primary"},on:{click:t.reboot}},[t._v(" REBOOT ")])],1),n("v-textarea",{ref:"policy_area",staticClass:"mt-15",attrs:{outlined:"",error:!t.canJsonParse,name:"input-7-4",label:"Device Policy"},on:{keyup:t.checkPolicy},model:{value:t.policy_json,callback:function(e){t.policy_json=e},expression:"policy_json"}}),n("v-btn",{staticClass:"ml-2",attrs:{outlined:"",color:"primary"},on:{click:t.customAction}},[t._v(" CHANGE POLICY TO ALL ")])],1):n("div",[n("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:t.googleLogin}},[t._v(" GENERATE TOKEN ")])],1)])},Zt=[],te=(n("d81d"),n("5530")),ee=n("2f62"),ne="36984831533-ibk1pvj1uklnocst7udqni6i3kc1g51p.apps.googleusercontent.com",ae="LC010siktc",oe="https://androidmanagement.googleapis.com/v1",ie="policy1";function se(){var t="https://accounts.google.com/o/oauth2/v2/auth",e=document.createElement("form");e.setAttribute("method","GET"),e.setAttribute("action",t),e.setAttribute("target","구글 로그인");var n={client_id:ne,redirect_uri:window.location.href.replace("#/android",""),response_type:"token",scope:"https://www.googleapis.com/auth/androidmanagement",include_granted_scopes:"true"};for(var a in n){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name",a),o.setAttribute("value",n[a]),e.appendChild(o)}document.body.appendChild(e),e.submit()}function ce(t){Gt.a.defaults.headers.common["Authorization"]="Bearer ".concat(t)}function re(t,e,n,a){return ce(t),Gt()({method:e,url:n,data:a})}function le(t){return re(t,"post","".concat(oe,"/enterprises/").concat(ae,"/enrollmentTokens"),{policyName:ie})}function ue(t,e){return re(t,"delete","".concat(oe,"/").concat(e))}function de(t){return re(t,"get","".concat(oe,"/enterprises/").concat(ae,"/devices"))}function fe(t,e){return re(t,"post","".concat(oe,"/").concat(e,":issueCommand"),{type:"LOCK"})}function pe(t,e){return re(t,"post","".concat(oe,"/").concat(e,":issueCommand"),{type:"REBOOT"})}function ve(t,e){return re(t,"patch","".concat(oe,"/enterprises/").concat(ae,"/policies/").concat(ie),JSON.parse(e))}var me={data:function(){return{canJsonParse:!0,client_id:"",device_list:[],selected_list:[],headers:[{text:"Model",align:"start",value:"hardwareInfo.model"},{text:"State",value:"state"},{text:"API Level",value:"apiLevel"},{text:"Update Info",value:"softwareInfo.systemUpdateInfo.updateStatus"},{text:"Hardware",value:"hardwareInfo.hardware"},{text:"Serial",value:"hardwareInfo.hardware"},{text:"Enrollment Time",value:"hardwareInfo.serialNumber"},{text:"Name",value:"name"},{text:"Policy",value:"policyName"},{text:"Ownership",value:"ownership"}],policy_json:'{\n    "applications": [\n        {\n            "packageName": "com.google.samples.apps.iosched",\n            "installType": "FORCE_INSTALLED"\n        }\n    ],\n    "cameraDisabled": true,\n    "debuggingFeaturesAllowed": true\n}'}},filters:{pretty:function(t){return JSON.stringify(JSON.parse(t),null,2)}},computed:Object(te["a"])({},Object(ee["b"])(["getToken"])),mounted:function(){void 0!=this.getToken&&0!=this.getToken.length&&this.getList()},methods:{googleLogin:function(){se()},getList:function(){var t=this;de(this.getToken).then((function(e){t.device_list=e.data.devices})).catch((function(){t.$store.commit("SET_TOKEN",""),t.$router.push("/android")}))},register:function(){le(this.getToken).then((function(t){window.open("http://imfine-sd.github.io/#/qr/".concat(t.data.value))}))},unregister:function(){var t=this;this.selected_list.map((function(e){ue(t.getToken,e.name)}))},lock:function(){var t=this;this.selected_list.map((function(e){fe(t.getToken,e.name)}))},reboot:function(){var t=this;this.selected_list.map((function(e){pe(t.getToken,e.name)}))},customAction:function(){this.canJsonParse&&ve(this.getToken,this.policy_json)},checkPolicy:function(){try{JSON.parse(this.policy_json),this.canJsonParse=!0}catch(t){this.canJsonParse=!1}}}},he=me,be=n("8fea"),ge=n("0fd9"),_e=Object(r["a"])(he,Qt,Zt,!1,null,null,null),ke=_e.exports;u()(_e,{VBtn:et["a"],VDataTable:be["a"],VRow:ge["a"],VTextarea:Mt["a"]});var ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qr"},[n("qr-code",{attrs:{text:t.value}})],1)},xe=[],we={data:function(){return{value:""}},mounted:function(){this.value=this.$route.params.value}},Ce=we,Ee=(n("bb6c"),Object(r["a"])(Ce,ye,xe,!1,null,null,null)),Se=Ee.exports;a["a"].use(S["a"]);var Te=new S["a"]({routes:[{path:"/",component:R},{path:"/archives",component:H},{path:"/clock",component:at},{path:"/image",component:Tt},{path:"/file",component:Ft},{path:"/facade",component:Yt},{path:"/bot",component:Wt},{path:"/android",component:ke},{path:"/qr/:value",component:Se},{path:"/about",component:lt},{path:"*",component:mt}]}),Ie=n("f309");a["a"].use(Ie["a"]);var Oe=new Ie["a"]({});a["a"].use(ee["a"]);var je=new ee["a"].Store({state:{token:""},getters:{getToken:function(t){return t.token}},mutations:{SET_TOKEN:function(t,e){t.token=e}}}),Ae=n("7b94");n("4657"),a["a"].config.productionTip=!1,a["a"].component("qr-code",Ae["a"]),new a["a"]({render:function(t){return t(E)},vuetify:Oe,router:Te,store:je}).$mount("#app")},"5a9a":function(t,e,n){"use strict";var a=n("ab81"),o=n.n(a);o.a},"5bd2":function(t,e,n){"use strict";var a=n("3da7"),o=n.n(a);o.a},"5e65":function(t,e,n){t.exports=n.p+"img/sd.3b7d2ef7.png"},ab81:function(t,e,n){},abfb:function(t,e,n){"use strict";var a=n("2642"),o=n.n(a);o.a},afbb:function(t,e,n){"use strict";var a=n("4023"),o=n.n(a);o.a},baa6:function(t,e,n){},bb6c:function(t,e,n){"use strict";var a=n("ff85"),o=n.n(a);o.a},d4ca:function(t,e,n){"use strict";n.r(e);var a=n("b85c"),o=n("a026"),i={inserted:function(t,e){var n={root:document.querySelector(e.value.rootScrollEl),rootMargin:"500px 0px"},o=document.createElement("div");o.setAttribute("style","position: absolute; top: 0; left: 0; right: 0; bottom:0; background-color: #ccc;transition : opacity 1s ease-in-out;"),t.appendChild(o),t.observer=new IntersectionObserver((function(n){var i,s=Object(a["a"])(n);try{for(s.s();!(i=s.n()).done;){var c=i.value;if(c.intersectionRatio>0){t.observer.disconnect();var r=document.createElement("img");r.setAttribute("src",e.value),r.onload=function(){o.style["opacity"]=0,t.appendChild(r),setTimeout((function(){o.remove()}),600)}}}}catch(l){s.e(l)}finally{s.f()}}),n),t.observer.observe(t)},unbind:function(t,e){console.log(e),t.observer&&t.observer.disconnect()}};o["a"].directive("img-lazy-loading",i)},e168:function(t,e,n){"use strict";var a=n("0583"),o=n.n(a);o.a},f81c:function(t,e,n){"use strict";var a=n("baa6"),o=n.n(a);o.a},fb19:function(t,e,n){"use strict";var a=n("1454"),o=n.n(a);o.a},ff85:function(t,e,n){}});
//# sourceMappingURL=app.1e2fa9f3.js.map