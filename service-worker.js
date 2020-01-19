/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2017/11/05/fastify/index.html",
    "revision": "0d1f5e359ffe66693696f438497b7357"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "7a0bc33e66ba56858493de347d1553fc"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "73f07869fa615c3641b36ad0a4d66830"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "e4f9e3443150ca52ee5df4d9c013d1b6"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "6d9b07e2071a72feb993b2f86a5b4f71"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "f2bc202986f7570f777ce84b530e763f"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "1ee7d761b205a3ae3e54d704f40c2ff2"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "96b74bcbb4e15691616473448502eb07"
  },
  {
    "url": "404.html",
    "revision": "e468d62d42e7e08c45daa93d2648a103"
  },
  {
    "url": "about.html",
    "revision": "45e661cf2333e7bac5f008383c6224fc"
  },
  {
    "url": "assets/css/0.styles.08bdfdef.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
  },
  {
    "url": "assets/js/1.cd6517b5.js",
    "revision": "d820b8b321b92c44e702a228f1d18781"
  },
  {
    "url": "assets/js/10.3da0edda.js",
    "revision": "905f0657dc8362cfdd0f8fb318f4b159"
  },
  {
    "url": "assets/js/11.c078216b.js",
    "revision": "df46cd3901b663ca48f7712c12eee464"
  },
  {
    "url": "assets/js/12.f22de79b.js",
    "revision": "ee4b846f4d550641e179ecd8ea893017"
  },
  {
    "url": "assets/js/13.531002c6.js",
    "revision": "8c98d82a9253f4b0b540ecbc86ab99f3"
  },
  {
    "url": "assets/js/14.1537f746.js",
    "revision": "fe9d7b8205a8de7e8d893ee2c3d8b9e1"
  },
  {
    "url": "assets/js/15.d0895eff.js",
    "revision": "ec85f581fea5e751a43fad9ca7f16dc3"
  },
  {
    "url": "assets/js/16.5848278d.js",
    "revision": "817d0266b619c8a552440760d52ab8f3"
  },
  {
    "url": "assets/js/17.69773d0e.js",
    "revision": "335842e29f3a8f08aa4955dce3ad77e0"
  },
  {
    "url": "assets/js/18.ce78b8fa.js",
    "revision": "3c6bd21703bb9c52248ae862d31f219a"
  },
  {
    "url": "assets/js/3.44ff7866.js",
    "revision": "6c10c269df6be76d9c5a588d1b4fdd93"
  },
  {
    "url": "assets/js/4.3cf70c88.js",
    "revision": "e35a62d3d548d53aac1da168ad8303cc"
  },
  {
    "url": "assets/js/5.5d81cbfa.js",
    "revision": "3a1f4daa5b7f67e38131ad44eb09d18f"
  },
  {
    "url": "assets/js/6.859179a3.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.4a4405be.js",
    "revision": "02fa7e317af5f076b053fe769ad929ce"
  },
  {
    "url": "assets/js/8.bd3aa100.js",
    "revision": "bcd662946346f9ab5c1648dda13f111b"
  },
  {
    "url": "assets/js/9.b07964bf.js",
    "revision": "f5fa7ef598fd2f9f5f724164671edb4f"
  },
  {
    "url": "assets/js/app.6cecd588.js",
    "revision": "37023d4177ba76f6787001462b77217c"
  },
  {
    "url": "category/index.html",
    "revision": "bc09978eafb8eb279733deee5b1f46b9"
  },
  {
    "url": "index.html",
    "revision": "fd0dd3cc411cb316046047a480d996da"
  },
  {
    "url": "tag/index.html",
    "revision": "e6143e949faf0a76eecc31545c2053bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
