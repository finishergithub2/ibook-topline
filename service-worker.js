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
    "url": "404.html",
    "revision": "e1a0dd42ec523d31dd7074a013b66c05"
  },
  {
    "url": "accumulate/index.html",
    "revision": "b072f793105bb107397b537c43baaac5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d1082e1fdcd654af080eb9af59ef4abe"
  },
  {
    "url": "assets/css/0.styles.1c06bc64.css",
    "revision": "9ea15421c257b7c2e72a5668b435969f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.0b373504.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.7a2db456.js",
    "revision": "1de15e332f1d0485131780f586650fc2"
  },
  {
    "url": "assets/js/4.ea6f4725.js",
    "revision": "7ee4038e6038c38a1359ba18e1ced010"
  },
  {
    "url": "assets/js/5.f345e31c.js",
    "revision": "f6ef483e6e54b2c836e70f45c9f91cb1"
  },
  {
    "url": "assets/js/6.4eb93548.js",
    "revision": "ee85fd798cdb935fcf11a4f4d8658a76"
  },
  {
    "url": "assets/js/7.344b4790.js",
    "revision": "da063ee854a6b2358cc80deb2b05af36"
  },
  {
    "url": "assets/js/8.b4ff4429.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.c05c71a0.js",
    "revision": "780df037a05c9709d08f4f4e5a5c5861"
  },
  {
    "url": "guide.html",
    "revision": "5e61e699880ba0e30845b64439cdaaeb"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "71d3089f2a1600a8b1afcfd48cb4ef77"
  },
  {
    "url": "others/index.html",
    "revision": "ce54d0ead57e7737565ecee3747c7d88"
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
