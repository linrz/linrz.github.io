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
    "revision": "70a78ba416ff210aaf698a29d179d7f9"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "1cf74b42f826adbe62b60f98d99ec16a"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "d41542b6034fef5a176ba25da6d83cb7"
  },
  {
    "url": "404.html",
    "revision": "218dcfac1400928bfa43ad232b7f27a7"
  },
  {
    "url": "about.html",
    "revision": "ed9c57bf3c21665aaef4add20c4bd7b2"
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
    "url": "assets/js/10.08d8bf5e.js",
    "revision": "cb63d6552f2033d1cba147c6a027ea2d"
  },
  {
    "url": "assets/js/11.e8d04f16.js",
    "revision": "cdd59e6c8f54fb54f82cd2f2c38ee420"
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
    "url": "assets/js/7.b8320bc4.js",
    "revision": "86f3bb47bd459ad55254fb1bdf952999"
  },
  {
    "url": "assets/js/8.dea036d2.js",
    "revision": "85dbbc117394057fd491a0bec35fe8ed"
  },
  {
    "url": "assets/js/9.8cb24783.js",
    "revision": "c3b0ef2185e7aa3feb433b83a35a53f7"
  },
  {
    "url": "assets/js/app.f51d3a57.js",
    "revision": "d066b915b5a1a82f5df1d71197378de9"
  },
  {
    "url": "category/index.html",
    "revision": "2fbeb4307b33f028914a624cc5425295"
  },
  {
    "url": "index.html",
    "revision": "8633f9944f5db358ac55d5d71e1c9c90"
  },
  {
    "url": "tag/index.html",
    "revision": "b64e0487db90e22c2a7665faf99ab7b6"
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
