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
    "revision": "304e004e3bf0e62b4587ddbc89f998ca"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "1512a6ea205eed470369d6b24ee88cc6"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "35647200ad7fc0ab3d136624ea570a99"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "5a7fc3d8365caca3d04edef34d037957"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "30369fb5c5d25f3e23cdbf68c049716e"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "1cff819f4d2e592286e279ef17e3ed7f"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "4c9b90eb0fc7a045d54230dea7ad2ef2"
  },
  {
    "url": "2021/07/30/futures-contract-thinking/index.html",
    "revision": "a1954831246365a15971fe75c117bf22"
  },
  {
    "url": "404.html",
    "revision": "71b4d7c6d77ea36dca788fd2d42dd453"
  },
  {
    "url": "about.html",
    "revision": "96395938157aaed0084d8865331fc437"
  },
  {
    "url": "assets/css/0.styles.512e5bbc.css",
    "revision": "9e9be70aa6ffb18ad715d63c1aabbc66"
  },
  {
    "url": "assets/js/1.8542a20b.js",
    "revision": "0f63e7fc34036b23e895a66c580e714b"
  },
  {
    "url": "assets/js/10.4edbee5b.js",
    "revision": "6950f6e86b46e805eb536ec7de845c2e"
  },
  {
    "url": "assets/js/11.59d597e2.js",
    "revision": "6a780064eb7deca05605e552e865403e"
  },
  {
    "url": "assets/js/12.3c7137f8.js",
    "revision": "0df75827e0fc63e1c3bc86492ed71445"
  },
  {
    "url": "assets/js/13.eaeb37f9.js",
    "revision": "b8037148bf9f505ed8db39c1a0a5f241"
  },
  {
    "url": "assets/js/14.0f5eab2e.js",
    "revision": "df5f3f18364cffb80f424abf9451145c"
  },
  {
    "url": "assets/js/15.373df0d1.js",
    "revision": "2541292cbc6e487b6ed6f2df5714b5d1"
  },
  {
    "url": "assets/js/16.43ab7a84.js",
    "revision": "a0db796a3182387593f36bcfc1bf1b98"
  },
  {
    "url": "assets/js/17.701651da.js",
    "revision": "ac129ba4d18bcfba6d424a12b5e21a24"
  },
  {
    "url": "assets/js/18.ce78b8fa.js",
    "revision": "3c6bd21703bb9c52248ae862d31f219a"
  },
  {
    "url": "assets/js/3.927028a0.js",
    "revision": "a9baf6178be9957d5f03337ad4a5194c"
  },
  {
    "url": "assets/js/4.647d42a0.js",
    "revision": "cf8d1ab02066030d9df5bc2977663979"
  },
  {
    "url": "assets/js/5.ee14f746.js",
    "revision": "e2899026eeb10d67ddf32471d68f1e1c"
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
    "url": "assets/js/app.827818aa.js",
    "revision": "5b9863f77638d6b452e4fc2f64e27303"
  },
  {
    "url": "category/index.html",
    "revision": "454083dddeec4f244e59c96218e443c3"
  },
  {
    "url": "index.html",
    "revision": "a90ca33509bde389973d6939a144d933"
  },
  {
    "url": "tag/index.html",
    "revision": "0c15811da5d9bdcafcae6580d8b0c04a"
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
