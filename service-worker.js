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
    "revision": "4a6db4e329b65208013bc08ed53881ff"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "43453cb54f0b30fcafaa60a48550f2c8"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "446f3b8aa507ef8ec8c0e94d578e1544"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "95c9b42f838772e88565a5b5605917ff"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "0a26738b571487fded6d8e97abd85989"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "c7acb748a30ddcebca669747b73feb16"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "9587360d02cc03cbddd31973eb34a11a"
  },
  {
    "url": "404.html",
    "revision": "a67ec858051bf536c32e22d32544fbfd"
  },
  {
    "url": "about.html",
    "revision": "de2a85bdcbef455ae5bfc03dd2e3e86c"
  },
  {
    "url": "assets/css/0.styles.512e5bbc.css",
    "revision": "9e9be70aa6ffb18ad715d63c1aabbc66"
  },
  {
    "url": "assets/js/1.5ac642ba.js",
    "revision": "48d7b993a3e98bba7ce14ef8affb5dff"
  },
  {
    "url": "assets/js/10.e632b6f4.js",
    "revision": "7306b4a8fc23366c83c090a31a5571ff"
  },
  {
    "url": "assets/js/11.8ba2a7ed.js",
    "revision": "f3f099a7debeeeb640b7a7d835a59e61"
  },
  {
    "url": "assets/js/12.482f9503.js",
    "revision": "5dd86bbadf6b9b8a1c487bba209b0c0f"
  },
  {
    "url": "assets/js/13.1cd158b3.js",
    "revision": "695e59247f74b12c7056f0e43e862268"
  },
  {
    "url": "assets/js/14.4d1cb5d9.js",
    "revision": "95ab4e110caf3c6d01aae15b1665908f"
  },
  {
    "url": "assets/js/15.0d1dc80d.js",
    "revision": "c062192415a6ff11760a7cdc04cf4efc"
  },
  {
    "url": "assets/js/16.39c555cf.js",
    "revision": "0792599e6e7aa99d78e702fcac158761"
  },
  {
    "url": "assets/js/17.d83f1c5c.js",
    "revision": "01611aaffdea9975d0fde932e7ffcbed"
  },
  {
    "url": "assets/js/3.81f8a397.js",
    "revision": "b54f13478571c4dcf91e5edf922f4507"
  },
  {
    "url": "assets/js/4.5e27b4c1.js",
    "revision": "d1a6fb1e431266aa0177ac6ee31e73d7"
  },
  {
    "url": "assets/js/5.533ef7bb.js",
    "revision": "0833603d4cd52dc5a3f13cb8d236938d"
  },
  {
    "url": "assets/js/6.1393234e.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.25fdef1b.js",
    "revision": "3fbacebe50dfd2fb3931cefbafda36d3"
  },
  {
    "url": "assets/js/8.0da79a76.js",
    "revision": "b9c4dfea78cecb9a7986c91c76ee23d7"
  },
  {
    "url": "assets/js/9.2f2d4f5b.js",
    "revision": "aa7257ac4058cc14befe43417eb1422f"
  },
  {
    "url": "assets/js/app.cd520215.js",
    "revision": "f222d417616df77bb3b7d3f407424892"
  },
  {
    "url": "category/index.html",
    "revision": "df94fcb8a2a86f30531355d612c10f46"
  },
  {
    "url": "index.html",
    "revision": "2f7be8fa4cd72d9195f4b2882348e24c"
  },
  {
    "url": "tag/index.html",
    "revision": "6ab7ea5c8e9acdca179835b32cba780c"
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
