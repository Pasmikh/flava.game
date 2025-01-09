'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6cbf9d01af2172d3f69ef813fceb0d73",
"version.json": "305aeaac76b9cf8c8d75d9cbc292add6",
"custom_service_worker.js": "32cd22e7288b2848ba3c9de1a440d06b",
"index.html": "ef897ba9259e57d0f13f5af106e93cb2",
"/": "ef897ba9259e57d0f13f5af106e93cb2",
"main.dart.js": "7f96762d98408cdf7692c7e014c92697",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e9071b00a805486c6ed4fe2862d739be",
"assets/AssetManifest.json": "ec3e6f7b51caad41847f28c7ea7f35da",
"assets/NOTICES": "3b0a25855d743fe7d7dd9f3bebc8179c",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/AssetManifest.bin.json": "ab8201e66411e5b82fb850a727f6ca54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0512b4bc72cf5897712d61636efb193e",
"assets/fonts/MaterialIcons-Regular.otf": "d6870c0d87773bff03be0c84bca4bf0e",
"assets/assets/images/naperstok_green.jpg": "b0826a352cb5a2f39a1b4553ce406288",
"assets/assets/images/rezinka_red.jpg": "47ab8413ec7455074216bfbe70dd455a",
"assets/assets/images/covid_green.jpg": "130878c7c2a8f1642ea8028c9edf6d98",
"assets/assets/images/vilka_red.jpg": "6c16f5b06027de9cab431a281a2f1695",
"assets/assets/images/prischepka_red.jpg": "d514eb96d0ef39d523a41f703c3a79a8",
"assets/assets/images/list_green.jpg": "8c3bb6893f964dfeb7a6f49ff304a70c",
"assets/assets/images/shnurok_red.jpg": "f3a43d8ee87f8ead347eb0b12cbf38f6",
"assets/assets/images/shnurok_green.jpg": "6c6d1e814e967f2b94384caf6864f96e",
"assets/assets/images/plastilin_green.jpg": "ca3ebbbcb061fb8c8beb93f5f01ccaa0",
"assets/assets/images/covid_red.jpg": "215ec3a3360194386b875b9a37af6a2e",
"assets/assets/images/covid_big_red.jpg": "15ef159112d98c609aac0b83554f3699",
"assets/assets/images/list_red.jpg": "e6093b89ec2bd54cc655b1b9bf1840cf",
"assets/assets/images/prischepka_green.jpg": "b7c9ef741a2643706ab9019114afa4b3",
"assets/assets/images/zerna_red.jpg": "64afba805782570d39d07a85b8ad4e7f",
"assets/assets/images/golovolomka_green.jpg": "3575ffbba8e3523f0b38443260a43fec",
"assets/assets/images/busina_green.jpg": "6be5c4e718ec7d907d6ccdb971dcf7ff",
"assets/assets/images/vilka_green.jpg": "773fd148932eef50cc62c1022130b54c",
"assets/assets/images/rezinka_green.jpg": "51e422fabd7ba76831939568053704b8",
"assets/assets/images/naperstok_red.jpg": "d4cff11bca7225ee89878ece25f9f41a",
"assets/assets/images/poloska_red.jpg": "a41085a83b58638842c2cf438b45b9fd",
"assets/assets/images/plastilin_red.jpg": "ac47ed22e4c85c32bb6ee28ab89aca4f",
"assets/assets/images/pero_green.jpg": "363aca0f064910da22299a8c7ae36076",
"assets/assets/images/golovolomka_red.jpg": "5e8084211baf25d55914e8103c8700cd",
"assets/assets/images/sharik_green.jpg": "183dc1691bfb6b6992bf5dfcf71c93b8",
"assets/assets/images/busina_red.jpg": "405b7e48004140df72905baccd279161",
"assets/assets/images/perchik_red.jpg": "60e7ad764f23b7ae389f5d06b4e04752",
"assets/assets/images/pero_red.jpg": "56f1cb8d5bdd46fb7b278bd053793961",
"assets/assets/images/sharik_red.jpg": "342736ae2376cdfe522a5306993cb02d",
"assets/assets/images/covid_big_green.jpg": "a5ba71e24789fc35ebe10dda5518d20d",
"assets/assets/images/perchik_green.jpg": "4e0d410a59c124a3fb6fe99715cc1294",
"assets/assets/images/zerna_green.jpg": "8e403637aed78e4732f0ab7fb69e4bb9",
"assets/assets/images/poloska_green.jpg": "881ab438c1320370c7d9d1661f9dd393",
"assets/assets/sounds/win.wav": "b37399a6f17fd60948f97519b3cebf21",
"assets/assets/sounds/eliminate.wav": "602b6fd1f7ecbf4d3b810e285d5e3b12",
"assets/assets/sounds/end_turn.wav": "e8e607681036e4e0ccfd5674b5dc0f3a",
"assets/assets/sounds/heartbeat_normal.wav": "ae0d76d88ee77cb77421780c2366bac4",
"assets/assets/sounds/heartbeat_slow.wav": "704b0b8eeaacf93d2e5fd43c01f2bd37",
"assets/assets/sounds/heartbeat_fast.wav": "814e6959ce9e22f3058b7ff91d253621",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
