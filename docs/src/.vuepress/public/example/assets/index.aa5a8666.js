import{r as B,o as A,c as D,w as I,K as _e,a as Ee,b as Le,d as be,T as ne,e as oe,f as Te,g as z,h as Oe,i as se,j as Re,k as Ce}from"./vendor.551af9b9.js";const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const s of u)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function r(u){const s={};return u.integrity&&(s.integrity=u.integrity),u.referrerpolicy&&(s.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?s.credentials="include":u.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(u){if(u.ep)return;u.ep=!0;const s=r(u);fetch(u.href,s)}};Ne();const Pe="modulepreload",ie={},Se="/vue-with-keep-alive/example/",J=function(t,r){return!r||r.length===0?t():Promise.all(r.map(a=>{if(a=`${Se}${a}`,a in ie)return;ie[a]=!0;const u=a.endsWith(".css"),s=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Pe,u||(h.as="script",h.crossOrigin=""),h.href=a,document.head.appendChild(h),u)return new Promise((f,d)=>{h.addEventListener("load",f),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};function ae(o,t,r,a,u,s,h){try{var f=o[s](h),d=f.value}catch(E){r(E);return}f.done?t(d):Promise.resolve(d).then(a,u)}function ce(o){return function(){var t=this,r=arguments;return new Promise(function(a,u){var s=o.apply(t,r);function h(d){ae(s,a,u,h,f,"next",d)}function f(d){ae(s,a,u,h,f,"throw",d)}h(void 0)})}}var le={exports:{}};(function(o){var t=function(r){var a=Object.prototype,u=a.hasOwnProperty,s,h=typeof Symbol=="function"?Symbol:{},f=h.iterator||"@@iterator",d=h.asyncIterator||"@@asyncIterator",E=h.toStringTag||"@@toStringTag";function v(n,e,i){return Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{v({},"")}catch{v=function(e,i,l){return e[i]=l}}function m(n,e,i,l){var c=e&&e.prototype instanceof M?e:M,p=Object.create(c.prototype),w=new Y(l||[]);return p._invoke=we(n,i,w),p}r.wrap=m;function y(n,e,i){try{return{type:"normal",arg:n.call(e,i)}}catch(l){return{type:"throw",arg:l}}}var T="suspendedStart",O="suspendedYield",G="executing",N="completed",b={};function M(){}function $(){}function R(){}var H={};v(H,f,function(){return this});var U=Object.getPrototypeOf,j=U&&U(U(q([])));j&&j!==a&&u.call(j,f)&&(H=j);var P=R.prototype=M.prototype=Object.create(H);$.prototype=R,v(P,"constructor",R),v(R,"constructor",$),$.displayName=v(R,E,"GeneratorFunction");function ee(n){["next","throw","return"].forEach(function(e){v(n,e,function(i){return this._invoke(e,i)})})}r.isGeneratorFunction=function(n){var e=typeof n=="function"&&n.constructor;return e?e===$||(e.displayName||e.name)==="GeneratorFunction":!1},r.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,R):(n.__proto__=R,v(n,E,"GeneratorFunction")),n.prototype=Object.create(P),n},r.awrap=function(n){return{__await:n}};function x(n,e){function i(p,w,g,L){var _=y(n[p],n,w);if(_.type==="throw")L(_.arg);else{var W=_.arg,k=W.value;return k&&typeof k=="object"&&u.call(k,"__await")?e.resolve(k.__await).then(function(C){i("next",C,g,L)},function(C){i("throw",C,g,L)}):e.resolve(k).then(function(C){W.value=C,g(W)},function(C){return i("throw",C,g,L)})}}var l;function c(p,w){function g(){return new e(function(L,_){i(p,w,L,_)})}return l=l?l.then(g,g):g()}this._invoke=c}ee(x.prototype),v(x.prototype,d,function(){return this}),r.AsyncIterator=x,r.async=function(n,e,i,l,c){c===void 0&&(c=Promise);var p=new x(m(n,e,i,l),c);return r.isGeneratorFunction(e)?p:p.next().then(function(w){return w.done?w.value:p.next()})};function we(n,e,i){var l=T;return function(p,w){if(l===G)throw new Error("Generator is already running");if(l===N){if(p==="throw")throw w;return re()}for(i.method=p,i.arg=w;;){var g=i.delegate;if(g){var L=te(g,i);if(L){if(L===b)continue;return L}}if(i.method==="next")i.sent=i._sent=i.arg;else if(i.method==="throw"){if(l===T)throw l=N,i.arg;i.dispatchException(i.arg)}else i.method==="return"&&i.abrupt("return",i.arg);l=G;var _=y(n,e,i);if(_.type==="normal"){if(l=i.done?N:O,_.arg===b)continue;return{value:_.arg,done:i.done}}else _.type==="throw"&&(l=N,i.method="throw",i.arg=_.arg)}}}function te(n,e){var i=n.iterator[e.method];if(i===s){if(e.delegate=null,e.method==="throw"){if(n.iterator.return&&(e.method="return",e.arg=s,te(n,e),e.method==="throw"))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var l=y(i,n.iterator,e.arg);if(l.type==="throw")return e.method="throw",e.arg=l.arg,e.delegate=null,b;var c=l.arg;if(!c)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b;if(c.done)e[n.resultName]=c.value,e.next=n.nextLoc,e.method!=="return"&&(e.method="next",e.arg=s);else return c;return e.delegate=null,b}ee(P),v(P,E,"Generator"),v(P,f,function(){return this}),v(P,"toString",function(){return"[object Generator]"});function ge(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function F(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function Y(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(ge,this),this.reset(!0)}r.keys=function(n){var e=[];for(var i in n)e.push(i);return e.reverse(),function l(){for(;e.length;){var c=e.pop();if(c in n)return l.value=c,l.done=!1,l}return l.done=!0,l}};function q(n){if(n){var e=n[f];if(e)return e.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var i=-1,l=function c(){for(;++i<n.length;)if(u.call(n,i))return c.value=n[i],c.done=!1,c;return c.value=s,c.done=!0,c};return l.next=l}}return{next:re}}r.values=q;function re(){return{value:s,done:!0}}return Y.prototype={constructor:Y,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(F),!n)for(var e in this)e.charAt(0)==="t"&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var n=this.tryEntries[0],e=n.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function i(L,_){return p.type="throw",p.arg=n,e.next=L,_&&(e.method="next",e.arg=s),!!_}for(var l=this.tryEntries.length-1;l>=0;--l){var c=this.tryEntries[l],p=c.completion;if(c.tryLoc==="root")return i("end");if(c.tryLoc<=this.prev){var w=u.call(c,"catchLoc"),g=u.call(c,"finallyLoc");if(w&&g){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(w){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else if(g){if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(n,e){for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i];if(l.tryLoc<=this.prev&&u.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var c=l;break}}c&&(n==="break"||n==="continue")&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var p=c?c.completion:{};return p.type=n,p.arg=e,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(p)},complete:function(n,e){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&e&&(this.next=e),b},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===n)return this.complete(i.completion,i.afterLoc),F(i),b}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===n){var l=i.completion;if(l.type==="throw"){var c=l.arg;F(i)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,i){return this.delegate={iterator:q(n),resultName:e,nextLoc:i},this.method==="next"&&(this.arg=s),b}},r}(o.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(le);var K=le.exports,fe="KEEP_BEFORE_ROUTE_CHANGE",he="KEEP_ROUTE_CHANGE",de="KEEP_COMPONENT_DESTROY",S="reLaunch",ke="ALL";function pe(o,t){var r,a=(r=o.constructor.version)===null||r===void 0?void 0:r.replace(/\.(\d+)$/,"$1");if(a<3.5){console.error("vue-with-keep-alive: vue-router version is lower than 3.5.0, please upgrade vue-router");return}var u=t?o:o.getRoutes();u.forEach(function(s){var h,f;if(!!(s!=null&&(h=s.components)!==null&&h!==void 0&&h.default)){if(((f=s.children)===null||f===void 0?void 0:f.length)>0&&pe(s.children,!0),typeof s.components.default=="function"){var d=s.components.default;return s.components.default=ce(K.mark(function E(){var v;return K.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,d();case 2:return v=y.sent,v.default.name=s.name,y.abrupt("return",v);case 5:case"end":return y.stop()}},E)}))}s.components.default.name=s.name}})}function ve(){var o=["push","forward","replace",S],t=Object.create(null),r={detail:{}},a=new CustomEvent(fe,r),u=new CustomEvent(he,r);return{enhanceList:o,obj:t,options:r,routeTypeEvent:u,beforeRouteTypeEvent:a}}function Ae(o){var t=ve(),r=t.enhanceList,a=t.obj,u=t.options,s=t.routeTypeEvent,h=t.beforeRouteTypeEvent,f=o.history.constructor.prototype,d=o.constructor.prototype;d[S]=function(m){return d.replace(m)},f[S]=function(m){return f.replace(m)};var E=Object.create(null);r.forEach(function(m){a[m]=f[m]||function(){return f.go(1)},E[m]=d[m]||function(){return d.go(1)},f[m]=function(y,T,O){return v(a,m,y,T,O)},d[m]=function(y,T,O){return v(a,m,y,T,O)}});function v(m,y,T,O,G){return u.detail.type=y,u.detail.destroy=T?T.destroy:null,window.dispatchEvent(h),window.dispatchEvent(s),new Promise(function(N){setTimeout(function(){N(m[y].call(o.history,T,O,G))},0)})}return o}function Ge(o){var t=ve(),r=t.enhanceList,a=t.obj,u=t.options,s=t.routeTypeEvent,h=t.beforeRouteTypeEvent;o[S]=function(f){return o.replace(f)},r.forEach(function(f){a[f]=o[f],o[f]=function(d){return u.detail.type=f,u.detail.destroy=d?d.destroy:null,window.dispatchEvent(h),window.dispatchEvent(s),a[f](d)}})}var $e=function(o){return pe(o),Object.prototype.hasOwnProperty.call(o,"push")?Ge(o):Ae(o)};function je(){var o=this,t=o.$createElement,r=o._self._c||t;return r("keep-alive",{attrs:{include:[].concat(o.includeList),max:o.max,exclude:o.exclude}},[r("router-view")],1)}function xe(o,t,r,a,u){var s=B("router-view");return A(),D(s,{key:0},{default:I(function(h){var f=h.Component;return[(A(),D(_e,{include:u.includeList,max:r.max,exclude:r.exclude},[(A(),D(Ee(f)))],1032,["include","max","exclude"]))]}),_:1})}var Be={watchRoute:function(t){var r=this.getRouteName(t);this.handleMatchClearBehindList(r),this.isForward?this.forward(r):this.back(r),this.handleMatchClearList(t),this.includeList.length===0&&this.includeList.push(r)},forward:function(t){var r=this.includeList;if(r.includes(t)){var a=r.indexOf(t);r.splice(a,1)}r.length===this.max&&r.splice(0,1),r.push(t)},back:function(t){this.includeList.length===1&&(this.includeList=[t]);var r=this.includeList.indexOf(t);r>=0&&this.includeList.splice(r+1)},handelDestroy:function(t){var r=this.destroyTraverse;typeof t=="string"&&t?r(t):Array.isArray(t)&&t.forEach(function(a){return r(a)})},handleMatchClearBehindList:function(t){if(this.matchClearBehindList.includes(t)){var r=this.includeList.indexOf(t);if(r<0)return;this.includeList.splice(r+1)}},handleMatchClearList:function(t){var r=this.matchClearList.indexOf(t.name||t.path);r>=0&&(this.includeList=[])},getRouteName:function(t){var r=t.name,a=t.meta.keepAlive;return this.mode==="allKeepAlive"||a?r:"__"+r},destroyTraverse:function(t){for(var r=this.includeList,a=0;a<r.length;a++)if(t===r[a]){r.splice(a,1);break}},addBeforeRouteChangeEvent:function(){var t=this;window.addEventListener(fe,function(r){var a=r.detail;(a.type===S||a.destroy===ke)&&(t.includeList=[]),t.handelDestroy(a.destroy)})},addRouteChangeEvent:function(){var t=this;window.addEventListener(he,function(r){var a=r.detail;a.type===S&&(t.includeList=[]),t.isForward=!0,setTimeout(function(){return t.isForward=!1},300)})},addComponentDestroyEvent:function(){var t=this;window.addEventListener(de,function(r){var a=r.detail;t.handelDestroy(a)})}},Q,De={name:"KeepRouteView",render:function(){return Q.vueNext?xe.apply(void 0,arguments):je.call(Q)},props:{max:{type:Number,default:5},exclude:{type:[Array,RegExp,String],default:function(){return[]}},matchClearList:{type:Array,default:function(){return[]}},matchClearBehindList:{type:Array,default:function(){return[]}},mode:{type:String,default:"allKeepAlive"}},data:function(){return{vueNext:Number(ye.version.slice(0,3))>=3,includeList:[]}},created:function(){this.isForward=!1,this.addBeforeRouteChangeEvent(),this.addRouteChangeEvent(),this.addComponentDestroyEvent(),Q=this},watch:{$route:{immediate:!0,handler:function(t){this.watchRoute(t)}}},methods:Be};function me(o){return X.apply(this,arguments)}function X(){return X=ce(K.mark(function o(t){var r;return K.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:r=new CustomEvent(de,{detail:t}),window.dispatchEvent(r);case 2:case"end":return u.stop()}},o)})),X.apply(this,arguments)}var ye,Ie={install:function(t,r){$e(r),t.component("KeepRouterView",De),ye=t;var a={destroy:me};Number(t.version.slice(0,1))<3?t.prototype.$keepRouter=a:t.config.globalProperties.$keepRouter=a}};const ue={goodsPageId:""};var Ke=o=>{o.name==="goods"&&o.query.id!==ue.goodsPageId&&(ue.goodsPageId=o.query.id,me("goods"))};const Ve=[{path:"/",redirect:{name:"user"}},{name:"user",path:"/user",component:()=>J(()=>import("./index.24257963.js"),["assets/index.24257963.js","assets/index.20123ba6.css","assets/index.6502498e.css","assets/index.14a806a9.css","assets/vendor.551af9b9.js","assets/vendor.a9acdaed.css"]),meta:{title:"\u4F1A\u5458\u4E2D\u5FC3"}},{name:"cart",path:"/cart",component:()=>J(()=>import("./index.fc29b4bd.js"),["assets/index.fc29b4bd.js","assets/index.a69c578e.css","assets/index.6502498e.css","assets/vendor.551af9b9.js","assets/vendor.a9acdaed.css","assets/index.d24a4421.js","assets/index.02a43f6b.css"]),meta:{title:"\u8D2D\u7269\u8F66"}},{name:"goods",path:"/goods",component:()=>J(()=>import("./index.b5b2dd0d.js"),["assets/index.b5b2dd0d.js","assets/index.ca3d383e.css","assets/index.6502498e.css","assets/index.14a806a9.css","assets/vendor.551af9b9.js","assets/vendor.a9acdaed.css","assets/index.d24a4421.js","assets/index.02a43f6b.css"]),meta:{title:"\u5546\u54C1\u8BE6\u60C5"}}],Z=Le({routes:Ve,history:be()});Z.beforeEach((o,t,r)=>{Ke(o);const a=o.meta&&o.meta.title;a&&(document.title=a),r()});var Me=(o,t)=>{const r=o.__vccOpts||o;for(const[a,u]of t)r[a]=u;return r};const He={components:{[ne.name]:ne,[oe.name]:oe},data(){return{active:0,showTabbar:!1}},watch:{"$route.name":function(o){this.$route.name==="cart"?this.active=0:this.active=1,this.showTabbar=["cart","user"].includes(o)}},methods:{jump(o){this.$router.replace({name:o})}}},Ue={id:"app"},Fe=se("\u8D2D\u7269\u8F66"),Ye=se("\u4E2A\u4EBA\u4E2D\u5FC3");function qe(o,t,r,a,u,s){const h=B("keep-router-view"),f=B("van-tabbar-item"),d=B("van-tabbar");return A(),Te("div",Ue,[z(h),u.showTabbar?(A(),D(d,{key:0,modelValue:u.active,"onUpdate:modelValue":t[2]||(t[2]=E=>u.active=E)},{default:I(()=>[z(f,{icon:"cart",onClick:t[0]||(t[0]=E=>s.jump("cart"))},{default:I(()=>[Fe]),_:1}),z(f,{icon:"manager",onClick:t[1]||(t[1]=E=>s.jump("user"))},{default:I(()=>[Ye]),_:1})]),_:1},8,["modelValue"])):Oe("",!0)])}var We=Me(He,[["render",qe]]);const V=Re(We);V.use(Z);V.use(Ce);V.use(Ie,Z);V.mount("#app");export{Me as _};