/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/_...all_-515f9141.js",
    "revision": null
  }, {
    "url": "assets/_name_-e5ce79e7.js",
    "revision": null
  }, {
    "url": "assets/404-7f3c7d04.js",
    "revision": null
  }, {
    "url": "assets/app-1eeaf78b.js",
    "revision": null
  }, {
    "url": "assets/default0-145b0695.css",
    "revision": null
  }, {
    "url": "assets/default0-4deb9c30.js",
    "revision": null
  }, {
    "url": "assets/home-93875870.js",
    "revision": null
  }, {
    "url": "assets/index-51a501b4.css",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-80e738c2.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "b441174bc101242cbebe230c312928d1"
  }, {
    "url": "favicon.svg",
    "revision": "8582acab51af16c66cfdf602d62b75e4"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "8582acab51af16c66cfdf602d62b75e4"
  }, {
    "url": "pwa-192x192.png",
    "revision": "1951fe2d9bb19eed9b67fe9f41d62b68"
  }, {
    "url": "pwa-512x512.png",
    "revision": "5516574c2c4283a8ebe2661eee0b7ebc"
  }, {
    "url": "manifest.webmanifest",
    "revision": "a7a13efaf67a83c6becc213b1dea742c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
