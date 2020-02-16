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
    "revision": "6f139d787956ffe8050716a1b7fb51f5"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "32376f1599be1621fee201c8c5f9f8c5"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "c1e9312662f76915353833d0b038ec1c"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "bc53ea580e6ca6fdcd5c25c12a7786f5"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "e3b6efbae05784b55ce1a5dcdfa002c4"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "9eab27d7d60ab0477233ce9e43c45f14"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "c5362cea2f9ef081e8910fbc95d92129"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "e5e4e35aaa2ecb0b7b46b3ad84b803e6"
  },
  {
    "url": "2020/02/16/imporve-report-develop-effiency/index.html",
    "revision": "b585fc394223d33a29c78d6eff7f49bf"
  },
  {
    "url": "404.html",
    "revision": "b71111c68884fee7617edb0ca11c180e"
  },
  {
    "url": "about.html",
    "revision": "a6d9cce2bc90f66e7b3fdbbe5f2240bd"
  },
  {
    "url": "assets/css/0.styles.b6c88d7e.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
  },
  {
    "url": "assets/js/1.433bbcc0.js",
    "revision": "3a31b971743682c0c8d2eea887e1e646"
  },
  {
    "url": "assets/js/10.46e46a9d.js",
    "revision": "01cf83cae1f67f5889fd53b915e169c3"
  },
  {
    "url": "assets/js/11.1ccfc468.js",
    "revision": "be5a926376308570bdcda2af94f50cc1"
  },
  {
    "url": "assets/js/12.1fc06e96.js",
    "revision": "260648efc06777bd244b74fade96d9bb"
  },
  {
    "url": "assets/js/13.9bc9143a.js",
    "revision": "ff593a348e7f9ab61111b435d9e35763"
  },
  {
    "url": "assets/js/14.4fe684df.js",
    "revision": "6296ad16ab0d59e8810504a6b9d14b05"
  },
  {
    "url": "assets/js/15.965ad640.js",
    "revision": "4f19547717d745d98a30ee498b3d5916"
  },
  {
    "url": "assets/js/16.e3875ece.js",
    "revision": "66cb0a67cffea866d7bf82b0c32d7e00"
  },
  {
    "url": "assets/js/17.9e786e39.js",
    "revision": "e7d3ff0c99705e6f063a10283799b144"
  },
  {
    "url": "assets/js/18.0815a700.js",
    "revision": "d3bbab078a0ee2cd74360e42b52fc65d"
  },
  {
    "url": "assets/js/19.2801435f.js",
    "revision": "a7da1320b3fe4f7b39ef83aa3e14b281"
  },
  {
    "url": "assets/js/3.da47f26e.js",
    "revision": "c0747bcd4f65afd12df5025a9877cd3d"
  },
  {
    "url": "assets/js/4.aec11401.js",
    "revision": "bfc11e96646ec3bf2ab94007b4d21dd1"
  },
  {
    "url": "assets/js/5.c05f2c91.js",
    "revision": "c0ebeeb05b9d31916ba10890731230cf"
  },
  {
    "url": "assets/js/6.859179a3.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.6b2711ef.js",
    "revision": "b198b39a4790fdc6f8eafb835ba5d396"
  },
  {
    "url": "assets/js/8.5a684bcc.js",
    "revision": "371817280eda9c2b197e9ba95e490ed9"
  },
  {
    "url": "assets/js/9.88f9e6be.js",
    "revision": "ba5b4f80cff97a15593fc01fbaf2199b"
  },
  {
    "url": "assets/js/app.05ce796f.js",
    "revision": "20454eb96326deff313004a7a30fe123"
  },
  {
    "url": "category/index.html",
    "revision": "272d631cd01bf2e4088f8ab4f33014cb"
  },
  {
    "url": "index.html",
    "revision": "5c83d812607300e5791a8e7bffa5e4e6"
  },
  {
    "url": "tag/index.html",
    "revision": "92a78eb8481730dc1ef3ebb22b10e8d8"
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
