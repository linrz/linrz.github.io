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
    "revision": "bed1fdb7414d7ed3f54aed12c2f8f04f"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "37063c7c3632aed2f9903019be814ed5"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "b9a351f7cb45eda7df3ca068d8eff451"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "4e6d9c542402ef7aca416f3cc9fac377"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "2b14f9f192fbd50ef5dc01ab48f1783f"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "8362598657fc92bee422892a98d86813"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "9a91907ca16197bb0ac5a313fc7505e6"
  },
  {
    "url": "404.html",
    "revision": "aadf613502043718e629936d9eed6521"
  },
  {
    "url": "about.html",
    "revision": "e82cde2d004b1d8f975fcdad7be9e019"
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
    "url": "assets/js/10.6eb9d6d4.js",
    "revision": "e13decd40b374eca52ed74d512e36c31"
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
    "url": "assets/js/14.20871920.js",
    "revision": "817ce182b2f3979635afce167cdeb1e7"
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
    "url": "assets/js/app.4b58ee25.js",
    "revision": "ab9ebd64681bb14037e97dbbe374b7cc"
  },
  {
    "url": "category/index.html",
    "revision": "d66e7a2745e9b5bcfe88b59e78bd5791"
  },
  {
    "url": "index.html",
    "revision": "73ffcd8ef4b8b6f22c121b2492da3155"
  },
  {
    "url": "tag/index.html",
    "revision": "b114db46189b59a48cc2ecfdf1629811"
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
