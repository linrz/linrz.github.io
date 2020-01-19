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
    "revision": "69a70f6620da1deb170f4b982058c07d"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "6873bef1840e6a68349cbc9aaab204d2"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "5caa132c7c8004dd37fe20fc1d5fdc6b"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "b18b55bffef8b88baf7f129a79a2b5ea"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "b7ca02e7b6b6ff8ee7ece028bc3484ff"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "293b5698b95367f85a7889b73cb1ec4c"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "be06bf0fc614e75797813614606e5eeb"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "76423230554a740ebed0f6c82c66a7d0"
  },
  {
    "url": "404.html",
    "revision": "30ea0626b224b164fe620733682762ff"
  },
  {
    "url": "about.html",
    "revision": "6846f999f9b3f5ded28f5af8385fd9e2"
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
    "url": "assets/js/11.c078216b.js",
    "revision": "df46cd3901b663ca48f7712c12eee464"
  },
  {
    "url": "assets/js/12.d9dcbd39.js",
    "revision": "b9ea5dc1bada3587fcd3c31613eb0047"
  },
  {
    "url": "assets/js/13.c5c5db96.js",
    "revision": "f97849162b6a33ee6791e81ef53752d4"
  },
  {
    "url": "assets/js/14.13bc983c.js",
    "revision": "c15762d48c0d02285b79cd316dcc03cc"
  },
  {
    "url": "assets/js/15.d0895eff.js",
    "revision": "ec85f581fea5e751a43fad9ca7f16dc3"
  },
  {
    "url": "assets/js/16.c55bc43d.js",
    "revision": "e8c9a987ca5f3201b0931ff82b53af5e"
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
    "url": "assets/js/8.000ad2a2.js",
    "revision": "05eb0c7996960d58d2ade0237596fd45"
  },
  {
    "url": "assets/js/9.62d02a8d.js",
    "revision": "f9aa37248478d9fc300cf47a94cbed00"
  },
  {
    "url": "assets/js/app.f896f474.js",
    "revision": "61a7475f8af28574f8eb2f2d4c11d3fe"
  },
  {
    "url": "category/index.html",
    "revision": "20eafdd0ace5af1b4c55c57bdc800cac"
  },
  {
    "url": "index.html",
    "revision": "7269057e933da9889bccc63bbd50d07f"
  },
  {
    "url": "tag/index.html",
    "revision": "f81ae6b7f3a8b601850c2d145474bc7c"
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
