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
    "revision": "b237de2cc6fbab15168cf2b9b6298bc7"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "3ed0e646d5cc69dbfb1724039655320a"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "424cda80f80470b3c5ef7e79b90bf3ef"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "ed63f0ee44c1aafb1d9c1e840c73606e"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "66fe4964473222916fb85b2d5ae8fa03"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "2c9b684a3dafab688c0e0cc1a743be5a"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "62342cf84ec0ce5bffffe056f4a557a2"
  },
  {
    "url": "404.html",
    "revision": "ab6706452d48a1f1b00b5aa44405a119"
  },
  {
    "url": "about.html",
    "revision": "eb733e9712d174ce8337db080c6a43fb"
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
    "url": "assets/js/10.899322a4.js",
    "revision": "bfa4141079e89b1c2f5e5e2365d8c7e7"
  },
  {
    "url": "assets/js/11.c312b98a.js",
    "revision": "8aa215ac2179a4995a1e017eb7930a8f"
  },
  {
    "url": "assets/js/12.d1f168a1.js",
    "revision": "662df7d3ad1fc4ddfb9e123f0b07dce8"
  },
  {
    "url": "assets/js/13.a6b83ea2.js",
    "revision": "67d416cf285dac15d31a69cf2e579f93"
  },
  {
    "url": "assets/js/14.5af8e07c.js",
    "revision": "817ce182b2f3979635afce167cdeb1e7"
  },
  {
    "url": "assets/js/15.e2f1ed88.js",
    "revision": "c062192415a6ff11760a7cdc04cf4efc"
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
    "url": "assets/js/5.e6443b28.js",
    "revision": "6a1341988d217fea98050f3608c768c3"
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
    "url": "assets/js/8.de6c10fd.js",
    "revision": "40880b76cfdad8940de733a486b5eadb"
  },
  {
    "url": "assets/js/9.d8700267.js",
    "revision": "668ee97db3a0fd08079a12cca8922ea6"
  },
  {
    "url": "assets/js/app.897b6aab.js",
    "revision": "6749ac20b4b90b33e0c58e8ec41b16cf"
  },
  {
    "url": "category/index.html",
    "revision": "e0523fe07f65479efdc4ad2a52715b07"
  },
  {
    "url": "index.html",
    "revision": "771e5d258e542f95dc3cb8762d028a81"
  },
  {
    "url": "tag/index.html",
    "revision": "cce8bcac2e7c8c395b7c0f4a75e2ddf5"
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
