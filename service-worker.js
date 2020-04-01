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
    "revision": "56d8beb1d7d6eccddaafa1a98a8ffd78"
  },
  {
    "url": "2018/05/15/why-i-unlike-styled-components/index.html",
    "revision": "1ff0d98e3905b71cf1c5d0422acdb9e9"
  },
  {
    "url": "2019/01/12/pnp/index.html",
    "revision": "04518e543666391685a0892c4fe39726"
  },
  {
    "url": "2019/03/21/berry/index.html",
    "revision": "b87bf870a41d5c9be93856bcfa9e3d98"
  },
  {
    "url": "2019/08/09/mac-apps-i-used/index.html",
    "revision": "bb4801c858bafc9c278f49a4263fb7b0"
  },
  {
    "url": "2019/09/16/a-coincidence-bug/index.html",
    "revision": "62eda7ff24a97ab3d54712308b4a3b30"
  },
  {
    "url": "2019/11/11/the-future-of-javascript-package-managment/index.html",
    "revision": "beb7704c7d9cc04577141e27f102640d"
  },
  {
    "url": "404.html",
    "revision": "a91fe77b76a1428ebef67740c9c45188"
  },
  {
    "url": "about.html",
    "revision": "f39f11e2171ef08a1995eadc8a410ce0"
  },
  {
    "url": "assets/css/0.styles.b6c88d7e.css",
    "revision": "59eb0c090df343256b4943573b5a303b"
  },
  {
    "url": "assets/js/1.7c7b12f8.js",
    "revision": "9b51e98946fbe81620f8a829db450a17"
  },
  {
    "url": "assets/js/10.a841f89d.js",
    "revision": "6ffe5ed474ee1ea2116720e543931bbb"
  },
  {
    "url": "assets/js/11.4c9a66f1.js",
    "revision": "30158fec37f8c44f4279754579bbf6fa"
  },
  {
    "url": "assets/js/12.d1f168a1.js",
    "revision": "662df7d3ad1fc4ddfb9e123f0b07dce8"
  },
  {
    "url": "assets/js/13.4fe60060.js",
    "revision": "52f0f5f505cc62b16468890b858e87b1"
  },
  {
    "url": "assets/js/14.48042565.js",
    "revision": "e5ac3494016a26974116a2d821aa4b20"
  },
  {
    "url": "assets/js/15.f8ecf52e.js",
    "revision": "f14632a5c732e1f999f9d9ccc87f17de"
  },
  {
    "url": "assets/js/16.289daecc.js",
    "revision": "6af645984ee19fb7084b3efb32067b85"
  },
  {
    "url": "assets/js/17.d83f1c5c.js",
    "revision": "01611aaffdea9975d0fde932e7ffcbed"
  },
  {
    "url": "assets/js/3.dc1c2401.js",
    "revision": "a6a992564022b11c0886563a26a0d5fe"
  },
  {
    "url": "assets/js/4.fd21ea3e.js",
    "revision": "7cdc58718630dfc0640f4f11afc76978"
  },
  {
    "url": "assets/js/5.66f411b6.js",
    "revision": "cb3df9bd677424f27c1340ae84486f50"
  },
  {
    "url": "assets/js/6.859179a3.js",
    "revision": "0894e4a5c2b30df3552b6ecb9587c211"
  },
  {
    "url": "assets/js/7.cb314d70.js",
    "revision": "eb9e0c2f03122244041b7e26d362dc76"
  },
  {
    "url": "assets/js/8.40bf71ec.js",
    "revision": "eb774845db466aceb51e4e783ebf8b52"
  },
  {
    "url": "assets/js/9.da451a00.js",
    "revision": "7e11d397ff09ca934118e08a0c75af25"
  },
  {
    "url": "assets/js/app.3f2ff260.js",
    "revision": "25c52066ec7e85e9afe6dc1a0ac61e44"
  },
  {
    "url": "category/index.html",
    "revision": "3e4aa9e40aee842bd5d0c2d7e397a58c"
  },
  {
    "url": "index.html",
    "revision": "ec31bb87cf0abfbd5f86ae797c9258b4"
  },
  {
    "url": "tag/index.html",
    "revision": "d440dc6c9debc6834544387efc5b0b5c"
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
