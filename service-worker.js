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
    "revision": "27d109364dc5df7f7b44b41a0583724c"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "b62b8cdcdc8681e797dcbff817ef367f"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "9bab83927cdba0eadc3d42d325a3e4ba"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "72ad4b2d178bbaf6379c6edadf60dad6"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "460cac5008c61e4fbd1bf405e99150b5"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "d03a819ead8c12ea249a6bc532a04a8e"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "728c80a9e87b3949bc25bf0d87969e70"
  },
  {
    "url": "404.html",
    "revision": "6d0bd919851fa9f006eef2a756622e23"
  },
  {
    "url": "about.html",
    "revision": "ba212a8a3add566ec58fa5a4c08fc109"
  },
  {
    "url": "assets/css/0.styles.b6c88d7e.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
  },
  {
    "url": "assets/js/1.5ac642ba.js",
    "revision": "48d7b993a3e98bba7ce14ef8affb5dff"
  },
  {
    "url": "assets/js/10.e632b6f4.js",
    "revision": "7306b4a8fc23366c83c090a31a5571ff"
  },
  {
    "url": "assets/js/11.a142cc10.js",
    "revision": "58037eb99a4bab787bd7cfdf2a92faf9"
  },
  {
    "url": "assets/js/12.c461d99e.js",
    "revision": "0a0ea97dfbb8a0ce4879eacad64204f3"
  },
  {
    "url": "assets/js/13.594204c6.js",
    "revision": "bfb8941b283018ec880e31d60bbeb69c"
  },
  {
    "url": "assets/js/14.d093becf.js",
    "revision": "cd81b4d3655333dd76dd97b41adbb564"
  },
  {
    "url": "assets/js/15.0d1dc80d.js",
    "revision": "c062192415a6ff11760a7cdc04cf4efc"
  },
  {
    "url": "assets/js/16.39c555cf.js",
    "revision": "0792599e6e7aa99d78e702fcac158761"
  },
  {
    "url": "assets/js/17.d83f1c5c.js",
    "revision": "01611aaffdea9975d0fde932e7ffcbed"
  },
  {
    "url": "assets/js/3.6f5a8b67.js",
    "revision": "b54f13478571c4dcf91e5edf922f4507"
  },
  {
    "url": "assets/js/4.bbe48830.js",
    "revision": "d1a6fb1e431266aa0177ac6ee31e73d7"
  },
  {
    "url": "assets/js/5.533ef7bb.js",
    "revision": "0833603d4cd52dc5a3f13cb8d236938d"
  },
  {
    "url": "assets/js/6.1393234e.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.e7f03ddb.js",
    "revision": "b198b39a4790fdc6f8eafb835ba5d396"
  },
  {
    "url": "assets/js/8.0da79a76.js",
    "revision": "b9c4dfea78cecb9a7986c91c76ee23d7"
  },
  {
    "url": "assets/js/9.4f1e345b.js",
    "revision": "89ddb3409c7e6931533315ebb4fd8f5c"
  },
  {
    "url": "assets/js/app.8c2a4c71.js",
    "revision": "502768a2849caf3ed272fdda2ab5bd5a"
  },
  {
    "url": "category/index.html",
    "revision": "17d49723c6258b8f9f351c00c97b9fcf"
  },
  {
    "url": "index.html",
    "revision": "289d0a32e3fc53bb9872e04edd4ed781"
  },
  {
    "url": "tag/index.html",
    "revision": "6adb6dab145914da6c47c06819bc8c3b"
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
