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
    "revision": "b65fbd9b4a769b09ce80b071c6d67814"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "e2df8cd31e4ba0d006d718c62f78c546"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "35e42937dc96718af0850e8cdd0555b7"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "33b1d23d3e7e0a0e06827a27420d45cb"
  },
  {
    "url": "404.html",
    "revision": "462a7787c9ab5a96e012e287719a7e23"
  },
  {
    "url": "about.html",
    "revision": "dfdb8dab993e07268e05152979d6e163"
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
    "url": "assets/js/10.ef440e79.js",
    "revision": "07f3e27f1ead09af7ef1788b0f04821a"
  },
  {
    "url": "assets/js/11.ee7a639b.js",
    "revision": "bb2f8124c3b017968c066d4775cdb17c"
  },
  {
    "url": "assets/js/12.22a701d8.js",
    "revision": "f5b2774adb17241cc308e229f85a3d3b"
  },
  {
    "url": "assets/js/13.69259fb6.js",
    "revision": "be3097d5efc2ed5173ffdf825dba5cc9"
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
    "url": "assets/js/7.7033ff8c.js",
    "revision": "bb6a75ba492dd26d1da5c18508be86af"
  },
  {
    "url": "assets/js/8.b046ffeb.js",
    "revision": "78d8cec4e9d620cce21eaceaa90c24c0"
  },
  {
    "url": "assets/js/9.70a20a6c.js",
    "revision": "a91b0948a4babc9cb5ca473b87db561e"
  },
  {
    "url": "assets/js/app.267581ce.js",
    "revision": "8d929481099ae18e6c8aafd91ac3b49e"
  },
  {
    "url": "category/index.html",
    "revision": "fa6604d212590a2f8639175c5666fe25"
  },
  {
    "url": "index.html",
    "revision": "5c798afd2d55af5e3b4d567f376b344e"
  },
  {
    "url": "tag/index.html",
    "revision": "2e2ecfa16b2fed535457037d7239826a"
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
