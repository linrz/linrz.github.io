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
    "revision": "2d2b2f1bf8b9031892a6233fce6f8e87"
  },
  {
    "url": "2018/05/14/why-i-unlike-styled-components/index.html",
    "revision": "60ca8c2e776d70e1ce4e5f229a3c1033"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "3e5cbd947055cf96640f91ae4ef26f4f"
  },
  {
    "url": "2019/03/20/berry/index.html",
    "revision": "0253d6b005f6d184cda960ddfd1cc01d"
  },
  {
    "url": "2019/08/08/mac-apps-i-used/index.html",
    "revision": "0cdc71d9ef5893134981fcc2f77b5e19"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "05e57912747e71cd98aa31ba44a05727"
  },
  {
    "url": "2019/11/10/the-future-of-javascript-package-managment/index.html",
    "revision": "2481fbd8f72dcdfbae27f1ca331a0472"
  },
  {
    "url": "404.html",
    "revision": "a690a6c3bc94b16ba0e282cbea2f29fb"
  },
  {
    "url": "about.html",
    "revision": "a33082b5c3c0c98cc7c7fa884473276c"
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
    "url": "assets/js/app.2a56bcd4.js",
    "revision": "cc7fa23dc25cef8e79e9ce2aeb0777ba"
  },
  {
    "url": "category/index.html",
    "revision": "8963f4869a91b69758aa87b16f70ac56"
  },
  {
    "url": "index.html",
    "revision": "27f9aeefe9a5e99c612ba543172a1227"
  },
  {
    "url": "tag/index.html",
    "revision": "f2a640c853f7ea0c6f7c4284acb97e84"
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
