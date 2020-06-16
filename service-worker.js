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
    "revision": "15ec944827b71f23fb352de8bb68e166"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "3572313be9f02cd631649f2fb7aa438c"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "42a52058f3aab1a4c68b8aa1143629e3"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "28f44263c21a439959c26048de94c747"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "1280ecccc5f4b5e0e8e85b22a04e55cd"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "c2452413a7f751e12552305492e04208"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "61dc3910949ed13c41fb78c0232bf39c"
  },
  {
    "url": "404.html",
    "revision": "f5a85550c6fdbf264778861c22d57611"
  },
  {
    "url": "about.html",
    "revision": "b219b416a583e7149f52e14f1224a769"
  },
  {
    "url": "assets/css/0.styles.cc86088b.css",
    "revision": "1b08f5d54153db433765d7c264bf44b9"
  },
  {
    "url": "assets/js/1.7e47b4fd.js",
    "revision": "bad82968441aa38a01852ac310f96841"
  },
  {
    "url": "assets/js/10.6eb9d6d4.js",
    "revision": "e13decd40b374eca52ed74d512e36c31"
  },
  {
    "url": "assets/js/11.a142cc10.js",
    "revision": "58037eb99a4bab787bd7cfdf2a92faf9"
  },
  {
    "url": "assets/js/12.c461d99e.js",
    "revision": "0a0ea97dfbb8a0ce4879eacad64204f3"
  },
  {
    "url": "assets/js/13.594204c6.js",
    "revision": "bfb8941b283018ec880e31d60bbeb69c"
  },
  {
    "url": "assets/js/14.20871920.js",
    "revision": "817ce182b2f3979635afce167cdeb1e7"
  },
  {
    "url": "assets/js/15.0d1dc80d.js",
    "revision": "c062192415a6ff11760a7cdc04cf4efc"
  },
  {
    "url": "assets/js/16.16b00678.js",
    "revision": "44057e07d28ac94daca0b699b865e0fb"
  },
  {
    "url": "assets/js/3.f9025c7d.js",
    "revision": "bbf3896c7cfcb78fa796954e09777f60"
  },
  {
    "url": "assets/js/4.114e4f6a.js",
    "revision": "8d3a2c9bed5f89d12e55f2f3c29ddba6"
  },
  {
    "url": "assets/js/5.09c5af97.js",
    "revision": "6920134bfcd1f6ec4a7835ddfd351234"
  },
  {
    "url": "assets/js/6.1393234e.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.e7f03ddb.js",
    "revision": "b198b39a4790fdc6f8eafb835ba5d396"
  },
  {
    "url": "assets/js/8.0da79a76.js",
    "revision": "b9c4dfea78cecb9a7986c91c76ee23d7"
  },
  {
    "url": "assets/js/9.4f1e345b.js",
    "revision": "89ddb3409c7e6931533315ebb4fd8f5c"
  },
  {
    "url": "assets/js/app.c7e592d9.js",
    "revision": "ada4217ca7f6dbb167d2e56a1ff0c1d5"
  },
  {
    "url": "category/index.html",
    "revision": "96873a67ecc436583a4de80243433642"
  },
  {
    "url": "index.html",
    "revision": "3692016eda093632428fefae08fb1cc8"
  },
  {
    "url": "tag/index.html",
    "revision": "dd0c3ef8a0e7f6972ffc71e589681352"
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
