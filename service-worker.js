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
    "revision": "c4185b720a4086dfbc2023944c14b1d2"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "97fcf9284c08c7570cd1ae085c495a45"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "66eecd44594518ee59da4b22e1ac4e08"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "839a91a88b9072262b3aff8ba0f29d86"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "8a130405aa5068aab14f4838b25dda27"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "92ca3989e7fc4162b760754336406155"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "12cc62b191702d7a151a2c9203c276dd"
  },
  {
    "url": "404.html",
    "revision": "5afa83dd67c50bd7f6ec5fcd12b73f0e"
  },
  {
    "url": "about.html",
    "revision": "7be2a09e713f46a5631ed1ebf148e679"
  },
  {
    "url": "assets/css/0.styles.b7e69aa5.css",
    "revision": "e4bcfa73d8a1b808bbe441249a28e97a"
  },
  {
    "url": "assets/js/1.b72004ba.js",
    "revision": "9c41a2b5180354bffb6fe3a759b8aab4"
  },
  {
    "url": "assets/js/10.59b04991.js",
    "revision": "38ec2bd9cc9195f0955399683835b956"
  },
  {
    "url": "assets/js/11.d72ae751.js",
    "revision": "89c8022bf952d9e59a0168b713e030b3"
  },
  {
    "url": "assets/js/12.9a9fd5e4.js",
    "revision": "283a898915e47365d5337cca1e33b931"
  },
  {
    "url": "assets/js/13.bddbc550.js",
    "revision": "089b27670493332aa4c52f5e42868d4e"
  },
  {
    "url": "assets/js/14.5492ce00.js",
    "revision": "b71fa688de298f58c8d7c6eb78cc7f76"
  },
  {
    "url": "assets/js/15.18bf4773.js",
    "revision": "a15e4ff10c94c928b281b688e8137367"
  },
  {
    "url": "assets/js/16.20de91d8.js",
    "revision": "8cec39311834ca30c996cd8f9cd3df82"
  },
  {
    "url": "assets/js/3.28a4fa1e.js",
    "revision": "1e5cc322d130c645fe7c4b1bc71f09d3"
  },
  {
    "url": "assets/js/4.1bed2bfd.js",
    "revision": "96b92c7196f279d483e90cc4e3245821"
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
    "url": "assets/js/7.d4dbd4dd.js",
    "revision": "6bfb96cb6b267485b13f2c76d81f6aa3"
  },
  {
    "url": "assets/js/8.8f2e1857.js",
    "revision": "cfd250ca234371018fd4b3499f6a19c8"
  },
  {
    "url": "assets/js/9.8dd29d15.js",
    "revision": "b080f7381182efcb337e91a066d002a9"
  },
  {
    "url": "assets/js/app.64e64e27.js",
    "revision": "5bca49001b2d915bc2b8d34bc334af94"
  },
  {
    "url": "category/index.html",
    "revision": "4ec444f530fdc8e86f0c4fc25b999b49"
  },
  {
    "url": "index.html",
    "revision": "7c402394e85ff97fea6a83eaac85d435"
  },
  {
    "url": "tag/index.html",
    "revision": "4d5f00d829bc8d3e05fde98a739b9359"
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
