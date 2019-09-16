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
    "revision": "83c41e96ee87a7511aff2b8a7f5c1876"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "34fa5705932b09fa02b9f80346836ca4"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "27aa4915bd14da1bf887e08c6ca5305b"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "28afcf532c443c45cd8e5daee68bc66e"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "30061948dd469c224ebc79c1a4160de9"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "b508069e7c74857ebad98d36b99c4420"
  },
  {
    "url": "404.html",
    "revision": "2bb82c7db56dfae834cca7cab5583232"
  },
  {
    "url": "about.html",
    "revision": "a08057060cc41dc447bcad82dbfd4abb"
  },
  {
    "url": "assets/css/0.styles.b7e69aa5.css",
    "revision": "e4bcfa73d8a1b808bbe441249a28e97a"
  },
  {
    "url": "assets/js/1.0e57d953.js",
    "revision": "608fa64d2693cb643d4373f624b3126a"
  },
  {
    "url": "assets/js/10.9b9bd720.js",
    "revision": "926051240e258d78ab5c3e0e0c0ca8f5"
  },
  {
    "url": "assets/js/11.053674aa.js",
    "revision": "ed4cd06a488d6c905bf474614b6c55b8"
  },
  {
    "url": "assets/js/12.79f572a5.js",
    "revision": "63b702020a4d5aec2df0fa7206712117"
  },
  {
    "url": "assets/js/13.dc1bfd8c.js",
    "revision": "b0b692812582cfa2ced401b8399d1a6d"
  },
  {
    "url": "assets/js/14.01d37686.js",
    "revision": "05f312aece1e3f7855d55e49886782c1"
  },
  {
    "url": "assets/js/15.ba9a169c.js",
    "revision": "04c677366ff194af210e192ec32acb44"
  },
  {
    "url": "assets/js/3.eea1b2ff.js",
    "revision": "e2f2412755df12c4ce9a913038a8c182"
  },
  {
    "url": "assets/js/4.9586c509.js",
    "revision": "d73e1a14afc2ccbaa22dd69e9f483b96"
  },
  {
    "url": "assets/js/5.1df72739.js",
    "revision": "c216d1e52644aabb8ebe6a01995a0b13"
  },
  {
    "url": "assets/js/6.eafb8d59.js",
    "revision": "6c1bda48e38815be51c6dc85669d1089"
  },
  {
    "url": "assets/js/7.6ba87e89.js",
    "revision": "55b9dffb9edccd597c53d704f97f2cf2"
  },
  {
    "url": "assets/js/8.927b4033.js",
    "revision": "1838b4bb83490ef89921b81222a39fc1"
  },
  {
    "url": "assets/js/9.85420912.js",
    "revision": "ac01f3425830ed91bb26fdc081fc1a1e"
  },
  {
    "url": "assets/js/app.11ad7c49.js",
    "revision": "ed4bd448901cbafadb8063f01bed95ea"
  },
  {
    "url": "category/index.html",
    "revision": "23e90556e6b955dc64385725bc5698e3"
  },
  {
    "url": "index.html",
    "revision": "ce25ccbde3ebadeccbc209be2f6c6ee7"
  },
  {
    "url": "tag/index.html",
    "revision": "5b9d9d779b8eedd5e0257a0e0dd4c6f3"
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
