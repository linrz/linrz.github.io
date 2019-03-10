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
    "revision": "8a5f06c5ebd21a2eeaa6dab6bd86189f"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "959ff5b1402f128ade839db1db0f4694"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "0e25defbfb85f650abcbce304d938a87"
  },
  {
    "url": "404.html",
    "revision": "ed972dd77961eb054b088429f2e18a21"
  },
  {
    "url": "about.html",
    "revision": "27c855062b8956063831b11c5092cc5f"
  },
  {
    "url": "assets/css/0.styles.fa24b528.css",
    "revision": "ac3f18758a2b02530a6c5111cdf0b0da"
  },
  {
    "url": "assets/js/1.b72004ba.js",
    "revision": "9c41a2b5180354bffb6fe3a759b8aab4"
  },
  {
    "url": "assets/js/10.37817de7.js",
    "revision": "106cf2fb236b1aece1e3bdbfaa0d93f0"
  },
  {
    "url": "assets/js/11.6e77b334.js",
    "revision": "853425358368c13999213acdd1eeebe3"
  },
  {
    "url": "assets/js/12.8324e8ad.js",
    "revision": "f3248314ff8b13b5a1354b26e2af9707"
  },
  {
    "url": "assets/js/3.dff09a4a.js",
    "revision": "977b7b2471666af8af2fd8307b3c172f"
  },
  {
    "url": "assets/js/4.79a89852.js",
    "revision": "b34985096997457c9410e8879488cfb1"
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
    "url": "assets/js/7.9697af39.js",
    "revision": "175403583a18cf24911ca74b574ba251"
  },
  {
    "url": "assets/js/8.0c500e35.js",
    "revision": "f7cf55710e2a5f5a71366aa0c7ea2e03"
  },
  {
    "url": "assets/js/9.8cb24783.js",
    "revision": "c3b0ef2185e7aa3feb433b83a35a53f7"
  },
  {
    "url": "assets/js/app.a2fa72b7.js",
    "revision": "7afa4f265cb5e169e3b414142c776fd5"
  },
  {
    "url": "category/index.html",
    "revision": "c0ec5ee7258146ed64cbf61932628ed2"
  },
  {
    "url": "index.html",
    "revision": "38c844be035b30f288aa81aa501946e4"
  },
  {
    "url": "tag/index.html",
    "revision": "591af2b1e7db418c7807abb69869a824"
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
