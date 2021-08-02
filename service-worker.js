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
    "revision": "b7fa45509f1718420e20cb881aea2b31"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "22f8c53e8df1c13160b2efa106586fdf"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "c8185f7fdfa95b140857446711349eef"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "fe26b8d35aa0ed39148513709d888fdd"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "a4ef13e1bd736a909d522c61000e17e0"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "d3ee8bac90b99fcf2972e20a04e34bf1"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "a5f6dcacc2fcd6ea73124e8ce0a5611f"
  },
  {
    "url": "2021/07/30/futures-contract-thinking/index.html",
    "revision": "764d8098c916f33cc1d930dab76e9e84"
  },
  {
    "url": "404.html",
    "revision": "91fca1a912679dddfb5e843742703665"
  },
  {
    "url": "about.html",
    "revision": "6bce08568f0e21c4b58b08c3862bc3c3"
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
    "url": "assets/js/10.5639b365.js",
    "revision": "77dd74b9ee46aea988d323ed323ab11f"
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
    "url": "assets/js/app.ec808632.js",
    "revision": "ac6743179a1d96d9f29f075b066c54b4"
  },
  {
    "url": "category/index.html",
    "revision": "c9107df35c064ce89bc014ce6e0fb0ac"
  },
  {
    "url": "index.html",
    "revision": "f8a6ebf6e7a8eb7baaf22cb74046bbfc"
  },
  {
    "url": "tag/index.html",
    "revision": "9babdaf390fed7c6c9455465834226f5"
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
