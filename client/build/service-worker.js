"use strict";var precacheConfig=[["/index.html","31ec946f1f06105c9ecd1cff670dbc21"],["/static/css/main.9f896959.css","409d3ce77e98929ed14a89a69e9c848b"],["/static/js/main.756c0679.js","c8e95c0fa150cfe72acadf529f95be76"],["/static/media/01_edit1.8d35c60d.jpg","8d35c60d50044ad5cbb26b69ce2414e7"],["/static/media/02_edit.9bf57831.jpg","9bf578312d454b54784cd3e91fc654f7"],["/static/media/03_edit.6791c4c5.jpg","6791c4c54aa1670df1650b8878d3a28c"],["/static/media/04_edit.ad15ccec.jpg","ad15ccec9470976fa0f043b29f6bd0fa"],["/static/media/05_edit.3e4c79dc.jpg","3e4c79dc3e700d5add7e7aefc2685638"],["/static/media/06_edit.304c8fe1.jpg","304c8fe1ae8da7a578845ba0c36ee1f5"],["/static/media/07_edit.5baaf733.jpg","5baaf73315831ec273f3efe390c80eea"],["/static/media/08_edit.e4cf38fa.jpg","e4cf38fa23fe61f3b1c9b7a7fe1cceab"],["/static/media/09_edit.d61f9bbb.jpg","d61f9bbb306f6915bd99581f80af50f2"],["/static/media/10_edit.a704ff2e.jpg","a704ff2e22c2a7840bc72774188b17d0"],["/static/media/Image-Coming-Soon-Placeholder.f5ee22f6.png","f5ee22f6b8b9f9f9ab314f4fb6bfc950"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/sunburstLogo.b3d082e2.png","b3d082e29cd98680a00288cb4e19f268"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});