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
    "revision": "44c3403bedca7712e3f5ac873f70a4f5"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "d30ed297d0e8827c27c49b519765945c"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "6547dd842d511b2e7ac2ce8d123ef067"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "9215866db6b716d6fda7c0e0fbafdf5c"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "88320912d97e2ccf919d3a45e111fa2e"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "8c63aecbd17d84aa28e1f4d1a941658c"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "ce518699c63d334e14c9772afae92b98"
  },
  {
    "url": "404.html",
    "revision": "4b5ec130c84deb41e8b47fb184a76fc2"
  },
  {
    "url": "about.html",
    "revision": "b7e89f368b949deabe894c35b3c327cb"
  },
  {
    "url": "assets/css/0.styles.b6c88d7e.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
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
    "url": "assets/js/3.6f5a8b67.js",
    "revision": "b54f13478571c4dcf91e5edf922f4507"
  },
  {
    "url": "assets/js/4.bbe48830.js",
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
    "url": "assets/js/app.027af693.js",
    "revision": "10e39749046c9592b179d6342a710412"
  },
  {
    "url": "category/index.html",
    "revision": "4aa67221b169dc8f73d7426935b58496"
  },
  {
    "url": "index.html",
    "revision": "477192277af682ab10959fb86c2cea5d"
  },
  {
    "url": "tag/index.html",
    "revision": "1d9190981260fc65108bd17f4480f247"
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
