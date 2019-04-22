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
    "revision": "fa07c4318800432fdd54fa9840886d61"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "2a0811f3534cf096876024789b65a87f"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "4e14e1f1cb3c5036fa6b2f8da2703304"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "2d7d10fc791990ed1b3081ea7ce4d328"
  },
  {
    "url": "404.html",
    "revision": "b73bf264554bed46dc28032c58d921e2"
  },
  {
    "url": "about.html",
    "revision": "369fd296cce14aead97364d26a5f6f84"
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
    "url": "assets/js/10.ac9e6ea7.js",
    "revision": "02ac863beca04d5d02522c67b32670a3"
  },
  {
    "url": "assets/js/11.3b588a40.js",
    "revision": "752951965e511756d194bd66d8ede1f7"
  },
  {
    "url": "assets/js/12.71a90547.js",
    "revision": "27258a4cd1b120e727515637eb4e492d"
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
    "url": "assets/js/7.c7048f7d.js",
    "revision": "3387d3ef7e0f02f796b7e53de9785830"
  },
  {
    "url": "assets/js/8.4e0fe973.js",
    "revision": "c1b94c281251f5b662ea9926bd0dd812"
  },
  {
    "url": "assets/js/9.7380e416.js",
    "revision": "0a842726c50c0c1cf02106ca719332cb"
  },
  {
    "url": "assets/js/app.bed4c857.js",
    "revision": "4ee91964bc1779765ef56f0fcf7b5ec4"
  },
  {
    "url": "category/index.html",
    "revision": "470d297aad4658f856eaeedcfe93c66f"
  },
  {
    "url": "index.html",
    "revision": "644fac983e3ee24182887787a099ac74"
  },
  {
    "url": "tag/index.html",
    "revision": "fcd36d29407326a798530c3c99c60e72"
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
