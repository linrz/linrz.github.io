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
    "revision": "fc5cd6cdfbf6fb623fd743b6203f59a2"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "74d1110fca8c450b47d110103ccf7a91"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "736aa3416392f9964bddb6025c175b77"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "8049af0eb1645eafe08c9ed227404381"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "d4931d5cd5f33f91d4fd3cfd83e8e314"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "e40d57d5f956241bfa40a0556a9af968"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "48442ba132988484d7573b0598502fd4"
  },
  {
    "url": "404.html",
    "revision": "392927973b9a5b1b643d89243c440361"
  },
  {
    "url": "about.html",
    "revision": "072ddab3dd8fdcca3ddc8ffb6e1ca06c"
  },
  {
    "url": "assets/css/0.styles.b6c88d7e.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
  },
  {
    "url": "assets/js/1.7c7b12f8.js",
    "revision": "9b51e98946fbe81620f8a829db450a17"
  },
  {
    "url": "assets/js/10.a762579d.js",
    "revision": "dd59b812bee3913488489e9bfd106def"
  },
  {
    "url": "assets/js/11.c312b98a.js",
    "revision": "8aa215ac2179a4995a1e017eb7930a8f"
  },
  {
    "url": "assets/js/12.c614e21d.js",
    "revision": "60b41c7d32732557b36782ef873d8b0d"
  },
  {
    "url": "assets/js/13.e40e9f22.js",
    "revision": "bfb8941b283018ec880e31d60bbeb69c"
  },
  {
    "url": "assets/js/14.a6ec0d82.js",
    "revision": "66786f82ef8ec85270f0f248cefd9b3d"
  },
  {
    "url": "assets/js/15.254e3617.js",
    "revision": "66c58c9e93c14bf26bf61646b857b43b"
  },
  {
    "url": "assets/js/16.289daecc.js",
    "revision": "6af645984ee19fb7084b3efb32067b85"
  },
  {
    "url": "assets/js/17.d83f1c5c.js",
    "revision": "01611aaffdea9975d0fde932e7ffcbed"
  },
  {
    "url": "assets/js/3.dc1c2401.js",
    "revision": "a6a992564022b11c0886563a26a0d5fe"
  },
  {
    "url": "assets/js/4.fd21ea3e.js",
    "revision": "7cdc58718630dfc0640f4f11afc76978"
  },
  {
    "url": "assets/js/5.66f411b6.js",
    "revision": "cb3df9bd677424f27c1340ae84486f50"
  },
  {
    "url": "assets/js/6.859179a3.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.cb314d70.js",
    "revision": "eb9e0c2f03122244041b7e26d362dc76"
  },
  {
    "url": "assets/js/8.831a22c2.js",
    "revision": "8b52a5c98802bdbd39842bc0dd51087d"
  },
  {
    "url": "assets/js/9.56bf6e4a.js",
    "revision": "dd1c28b4c2eb652d402d2ec546dc1d4a"
  },
  {
    "url": "assets/js/app.81e5d9a8.js",
    "revision": "2309ddea2899137d81041fbb8fd77921"
  },
  {
    "url": "category/index.html",
    "revision": "f1251679a54d452d2d64e02d85151587"
  },
  {
    "url": "index.html",
    "revision": "95d3b095fc35e1fd625c7167d4a70bdd"
  },
  {
    "url": "tag/index.html",
    "revision": "1ed57635fe5464dd5356edd57f621244"
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
