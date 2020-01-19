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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_posts/a-coincidence-bug.html",
    "revision": "4948931a0d3f7f7a90f40e3129ef7ad7"
  },
  {
    "url": "_posts/berry.html",
    "revision": "13134cb74a51aaf24b31901ef60f52a6"
  },
  {
    "url": "_posts/experiences-about-generate-crud-page.html",
    "revision": "c180c78de134aa2bd06af3afa63e7f30"
  },
  {
    "url": "_posts/fastify.html",
    "revision": "aac2330857313df9dca5629d8268b46b"
  },
  {
    "url": "_posts/mac-apps-i-used.html",
    "revision": "a40a0769c479a40c8c803cf6fab63c3d"
  },
  {
    "url": "_posts/pnp.html",
    "revision": "c2f2a2c3d203f9535af279d5b85868d9"
  },
  {
    "url": "_posts/the-future-of-javascript-package-managment.html",
    "revision": "8f28f3687640775e4079cac2e47b0651"
  },
  {
    "url": "_posts/why-i-unlike-styled-components.html",
    "revision": "76f6a816d166d93a240c67eac7f0a8db"
  },
  {
    "url": "404.html",
    "revision": "c67827ad4282648fd0271810184e4ba1"
  },
  {
    "url": "about.html",
    "revision": "976159550f5cf7fdd20b8639b240fa3a"
  },
  {
    "url": "assets/css/0.styles.b173d86f.css",
    "revision": "cec546b28d6daad3883dbfa8498cc815"
  },
  {
    "url": "assets/js/1.816aba89.js",
    "revision": "ceee41a11dbc510cb0ee27c9fce8989d"
  },
  {
    "url": "assets/js/10.f895f7b4.js",
    "revision": "385a177f0c52cf2b4323945ddafd06f4"
  },
  {
    "url": "assets/js/11.fbdb9ddd.js",
    "revision": "b7a5340622b5c08203bdb2abd28d6e31"
  },
  {
    "url": "assets/js/12.b748e4cc.js",
    "revision": "cb555139d4dff0cc3775c54f98bf0415"
  },
  {
    "url": "assets/js/13.1e3f4bfa.js",
    "revision": "49c1a083ad86f18af72456627da0ba7b"
  },
  {
    "url": "assets/js/14.1f32580a.js",
    "revision": "2da85d0e8dc62249dbb7d9b99d651a39"
  },
  {
    "url": "assets/js/15.619cc64b.js",
    "revision": "d0dfde0c14875a94fd934662e7a768e3"
  },
  {
    "url": "assets/js/16.f84655cc.js",
    "revision": "7c1511a8dad6ac8f5a7d3539a9d0e3db"
  },
  {
    "url": "assets/js/17.ee6b2dc9.js",
    "revision": "63b98b9d4a160d28f5c1735064b1badb"
  },
  {
    "url": "assets/js/18.d4bc60a6.js",
    "revision": "6a0e1540fe10866756e74b99766b8b19"
  },
  {
    "url": "assets/js/19.a8abe0f1.js",
    "revision": "b40d20dbe418e30c50a3fd6bdc22d604"
  },
  {
    "url": "assets/js/3.b87e94f3.js",
    "revision": "6a36fa2f7d06d1829c10a546687b0e26"
  },
  {
    "url": "assets/js/4.2d5d22b6.js",
    "revision": "49dfb21ebb95d6747c6c1db4b2dde814"
  },
  {
    "url": "assets/js/5.e5e1e544.js",
    "revision": "d82556ed0857176eb123164aec1225d4"
  },
  {
    "url": "assets/js/6.c537053b.js",
    "revision": "3e3fb31971ef2568cc38a9cd92882da9"
  },
  {
    "url": "assets/js/7.3e97f9b5.js",
    "revision": "bfb100b6dd06aaa13eaba5ff2cdc7061"
  },
  {
    "url": "assets/js/8.4b7c23c5.js",
    "revision": "e075ae34d98b261ac16a12cb399a582e"
  },
  {
    "url": "assets/js/9.af7c893b.js",
    "revision": "cd8a2c22d985401242a065f3c7a0b9a2"
  },
  {
    "url": "assets/js/app.9dc7ba2f.js",
    "revision": "7acba14d547664551ba7eb366bed9661"
  },
  {
    "url": "index.html",
    "revision": "b57c60e1c208221f6e4d2480507b3f1d"
  }
].concat(self.__precacheManifest || []);
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
