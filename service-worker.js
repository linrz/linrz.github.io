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
    "revision": "9ae4886dfc017ec2cde1a01ba43c9faf"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "9b9fe780c7b31cfa209e3cd4a493543b"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "36f7c5f505f92806a1a8cf4cb223affa"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "daa75e4578b3cb7fd7f5e9bb1df7533b"
  },
  {
    "url": "404.html",
    "revision": "55f5787a26c43a30e8ab4207fba246ef"
  },
  {
    "url": "about.html",
    "revision": "8f4798a65d0d28930f93a0f7996e0f7e"
  },
  {
    "url": "assets/css/0.styles.fa24b528.css",
    "revision": "ac3f18758a2b02530a6c5111cdf0b0da"
  },
  {
    "url": "assets/js/1.b72004ba.js",
    "revision": "9c41a2b5180354bffb6fe3a759b8aab4"
  },
  {
    "url": "assets/js/10.cb275046.js",
    "revision": "d60643646bb05e43cf137ff48562b59a"
  },
  {
    "url": "assets/js/11.ee7a639b.js",
    "revision": "bb2f8124c3b017968c066d4775cdb17c"
  },
  {
    "url": "assets/js/12.22a701d8.js",
    "revision": "f5b2774adb17241cc308e229f85a3d3b"
  },
  {
    "url": "assets/js/13.69259fb6.js",
    "revision": "be3097d5efc2ed5173ffdf825dba5cc9"
  },
  {
    "url": "assets/js/3.dff09a4a.js",
    "revision": "977b7b2471666af8af2fd8307b3c172f"
  },
  {
    "url": "assets/js/4.79a89852.js",
    "revision": "b34985096997457c9410e8879488cfb1"
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
    "url": "assets/js/7.a7b773aa.js",
    "revision": "7798a2aa4c60ed5778058821f17270b0"
  },
  {
    "url": "assets/js/8.f970ca18.js",
    "revision": "82453de843b59a9894cbc6b691740344"
  },
  {
    "url": "assets/js/9.5c111522.js",
    "revision": "38b213a05a631942f96f6a6d8526cce3"
  },
  {
    "url": "assets/js/app.b2837f99.js",
    "revision": "2aaf77a795c97b7552113bbff62dbf0c"
  },
  {
    "url": "category/index.html",
    "revision": "2f1dc8c191b570306884aeabd93e4f0a"
  },
  {
    "url": "index.html",
    "revision": "a1eb950124a9819f0ab4b57eae617599"
  },
  {
    "url": "tag/index.html",
    "revision": "967bbc17493f7fe0136594a06b58edca"
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
