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
    "revision": "54ff5941e2a345d803de5e8adbb68d78"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "703ec926e460c20bf12d497616e0445c"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "c7fac436721890d85126b84a4bab7bc5"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "5f3e5c07436d8ecaf0ded93c7e54880f"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "e42e5b041bf1d67983d62243884074d5"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "7632f96d454b55fe9e742fa7c31cf72c"
  },
  {
    "url": "2019/09/30/experiences-about-generate-crud-page/index.html",
    "revision": "4d5d28958f67ee2b5acacec02c3e18bc"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "4b6b88571957a845ac958fb389b1c176"
  },
  {
    "url": "404.html",
    "revision": "19dfb3823e827e31acd731fe14203db9"
  },
  {
    "url": "about.html",
    "revision": "25cb3a38475ec62a72a6299184902255"
  },
  {
    "url": "assets/css/0.styles.b7e69aa5.css",
    "revision": "e4bcfa73d8a1b808bbe441249a28e97a"
  },
  {
    "url": "assets/js/1.e1ad31da.js",
    "revision": "e7f42650b7d1afbcc945d14f2708d58f"
  },
  {
    "url": "assets/js/10.4e728c15.js",
    "revision": "356dd2aa1ffc13fca2b03347733c8f6f"
  },
  {
    "url": "assets/js/11.52aecefb.js",
    "revision": "9137cd23fc461ee2d972d3068eef7652"
  },
  {
    "url": "assets/js/12.9cd2622e.js",
    "revision": "cac7be488c051c929ea84b70872a2d17"
  },
  {
    "url": "assets/js/13.403b7857.js",
    "revision": "22c81ce50bba71457b969cc5e15e781f"
  },
  {
    "url": "assets/js/14.4cfd1437.js",
    "revision": "f5906a4a9ee7183a09869aa186e9d6fb"
  },
  {
    "url": "assets/js/15.20cf18c4.js",
    "revision": "11f13668fbb3030b293813b205d0aae1"
  },
  {
    "url": "assets/js/16.1cbfc5d2.js",
    "revision": "cb50ac9a6409f2f8f00a8849d926f379"
  },
  {
    "url": "assets/js/17.26669c0b.js",
    "revision": "7b9da8542dd7615119e18bd4506b6d82"
  },
  {
    "url": "assets/js/3.f7b3f5da.js",
    "revision": "6ef9099ab69cc9fac5ac36203cfd9ea0"
  },
  {
    "url": "assets/js/4.61bf351f.js",
    "revision": "127ed00667b784ac109711f94d7fb2ae"
  },
  {
    "url": "assets/js/5.1c548fdf.js",
    "revision": "6f606674f93d9785f445122baef689fa"
  },
  {
    "url": "assets/js/6.6cb7d486.js",
    "revision": "c8a617f895811aa64bab4daffeac8c86"
  },
  {
    "url": "assets/js/7.e6be4cf8.js",
    "revision": "23b675c0dc583b671c1a61f0bf0d327d"
  },
  {
    "url": "assets/js/8.1971c94a.js",
    "revision": "3cb8f30f2c1fb20c578a75dbee34ab00"
  },
  {
    "url": "assets/js/9.494af437.js",
    "revision": "3d825d79abb1f81c62a8a37d35f78486"
  },
  {
    "url": "assets/js/app.0d4d0609.js",
    "revision": "cde6d492ace037fa3eb62c4863ec2aa4"
  },
  {
    "url": "category/index.html",
    "revision": "a9c7cea748a8b90df3acda04247e23ee"
  },
  {
    "url": "index.html",
    "revision": "b70bd016308fb1157682ec1bd3c5fc0d"
  },
  {
    "url": "tag/index.html",
    "revision": "250b5ad5c645cc4c62e87a727e6b9a7a"
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
