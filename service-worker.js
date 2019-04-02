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
    "revision": "5c3c0533fce405c1fb0df3874a141bde"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "5a3aee2208d6dbc04c5b4621dabce1de"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "0b82802eb7d19e001c8f3ad23bf98277"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "f2b9112b9c13a172b7fec003f6de8f42"
  },
  {
    "url": "404.html",
    "revision": "e1e829bebef14e42ce70bf7022e27f4f"
  },
  {
    "url": "about.html",
    "revision": "ab00d1927d096f218109005606a8b782"
  },
  {
    "url": "assets/css/0.styles.76d619d9.css",
    "revision": "993313f631472ca1350396b7d4e00777"
  },
  {
    "url": "assets/js/1.e1ad31da.js",
    "revision": "e7f42650b7d1afbcc945d14f2708d58f"
  },
  {
    "url": "assets/js/10.d9adf73b.js",
    "revision": "9eabe1e8dcd0f4bd4e93888ef8e16a2c"
  },
  {
    "url": "assets/js/11.3b588a40.js",
    "revision": "752951965e511756d194bd66d8ede1f7"
  },
  {
    "url": "assets/js/12.38237df5.js",
    "revision": "263806b75e207caf1c5bef41b28968a7"
  },
  {
    "url": "assets/js/13.51e3554d.js",
    "revision": "6b8c3e9f1ccfce733710de6e0920ff4c"
  },
  {
    "url": "assets/js/3.f7b3f5da.js",
    "revision": "6ef9099ab69cc9fac5ac36203cfd9ea0"
  },
  {
    "url": "assets/js/4.61bf351f.js",
    "revision": "127ed00667b784ac109711f94d7fb2ae"
  },
  {
    "url": "assets/js/5.1c548fdf.js",
    "revision": "6f606674f93d9785f445122baef689fa"
  },
  {
    "url": "assets/js/6.6cb7d486.js",
    "revision": "c8a617f895811aa64bab4daffeac8c86"
  },
  {
    "url": "assets/js/7.b894f099.js",
    "revision": "59b7aea84fcc797c9b61bd3b967dbdac"
  },
  {
    "url": "assets/js/8.3d7e0c42.js",
    "revision": "ec2b070a8b8c104b619ea4fca9ede968"
  },
  {
    "url": "assets/js/9.09606c21.js",
    "revision": "03e67ea987f9e97aa2c8b7ac1bd8bcf7"
  },
  {
    "url": "assets/js/app.6281547f.js",
    "revision": "ae80e26699b44b4f82e80568d9ce79e3"
  },
  {
    "url": "category/index.html",
    "revision": "529e3de0441bb505060ca2b4091cc48b"
  },
  {
    "url": "index.html",
    "revision": "0a6105959fad0d6c5950850de9a458eb"
  },
  {
    "url": "tag/index.html",
    "revision": "ee0503d5b4dad03e722f268107a78cb8"
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
