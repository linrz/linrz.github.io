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
    "revision": "6aaf4825144f87435a147e24b5f2fa40"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "a2f58fc26222a551387ed9f98b1ff109"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "c378ed44ea7e438ba63c2c83b98295f6"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "db4a00a8d3915f16db0010cc14c27c6f"
  },
  {
    "url": "2019/04/03/why-fe-do-not-write-page-tests/index.html",
    "revision": "ffe52b19526ba25df549d6a71e036de0"
  },
  {
    "url": "404.html",
    "revision": "303cc84bfdf9bfb6dbc78134eb21fa56"
  },
  {
    "url": "about.html",
    "revision": "9635eb424688fcc21b83f2a997c4fd0e"
  },
  {
    "url": "assets/css/0.styles.317bd212.css",
    "revision": "9ba80b5ab9271df8365881f087406756"
  },
  {
    "url": "assets/js/1.e1ad31da.js",
    "revision": "e7f42650b7d1afbcc945d14f2708d58f"
  },
  {
    "url": "assets/js/10.608077d7.js",
    "revision": "50c57bc9e6ab771038a8b713ec4e3d86"
  },
  {
    "url": "assets/js/11.ef2c5c54.js",
    "revision": "e4c208aa8a01744a7c8bd7b4c447c9fd"
  },
  {
    "url": "assets/js/12.52cf1c53.js",
    "revision": "794eabd3fe56b1184d4605caa0e5c3b2"
  },
  {
    "url": "assets/js/13.7706ffad.js",
    "revision": "3425ffdf7f940ae8194414ab64d4ad94"
  },
  {
    "url": "assets/js/14.b81f346d.js",
    "revision": "7c0a1ca24a4095895d295432e463af2f"
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
    "url": "assets/js/7.e0c57542.js",
    "revision": "18290c3cc178babee886688764fc61f4"
  },
  {
    "url": "assets/js/8.92050c65.js",
    "revision": "ed0103b9b9e35d65a99b33060d074e24"
  },
  {
    "url": "assets/js/9.7380e416.js",
    "revision": "0a842726c50c0c1cf02106ca719332cb"
  },
  {
    "url": "assets/js/app.1e5ad27b.js",
    "revision": "4d9f9b8079e073996c1a202cad502e31"
  },
  {
    "url": "category/index.html",
    "revision": "7c2b5649e697457dbddf2a3413f2b8b8"
  },
  {
    "url": "index.html",
    "revision": "39eac6b4e13ff4f51677ed46a796a9fd"
  },
  {
    "url": "tag/index.html",
    "revision": "5a9a82aa9a002abbc6baefb8cdc5c7ad"
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
