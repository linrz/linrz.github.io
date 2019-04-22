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
    "revision": "289bca6779993fb469925cc81230633b"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "2baed6e367f32eff8d5eb4eeb4a5f9d0"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "f995dc2927283e4bb71e9aaa28884ffc"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "60e083c45445eb1d5639d6f39d16a9ad"
  },
  {
    "url": "2019/04/03/why-fe-do-not-write-page-tests/index.html",
    "revision": "982054ed2ac72cf374022da727f85b3e"
  },
  {
    "url": "404.html",
    "revision": "35623a975f06b8c44b8ad9053d28b2d1"
  },
  {
    "url": "about.html",
    "revision": "35b9af59fef65f88020d4191663c8415"
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
    "url": "assets/js/10.f7ed884a.js",
    "revision": "b6a0d918c5614df169ea7f5f08206e4c"
  },
  {
    "url": "assets/js/11.24a82956.js",
    "revision": "4da9dd97c5a15487a64d7a17f15e2d68"
  },
  {
    "url": "assets/js/12.36e435f5.js",
    "revision": "5637e2872e0068a4645fa577d335642d"
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
    "url": "assets/js/7.4a0cc43c.js",
    "revision": "1ee35b9e272878b9b71890358ecd1acb"
  },
  {
    "url": "assets/js/8.3d7e0c42.js",
    "revision": "ec2b070a8b8c104b619ea4fca9ede968"
  },
  {
    "url": "assets/js/9.7380e416.js",
    "revision": "0a842726c50c0c1cf02106ca719332cb"
  },
  {
    "url": "assets/js/app.04ce1edd.js",
    "revision": "dbd6c945a15d7b7e575102c321067d9b"
  },
  {
    "url": "category/index.html",
    "revision": "2935e4671a727df77ed5de25280d1f44"
  },
  {
    "url": "index.html",
    "revision": "3450c63fbcd3929973b61a1d48ae6116"
  },
  {
    "url": "tag/index.html",
    "revision": "babb82e25736421654a53a8050703592"
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
