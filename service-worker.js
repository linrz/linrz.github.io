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
    "revision": "c2260e17ddde1f345a4c8fc6ba83543a"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "c52d84495bff959ae2ec6072e52b18da"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "ff9c01bb87129b5976ed69d21459ad2b"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "a1630545e126f8f27169b0133e7f15a0"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "9f555e295cc3009a5ec46197937e2154"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "8684a6eaea90946b33637cdb0df45ccd"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "223a00e22ef9bdda6b99b135d8f87d7c"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "0942c8c86b79c93ff4425f001ab02e78"
  },
  {
    "url": "404.html",
    "revision": "00d8c8ce443af190c99c6112492c3483"
  },
  {
    "url": "about.html",
    "revision": "66e0fabf1b61533f3fa8ef7041d5b774"
  },
  {
    "url": "assets/css/0.styles.08bdfdef.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
  },
  {
    "url": "assets/js/1.cd6517b5.js",
    "revision": "d820b8b321b92c44e702a228f1d18781"
  },
  {
    "url": "assets/js/10.69c42d1a.js",
    "revision": "8793e5292a68de34af0dc005738597fe"
  },
  {
    "url": "assets/js/11.bb7dd4ae.js",
    "revision": "9f76f0af11c5cae0fcf8d50c90cb7fef"
  },
  {
    "url": "assets/js/12.f22de79b.js",
    "revision": "ee4b846f4d550641e179ecd8ea893017"
  },
  {
    "url": "assets/js/13.c5c5db96.js",
    "revision": "f97849162b6a33ee6791e81ef53752d4"
  },
  {
    "url": "assets/js/14.0e065acc.js",
    "revision": "2e987009b951f1d2dc71cd4d7a545b17"
  },
  {
    "url": "assets/js/15.490020ae.js",
    "revision": "5fe951805b430961dd2bb7a45ff9bf57"
  },
  {
    "url": "assets/js/16.e4e7ee47.js",
    "revision": "5a45b479cdb826430efbc634268f178e"
  },
  {
    "url": "assets/js/17.69773d0e.js",
    "revision": "335842e29f3a8f08aa4955dce3ad77e0"
  },
  {
    "url": "assets/js/18.ce78b8fa.js",
    "revision": "3c6bd21703bb9c52248ae862d31f219a"
  },
  {
    "url": "assets/js/3.44ff7866.js",
    "revision": "6c10c269df6be76d9c5a588d1b4fdd93"
  },
  {
    "url": "assets/js/4.3cf70c88.js",
    "revision": "e35a62d3d548d53aac1da168ad8303cc"
  },
  {
    "url": "assets/js/5.5d81cbfa.js",
    "revision": "3a1f4daa5b7f67e38131ad44eb09d18f"
  },
  {
    "url": "assets/js/6.859179a3.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.4a666cf5.js",
    "revision": "ffe86699219bfad434d5a60d4131ebb2"
  },
  {
    "url": "assets/js/8.1d7f7843.js",
    "revision": "e89febcef4744b88c2fd528bd3e9fe41"
  },
  {
    "url": "assets/js/9.1bc12edf.js",
    "revision": "2a08557ee10689792f6e52ae62830d62"
  },
  {
    "url": "assets/js/app.cf16fe1d.js",
    "revision": "8bababe01b736ccbde37ec994393b084"
  },
  {
    "url": "category/index.html",
    "revision": "35f43ff1d436421a135ac85d1d006dd8"
  },
  {
    "url": "index.html",
    "revision": "9ad6703430ee8a48aa159686d42309ad"
  },
  {
    "url": "tag/index.html",
    "revision": "bd1050cb70cfd0eba8467529970d345b"
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
