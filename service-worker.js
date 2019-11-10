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
    "revision": "574e3fbb2450805a3777eb6d7d4707ac"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "202c12c623722c2708ab8e06452c28db"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "895049e4fc525dc51ce5d379754c941d"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "04691ebd31235905db1819b8141540df"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "6c660bf35ec826f0bb657b1b889631ad"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "87a5c0d716f9b21b24df34c035500a94"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "a6b50385390324058b40adc9a0898e20"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "2423c260a58f1dd2a05e610f00054885"
  },
  {
    "url": "404.html",
    "revision": "37acdd3db0de3f6e0fa90080af312046"
  },
  {
    "url": "about.html",
    "revision": "64fe78f4add4ed1ba5f93ed2d030afa0"
  },
  {
    "url": "assets/css/0.styles.acc6a2b2.css",
    "revision": "28fafdca47c7b898844ff20f84e5f095"
  },
  {
    "url": "assets/js/1.c3becc9f.js",
    "revision": "d4dbd5c9b1eff3e5b1e7927a0d3bef7f"
  },
  {
    "url": "assets/js/10.d56f6661.js",
    "revision": "68e9bb21232f0074499bf32588e9949a"
  },
  {
    "url": "assets/js/11.fb5f77c3.js",
    "revision": "c65cf109dbecba5d4edde585f83480a1"
  },
  {
    "url": "assets/js/12.0a63a870.js",
    "revision": "f14d1b235151b5af65b8aa1818861740"
  },
  {
    "url": "assets/js/13.4b8c6211.js",
    "revision": "2f56f32fc6e60f20258f535f55a1ca0c"
  },
  {
    "url": "assets/js/14.ecfe77ef.js",
    "revision": "443249715f5eda46f9e16af7baad5fd1"
  },
  {
    "url": "assets/js/15.ad276c1c.js",
    "revision": "871f7ef51ce7db555a2233b1a6dadf94"
  },
  {
    "url": "assets/js/16.bf6ce550.js",
    "revision": "4bfc333010239a7377d0adcb9ca920e9"
  },
  {
    "url": "assets/js/17.7a99240a.js",
    "revision": "7c43cdf1eda4e392376c4b93f5126b82"
  },
  {
    "url": "assets/js/3.2679e287.js",
    "revision": "a9852d81db09677e39fc2691fcdc1780"
  },
  {
    "url": "assets/js/4.b37e7fdf.js",
    "revision": "708369313a4d759e09c6e9848233dd09"
  },
  {
    "url": "assets/js/5.57eef5f1.js",
    "revision": "2aad688770ccc4fe6226d6f77abae28a"
  },
  {
    "url": "assets/js/6.44fcac8b.js",
    "revision": "208a394a0c11363aed45f1c184c1203c"
  },
  {
    "url": "assets/js/7.2fd78d9b.js",
    "revision": "a14db15025954ede3d773cfbc65d9308"
  },
  {
    "url": "assets/js/8.854dbf3e.js",
    "revision": "d9f0d07a42d103b41709faa7a01ebd2a"
  },
  {
    "url": "assets/js/9.2f1d8b89.js",
    "revision": "b7e67c095d890dd720e1706c1540fc78"
  },
  {
    "url": "assets/js/app.cc523793.js",
    "revision": "d9dc33ca0b81a36fdea9832ab201eb76"
  },
  {
    "url": "category/index.html",
    "revision": "3378b76d1668c41774b6a0d1acbc3f95"
  },
  {
    "url": "index.html",
    "revision": "6e329ad2f8a27cd5ef593299ce291a86"
  },
  {
    "url": "tag/index.html",
    "revision": "9d6bc8d46ac1b445e712323cfd528383"
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
