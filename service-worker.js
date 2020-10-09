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
    "revision": "0670b8905cfad63df9ff94b7595c4aa9"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "b2cdc5648639347db1e9669f3b95a643"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "eda4cfc8a9fbf44e6f3f097201f1c952"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "dbf63b66f13b8f2be9c393634b258955"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "2ad64463837327a05399d0cc4926e061"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "7b945143dbcce957b22c2289fce55e5d"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "32eef50f58fda83ba8ddb4dab7dddb6e"
  },
  {
    "url": "404.html",
    "revision": "12f827373e442853c3f1b4525ca7628c"
  },
  {
    "url": "about.html",
    "revision": "77eae66ddcefedd55efea7ad6fd6ab33"
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
    "url": "assets/js/14.632276d8.js",
    "revision": "43be11dcac1ff68839193e35814aeaac"
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
    "url": "assets/js/app.9e8ffa34.js",
    "revision": "2061144ff1fe7145e73d0c6d759fcedd"
  },
  {
    "url": "category/index.html",
    "revision": "82a820678dc91cf3c3c05987b9685468"
  },
  {
    "url": "index.html",
    "revision": "a0ba3d2f7dbf67b89f4a5594bdbb3ecd"
  },
  {
    "url": "tag/index.html",
    "revision": "44714ae92927936c0b97f261b973fa4a"
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
