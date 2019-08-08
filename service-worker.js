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
    "revision": "e8678ecfd9cb002eb26b9c392aca8471"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "cadc276151b755008b550fd3a2ed72b5"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "aa2b8ffc076a0d340a016553c17f49aa"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "6c2e483b568a502087b3617d6778a171"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "1916f6adaf1a583fff9a7755eb17438c"
  },
  {
    "url": "404.html",
    "revision": "622fd9542cf969e8c681dfb79acdd496"
  },
  {
    "url": "about.html",
    "revision": "d81779fc8cb278feb05eac0443707a44"
  },
  {
    "url": "assets/css/0.styles.b7e69aa5.css",
    "revision": "e4bcfa73d8a1b808bbe441249a28e97a"
  },
  {
    "url": "assets/js/1.b72004ba.js",
    "revision": "9c41a2b5180354bffb6fe3a759b8aab4"
  },
  {
    "url": "assets/js/10.7bd43733.js",
    "revision": "64a22a69843888b30e03a19b594f2751"
  },
  {
    "url": "assets/js/11.66e8a31d.js",
    "revision": "6c06255b7cbeca8a24c601bb52b531ed"
  },
  {
    "url": "assets/js/12.88d486ee.js",
    "revision": "4133311a9bf002938bfb3b3b5d38df2d"
  },
  {
    "url": "assets/js/13.f3d2ff37.js",
    "revision": "10ddc070978bdf8f6687c9b245b49fe3"
  },
  {
    "url": "assets/js/14.cc44078a.js",
    "revision": "2b411d61f936feab957c7570f0549081"
  },
  {
    "url": "assets/js/3.28a4fa1e.js",
    "revision": "1e5cc322d130c645fe7c4b1bc71f09d3"
  },
  {
    "url": "assets/js/4.1bed2bfd.js",
    "revision": "96b92c7196f279d483e90cc4e3245821"
  },
  {
    "url": "assets/js/5.c7c236f1.js",
    "revision": "112e37a46d3ab00b9111f961afcc65c2"
  },
  {
    "url": "assets/js/6.44fcac8b.js",
    "revision": "208a394a0c11363aed45f1c184c1203c"
  },
  {
    "url": "assets/js/7.a7b773aa.js",
    "revision": "7798a2aa4c60ed5778058821f17270b0"
  },
  {
    "url": "assets/js/8.f18c0e1e.js",
    "revision": "78611283f08c8dab1b767e29ef9642b0"
  },
  {
    "url": "assets/js/9.71981b06.js",
    "revision": "e49477461f361de7cafdcb480f6391da"
  },
  {
    "url": "assets/js/app.9051ef2e.js",
    "revision": "6dd1a73d3486579dcf3e12db2b0b1cc2"
  },
  {
    "url": "category/index.html",
    "revision": "fb5ea20a2d320a1d5673a98b6c5bedc0"
  },
  {
    "url": "index.html",
    "revision": "af5968e564fc0828560d6826632e14ca"
  },
  {
    "url": "tag/index.html",
    "revision": "f39bd88654dba5f8eb9ef30f7bd9d26f"
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
