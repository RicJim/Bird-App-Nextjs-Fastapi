if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let t={};const d=e=>i(e,n),f={module:{uri:n},exports:t,require:d};a[n]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a41a8ff967947c390f6b705b2c42b740"},{url:"/_next/static/4J-ity_W8rM-3pIX3g-BA/_buildManifest.js",revision:"b4a5622b5f300181a65488e566856d5d"},{url:"/_next/static/4J-ity_W8rM-3pIX3g-BA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/27ce9e75-e4b952549052037b.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/45495e7f-a0db1ec4c082abb3.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/4bd1b696-c0944e9a4542b1b4.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/517-b7329893d36fe62a.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/617eee02-1c73dc4448d7a2f6.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/653-7398b460914759ca.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/7094ddb0-9533fe3504571905.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/76d77505-fa5fbcbf792e5922.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/7e12a25d-712e0904d2260e32.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/839-1f23aa64b5361edd.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/970-359c92368a53dc04.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/_not-found/page-145b68e3e0b4c571.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/about/page-4092a2f9a7931ff5.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/api/helloNextJs/route-ad267476fab55df4.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/gallery/%5Bid%5D/page-322733cc6f389561.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/gallery/page-609f4fd648432529.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/identify/page-a5e8bf332b3f39ea.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/layout-e12a3de2fae326b3.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/app/page-51895ebf2660e517.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/ff716bb2-5132c96a44842dcd.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/framework-58f97e80b1d6e3ea.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/main-933a2d1c3648098d.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/main-app-0d0d3c58cd78f11a.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-01f7e5e050d49ced.js",revision:"4J-ity_W8rM-3pIX3g-BA"},{url:"/_next/static/css/8341c61e7a70ff12.css",revision:"8341c61e7a70ff12"},{url:"/_next/static/media/01b6d16db7cbd96b-s.woff2",revision:"aa5a44ef72b927d17eac76def8c255cf"},{url:"/_next/static/media/045832894acda0e9-s.p.woff2",revision:"200c41f352c466e1c2b117656a0256e8"},{url:"/_next/static/media/0881a2b922b3331e-s.woff2",revision:"a0891d7e3512851a00017bc6aa93a49a"},{url:"/_next/static/media/0e5e1c6a8db9e432-s.woff2",revision:"f201ef2b6f1307dd8b1ec0c0deffceea"},{url:"/_next/static/media/120a5a1920781bd0-s.p.woff2",revision:"8c4b05d4371467ba1d0bc60839c6dcb9"},{url:"/_next/static/media/2744aa005c8cf586-s.p.woff2",revision:"105daacb4bc4cf86575fb3136360ff4d"},{url:"/_next/static/media/27971e35634b7c88-s.woff2",revision:"4264bad61333859477947703b15aadfd"},{url:"/_next/static/media/279b47070a5d5877-s.woff2",revision:"f604c827dc8754b14422f431013955eb"},{url:"/_next/static/media/28aa5118b38b86e4-s.woff2",revision:"db5317b009a0dedd66dab31d7889b5f3"},{url:"/_next/static/media/2f66f084fba01545-s.woff2",revision:"8e0642a7dd6dfe9491afa20e4a470655"},{url:"/_next/static/media/46b92c15a48f3318-s.p.woff2",revision:"e6a3e7c444a2fdaef711876a4ce39596"},{url:"/_next/static/media/470a067cc6557a8c-s.woff2",revision:"3770df42d862e4dd073cc0e529daef2b"},{url:"/_next/static/media/483de911b1a0d258-s.woff2",revision:"28502b06e67112e0bf77a784aee917d0"},{url:"/_next/static/media/539b2ecbf014924b-s.woff2",revision:"e5b46e787824355760aa312fc91f6a91"},{url:"/_next/static/media/5693677ef07d9b51-s.woff2",revision:"96b57d1ae0a86dcf7913589b27426343"},{url:"/_next/static/media/674abd25bb7be96f-s.woff2",revision:"92e5e17ec75636ec7ab5c46a00a54342"},{url:"/_next/static/media/69eca568ddda66f3-s.woff2",revision:"274de48d6ba9190c6be659d8006169ee"},{url:"/_next/static/media/7c7db451c1a82f61-s.p.woff2",revision:"b5cdc415502634db78d05d91c1bf0551"},{url:"/_next/static/media/7d1684f14ddac155-s.woff2",revision:"604411f91e27fd9740f3c4482aef4d58"},{url:"/_next/static/media/82233a533941ac93-s.woff2",revision:"ac7d441c7fe6e91a0dce7510d3b3d38e"},{url:"/_next/static/media/8720059dfa14a1fe-s.woff2",revision:"1254e937b1635a843bc7bdee51de2aeb"},{url:"/_next/static/media/8fa52275b6c22437-s.woff2",revision:"066052f914495367d40b72599bd54598"},{url:"/_next/static/media/906678b269849541-s.woff2",revision:"21c838ead8641ef57bc94d27efcd257e"},{url:"/_next/static/media/994367e55fdd7fef-s.woff2",revision:"a2b09664c5faadff15e596aa57e8e5c7"},{url:"/_next/static/media/994bf73bb06543dc-s.woff2",revision:"0ed4fab7b6a3e3c06f70de37b3eb5f47"},{url:"/_next/static/media/a1ab1338b04b4a15-s.woff2",revision:"95b874303c176df8093f9a5b0e8f3b55"},{url:"/_next/static/media/a4e8963e7141b0f0-s.woff2",revision:"85486111ec13b11774a7ec6d9755dffc"},{url:"/_next/static/media/ac0efabfe978b0ad-s.woff2",revision:"ed31e4b8cd1d209be2e50af162f26e00"},{url:"/_next/static/media/b5c08a795ae281ca-s.woff2",revision:"5a3ac9809e02d838b15b80e557435268"},{url:"/_next/static/media/b9472d49e3bc18c3-s.woff2",revision:"8d5ccaf24e104a69a676ef5f4f2e95f2"},{url:"/_next/static/media/bb6334b8f5a99b5e-s.woff2",revision:"4603ddb13e6738af220fb5cf1fecbc0b"},{url:"/_next/static/media/c898cbfd2f789a8c-s.woff2",revision:"5dcd52bbafd405373cb80552de5f5a96"},{url:"/_next/static/media/c954d99df1178b91-s.woff2",revision:"3ac9ee74ef624c84c5c683d755388c2f"},{url:"/_next/static/media/cd31bf4b34f8dfb3-s.woff2",revision:"1a0c60b7297c849ea95c06380a4c0961"},{url:"/_next/static/media/d0f96be320385a33-s.woff2",revision:"1a238bfef8b13573198b56363c3bbbb7"},{url:"/_next/static/media/d536eaaa8eee0a4d-s.woff2",revision:"f6985e8df207520f323f4903eeded235"},{url:"/_next/static/media/d9e386ae70efc2f0-s.woff2",revision:"5e62d0433ab4fb48f80f72b6a41f07c2"},{url:"/_next/static/media/da897b99eb1fe4a1-s.p.woff2",revision:"4903a00d1c555c0846799302c673d6a1"},{url:"/_next/static/media/dad619d2ef97f73d-s.woff2",revision:"db80d4b05ac2ac1427700bfa7644ac3c"},{url:"/_next/static/media/e0e418e0c2fc8a84-s.woff2",revision:"11f4301b1b916899d6e7a6d607d863fb"},{url:"/_next/static/media/ecf49d904668b268-s.woff2",revision:"9f2ae2ca944b5bd6c3d59b01f78ec5ff"},{url:"/_next/static/media/f1df6186c8d69644-s.woff2",revision:"307c90aaa7d9c628155ee8cb913b8382"},{url:"/android/android-launchericon-144-144.png",revision:"6721649f5acb97903e280ca0c4a6a876"},{url:"/android/android-launchericon-192-192.png",revision:"223d59821db7b785c4c749ada953d95d"},{url:"/android/android-launchericon-48-48.png",revision:"3153394e19ec014e05e31f8072ec80e2"},{url:"/android/android-launchericon-512-512.png",revision:"dc09b05fe4b6edd3bda17b043ea2dfce"},{url:"/android/android-launchericon-72-72.png",revision:"73817461adb378cb8a3233db825a13a4"},{url:"/android/android-launchericon-96-96.png",revision:"e346d8fdf76284d1bbe9e0f429200bdc"},{url:"/images/hero.png",revision:"a933562ae8a6f17dc34b7892410b4608"},{url:"/manifest.json",revision:"024c2a87285301e46d3d56f9442d8124"},{url:"/models/image/group1-shard1of7.bin",revision:"f3e65fa39146bb81e52a6b9f1960eb82"},{url:"/models/image/group1-shard2of7.bin",revision:"546e5b0cb1d88cb352f4efa436e4e7c0"},{url:"/models/image/group1-shard3of7.bin",revision:"e9528fa99ba1901fe2bd20027b78a306"},{url:"/models/image/group1-shard4of7.bin",revision:"3d02d2d9c43d60787cd09dafd7ed4108"},{url:"/models/image/group1-shard5of7.bin",revision:"04755ffe45ea512b40d345c213cf8a63"},{url:"/models/image/group1-shard6of7.bin",revision:"4b09a24fad0c4fc9ca517c7a471a4f20"},{url:"/models/image/group1-shard7of7.bin",revision:"d1654e8721dfac7cfbb6c74a08dc2185"},{url:"/models/image/model.json",revision:"01686c3cf1e1def9c870bc3a1ffdf90c"},{url:"/models/sound/group1-shard1of3.bin",revision:"cba76a3bae2575e9f760ad8e904474a8"},{url:"/models/sound/group1-shard2of3.bin",revision:"f945a02f8f787c2f1f21f180427bc931"},{url:"/models/sound/group1-shard3of3.bin",revision:"637a4bc63eb4d02291408ba909d2c86f"},{url:"/models/sound/model.json",revision:"d7305a654f90cea601ab569df0d3404f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
