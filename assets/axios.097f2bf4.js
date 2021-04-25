import{v as e}from"./index.59f6bb42.js";import{d as t,V as r,c as n,a as o}from"./vendor.3e585f17.js";var s=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function u(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function f(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function p(e){return"[object Function]"===i.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var l={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:f,isUndefined:u,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:p,isStream:function(e){return c(e)&&p(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:d,merge:function e(){var t={};function r(r,n){f(t[n])&&f(r)?t[n]=e(t[n],r):f(r)?t[n]=e({},r):a(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)d(arguments[n],r);return t},extend:function(e,t,r){return d(t,(function(t,n){e[n]=r&&"function"==typeof t?s(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function h(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var m=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(l.isURLSearchParams(t))n=t.toString();else{var o=[];l.forEach(t,(function(e,t){null!=e&&(l.isArray(e)?t+="[]":e=[e],l.forEach(e,(function(e){l.isDate(e)?e=e.toISOString():l.isObject(e)&&(e=JSON.stringify(e)),o.push(h(t)+"="+h(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function g(){this.handlers=[]}g.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},g.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},g.prototype.forEach=function(e){l.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var y=g,v=function(e,t,r){return l.forEach(r,(function(r){e=r(e,t)})),e},w=function(e){return!(!e||!e.__CANCEL__)},b=function(e,t){l.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},E=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},x=l.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),l.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),l.isString(n)&&i.push("path="+n),l.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},j=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],C=l.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=l.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},R=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;l.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+a)}var u,c,f=(u=e.baseURL,c=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,c):c);if(s.open(e.method.toUpperCase(),m(f,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,i,a,u,c="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),u={},n?(l.forEach(n.split("\n"),(function(e){if(a=e.indexOf(":"),o=l.trim(e.substr(0,a)).toLowerCase(),i=l.trim(e.substr(a+1)),o){if(u[o]&&j.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([i]):u[o]?u[o]+", "+i:i}})),u):u):null,f={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:c,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(E("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,f),s=null}},s.onabort=function(){s&&(r(E("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(E("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(E(t,e,"ECONNABORTED",s)),s=null},l.isStandardBrowserEnv()){var p=(e.withCredentials||C(f))&&e.xsrfCookieName?x.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}if("setRequestHeader"in s&&l.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),l.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(d){if("json"!==e.responseType)throw d}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},S={"Content-Type":"application/x-www-form-urlencoded"};function A(e,t){!l.isUndefined(e)&&l.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var O,N={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(O=R),O),transformRequest:[function(e,t){return b(t,"Accept"),b(t,"Content-Type"),l.isFormData(e)||l.isArrayBuffer(e)||l.isBuffer(e)||l.isStream(e)||l.isFile(e)||l.isBlob(e)?e:l.isArrayBufferView(e)?e.buffer:l.isURLSearchParams(e)?(A(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):l.isObject(e)?(A(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};N.headers={common:{Accept:"application/json, text/plain, */*"}},l.forEach(["delete","get","head"],(function(e){N.headers[e]={}})),l.forEach(["post","put","patch"],(function(e){N.headers[e]=l.merge(S)}));var U=N;function B(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var T=function(e){return B(e),e.headers=e.headers||{},e.data=v(e.data,e.headers,e.transformRequest),e.headers=l.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),l.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||U.adapter)(e).then((function(t){return B(e),t.data=v(t.data,t.headers,e.transformResponse),t}),(function(t){return w(t)||(B(e),t&&t.response&&(t.response.data=v(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},P=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function a(e,t){return l.isPlainObject(e)&&l.isPlainObject(t)?l.merge(e,t):l.isPlainObject(t)?l.merge({},t):l.isArray(t)?t.slice():t}function u(n){l.isUndefined(t[n])?l.isUndefined(e[n])||(r[n]=a(void 0,e[n])):r[n]=a(e[n],t[n])}l.forEach(n,(function(e){l.isUndefined(t[e])||(r[e]=a(void 0,t[e]))})),l.forEach(o,u),l.forEach(s,(function(n){l.isUndefined(t[n])?l.isUndefined(e[n])||(r[n]=a(void 0,e[n])):r[n]=a(void 0,t[n])})),l.forEach(i,(function(n){n in t?r[n]=a(e[n],t[n]):n in e&&(r[n]=a(void 0,e[n]))}));var c=n.concat(o).concat(s).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return l.forEach(f,u),r};function L(e){this.defaults=e,this.interceptors={request:new y,response:new y}}L.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=P(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[T,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},L.prototype.getUri=function(e){return e=P(this.defaults,e),m(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},l.forEach(["delete","get","head","options"],(function(e){L.prototype[e]=function(t,r){return this.request(P(r||{},{method:e,url:t,data:(r||{}).data}))}})),l.forEach(["post","put","patch"],(function(e){L.prototype[e]=function(t,r,n){return this.request(P(n||{},{method:e,url:t,data:r}))}}));var q=L;function k(e){this.message=e}k.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},k.prototype.__CANCEL__=!0;var D=k;function F(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new D(e),t(r.reason))}))}F.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},F.source=function(){var e;return{token:new F((function(t){e=t})),cancel:e}};var H=F;function z(e){var t=new q(e),r=s(q.prototype.request,t);return l.extend(r,q.prototype,t),l.extend(r,t),r}var M=z(U);M.Axios=q,M.create=function(e){return z(P(M.defaults,e))},M.Cancel=D,M.CancelToken=H,M.isCancel=w,M.all=function(e){return Promise.all(e)},M.spread=function(e){return function(t){return e.apply(null,t)}},M.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var _=M,I=M;_.default=I;const $=_.create({baseURL:"https://api.github.com",timeout:2e4});$.interceptors.request.use((e=>e),(e=>Promise.reject(e))),$.interceptors.response.use((e=>e),(t=>{if(t.response&&t.response.data){const r=t.response.status,n=t.response.data.message;e.error(`Code: ${r}, Message: ${n}`),console.error("[Axios Error]",t.response)}else e.error(`${t}`);return Promise.reject(t)}));const X=t({setup(){$.get("/users/XPoet").then((e=>{console.log("res: ",e)})).catch((e=>{console.log("err: ",e)}))}}),V={class:"title"},J=o("h2",null,"axios",-1);X.render=function(e,t,o,s,i,a){return r(),n("div",V,[J])};export default X;
