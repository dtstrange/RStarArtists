"use strict";var precacheConfig=[["/index.html","b0d6a9e52de81654eca3d1cdddb4dbe0"],["/static/css/main.ec16a2ea.css","adcfdbbcff1814f0eea4fee222d81383"],["/static/js/main.53ea4e95.js","251f31190b9a79d8ffec2e89b7b87378"],["/static/media/01_edit1.b9ffe93e.jpg","b9ffe93e7c18c5ad4b3b3667626261e9"],["/static/media/02.21f13b3d.png","21f13b3d1c809b1142de01406c5ca656"],["/static/media/03_edit.bc04925d.jpg","bc04925d47f4b604571d2ea3d2c37073"],["/static/media/04_edit.95040d4b.jpg","95040d4b87a129b898b7001587a21ef8"],["/static/media/05_edit.0eb59a47.jpg","0eb59a477a5cf50a24583900ab3e2f8f"],["/static/media/06_edit.5cf21e83.jpg","5cf21e83d711cbcbb0c2d619fad35b26"],["/static/media/07_edit.914e807c.jpg","914e807c779e06ac2ea23c6231fa8312"],["/static/media/08_edit.8c3f208e.jpg","8c3f208e24bd9b04857e09424f7f4a7a"],["/static/media/09_edit.7a02f6e5.jpg","7a02f6e570e4306993c71fd49e3529ca"],["/static/media/10_edit.c13cde25.jpg","c13cde25f3da1486b48713ff822a2713"],["/static/media/Image-Coming-Soon-Placeholder.f5ee22f6.png","f5ee22f6b8b9f9f9ab314f4fb6bfc950"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});