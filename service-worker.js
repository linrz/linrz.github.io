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
    "revision": "f32aa6dcbf2839c38d6d12c0a4b95abb"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "c94f9367152ab9ad466db28f13e47ffc"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "904ec9f03f2b2232ca7a1781369e1687"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "07d4e7ee71b38c5e47884dc7805c853d"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "5778351ff9886fca3ba35ca4d93a3455"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "98556bba897fbb02b9d10e96209ef68c"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "65b94008a08f39f691486796fb4cceed"
  },
  {
    "url": "404.html",
    "revision": "977ba3b02c9e59a924e3dc48c4f595cf"
  },
  {
    "url": "about.html",
    "revision": "8bd5be1783fc1d291a98910677e4575f"
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
    "url": "assets/js/app.3ddb82df.js",
    "revision": "558fd3de52cfc561f653caa38155b5b4"
  },
  {
    "url": "category/index.html",
    "revision": "82b316985be45cd5c67c5a3ac9b929d2"
  },
  {
    "url": "index.html",
    "revision": "cc1832aee9ed4cd7f23c47f257c19adb"
  },
  {
    "url": "tag/index.html",
    "revision": "503a9ff138d35f61bd5e99c132c14d3f"
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
