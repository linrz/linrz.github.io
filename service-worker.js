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
    "revision": "70fe7e8d1e17ab474040e2a77669528e"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "eeb51fb51fe75fb47757e25b59f29e1f"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "f052d2fb8b31384b55653a423792d79a"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "afc59cbe6ecc3c28c33ec1a9864f05f1"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "7ebe6952d8712980121964c5dcd58df5"
  },
  {
    "url": "404.html",
    "revision": "94c828ccd4ab0a33e0aa2624f7227462"
  },
  {
    "url": "about.html",
    "revision": "2584a45d5e6b09ac828187a3a304d0cb"
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
    "url": "assets/js/10.2285d4ed.js",
    "revision": "aad7d5fd30b247f10892b20cd5ab1e45"
  },
  {
    "url": "assets/js/11.24a82956.js",
    "revision": "4da9dd97c5a15487a64d7a17f15e2d68"
  },
  {
    "url": "assets/js/12.6b1763ae.js",
    "revision": "d89ce2c05dccaa57cfc6a159b8cb1f73"
  },
  {
    "url": "assets/js/13.f09dc446.js",
    "revision": "4936bf5520751d3cfea2727dd1964f73"
  },
  {
    "url": "assets/js/14.b81f346d.js",
    "revision": "7c0a1ca24a4095895d295432e463af2f"
  },
  {
    "url": "assets/js/3.7cf7fce4.js",
    "revision": "c286908a8be36587a680cfd76f008380"
  },
  {
    "url": "assets/js/4.2bdf8611.js",
    "revision": "067c704a2435d7570cf891ea169f12fa"
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
    "url": "assets/js/8.b0f424af.js",
    "revision": "1b96521bd4b6287386a5b84fd50c2fd8"
  },
  {
    "url": "assets/js/9.3d1e0dc5.js",
    "revision": "6c97b9f01f2b200931c13f084dc1f179"
  },
  {
    "url": "assets/js/app.fe5a98a0.js",
    "revision": "db6144daf9cc516032de70d11f3d6b4e"
  },
  {
    "url": "category/index.html",
    "revision": "13b3bf7f1a676796c91c41670eb18a76"
  },
  {
    "url": "index.html",
    "revision": "32a37a9e3ecfe23068d5d4800182bc45"
  },
  {
    "url": "tag/index.html",
    "revision": "08d88aaa242be8be010d828576ecc573"
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
