'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c5c3c6a3ac2b21705d7ea291c831e93b",
"version.json": "305aeaac76b9cf8c8d75d9cbc292add6",
"index.html": "70b92b9eb5137e7b46ebd60c84de91b6",
"/": "70b92b9eb5137e7b46ebd60c84de91b6",
"main.dart.js": "c5dfcd5e527128a511881ec4a2473470",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e9071b00a805486c6ed4fe2862d739be",
".git/config": "4f07f97ad1cfd45c38b98bb2f1bcdf69",
".git/objects/92/067f931f5388f27e168537e823813722aaa787": "72e59e09edff75148f15dec69d1c1a19",
".git/objects/66/e8a8f92ae8146467a44e7379ddd51cd3729c05": "1f32d4ae3f2fda12a453fc7ae206f9a0",
".git/objects/68/62cda41af438109d89f07245ba534a776c7377": "388669072ca24bd6df84a19c50f949bc",
".git/objects/9e/4a107e045b269c4dcac3c7529aeee0fe06a5af": "33892f912355eae27b158a2a8ffde049",
".git/objects/32/4cb7df8ceb9fd57fa022921fe96f3b3ecc0ad5": "a088138d6d74ff0c3746cac808527188",
".git/objects/56/a085d2ff8b11140f2d3c96fd63574a36ec2fba": "e676819318876e9442ef159296b119a1",
".git/objects/51/efb74299989b47a86fb979e7706eae15070f01": "fabe83bf1d698a14e6b464361417c6a4",
".git/objects/58/72ff12192b054f727e6d86924a5fd250ac090d": "2b564cbbb1d4d979940dac9d4906f072",
".git/objects/93/f556b296f731d1a9d6f69d1b2f0aab08c4210b": "8eecfa49da7eee34d9776defaf95ac41",
".git/objects/5a/e3bb29e61ee161cd8f5aacddc50dca8cdb4d8a": "9fa7ddabb944ef7bec51cfb10c6e70f9",
".git/objects/33/87833e0079b0a97d02458546b036cb63fd7289": "874959f63588ffadc322d15ae03d564f",
".git/objects/bd/4a2d02da6fafa5f8822ebcb817bed4e116328e": "5eaa076a6c0e2e7170167a559e5e566a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/f985d016d82809458ef204ea0683e2d384ff88": "c75112bdf981f8568911e13973d8c28d",
".git/objects/d8/48ac62467ecd26e20b9a6850753124e41b711d": "bc842afa92d26aa028ffadcb8b7c4482",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/7b5eef669c0190f8c340eb2360422a463740ba": "9eafcfd478dce19eee99a2ddb88b04f0",
".git/objects/fd/a3bd5f94c8cf0b3efd7dd9cb1a25d3a21b4224": "1b90fb50d61866d3c6cc2af8090df3a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/4f60dc7bfa9c79a40016160373aa4232e87d41": "0a9fb6df35b44e2da6029d57c4be6b12",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/11/bdab2012117af27edf69e2489fde1b8e706d68": "4d9e6b954b6a4946156521f51f4356d0",
".git/objects/89/999d65c8c2eac2b18ea68190daec478b404232": "20f904e56504a05b12e2d45d85826e41",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/412c5d3a0d8bfee903d2a31927a7356df768d7": "775f32585874bc5a28539c672cd5f999",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/6fde446afa7515f51dd7dd630dbea1a07f3f19": "21876b8f82ce3f6dda57d66f3f535d91",
".git/objects/21/4e488eb999383c41a2ee5b53f7ce7a5f19e50a": "166f7e0d57c909e285604c3160a8ed91",
".git/objects/21/e2b13294dd66f74b68c4a42e7a693954965f84": "e22a86f043f37a0d3408b2446658c557",
".git/objects/72/4680ef6e3be2957eb36eb6a6f8b35cde79923e": "9a26beda87da77ffdabef6b168b2f696",
".git/objects/88/762cb06c7dd70a8c16fefaa3d08f49bdea53f4": "339762b4f2f7d148045a83f5602ab167",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/3e555ebb155cff384a3316030406c2c49cdeb5": "1472922c9a0259bb011e9e6c3ee40db9",
".git/objects/36/3953c0beef20a8b177c45aa1f877803386636a": "a733ca902636e64a6b5387b2dec4425e",
".git/objects/96/c77c146c41f7dc61faf2bc8ccede1e875d2436": "d09df8c9a1f1ff67f05fc75c33fdc981",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/e4bfb4d1943e67fcbef58a4a2fe99876ecbd3d": "b876848cc81f7a04b0a25872ab5971eb",
".git/objects/30/6af28b45f73dcc048c226f19d467c197550d78": "7678924dc812780840eda25ac2ca4f5b",
".git/objects/5e/a72ecfb2745ec6a6658a77ffc85fb8520a5c2a": "271f6d6b3256748d007567fdf5ebce0d",
".git/objects/08/d3c52a65d43c0548da726efbc84dd2f510427b": "6d6c44f0ff6c9fa6679137ed193167bd",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/f933716f230ba7452e982d2dbe41d5212741de": "c4872ebbcf7e5a99c0448f821d6d6e9e",
".git/objects/01/15fb7e89fc19c8e92c963cad282aa67b10bd6c": "74fa2ebe06d97d736e646ece2b6c978a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0a/6c156dc37baefc3f702323f75754feae230f3a": "df11fe4b8f2d67cacf253d64c2e1f6b6",
".git/objects/0a/5fe9f6ec8f08b22180caaa599e27a881492cd7": "b871d86a7f7b8b009ace33afbd545804",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/08d7b998ca70384d85ce4feaba1de176b46e6d": "64b36e0339b756406b440d8c80c626aa",
".git/objects/a7/872ccd0f1680adcd35c3d664a740fadc73474c": "2f59b13d5f0c56b8311b5cb811e70997",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/7c597f4838c3c27cb3d781a44cbbfcde5840d2": "f3185d6d8832c9cb152ef30cae99f347",
".git/objects/d2/1a60280aa14892c3a05d69775ec2fad6de76e7": "cac2ad51d4ff1bb047e80cad32b8cfd1",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/aa/fef50d6edd7a5d9bdbd0472499af7c2cd2cb0a": "322a30784d0d1ddd81a3e63f636e1f7a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/056b74c66f5574d78e8f044cfca1b159593b23": "d4fe2329ecd1106ecb1b8f111d721a87",
".git/objects/a6/0a686388b47d1b56abdf7e320f9e92c849ea9e": "0569c394b3d28c32e8013fa81b4be029",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ff/f6ea95771f00f06a173c95bcd20ea73870af93": "64212086f36e9039636325db5cc6921c",
".git/objects/f6/69593e10c7b662b06e487990135b48f0d0401a": "1b3f049bd6317a8fd1f0a24a9274c665",
".git/objects/f1/48b61a2f4d8eb2a48a5690fd8de211f61d522d": "4a1271f2f38c7e497f03ec2c92e30442",
".git/objects/ce/57ca9e27b1b1eb08f72206fb1860cb01b9eadd": "e9d5ed2b8ed723d813cf8691f4b2de25",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/f92d58ca587727a559f1ef62adf6a9fb7b99f6": "a984b0e5a5d2287a98a532c60c5f0b75",
".git/objects/24/1bb7df0e5542ddf1b545331392a7cf764e778d": "6a85572ee05056ae28cac6481153ebb4",
".git/objects/23/a8facb767897ce3378148cf2d02f7b8f43c6e2": "42fdaaa8b37e8696da5b373e785c068a",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/f02ce9569d286aea8506d2a69281b87427ce4d": "22de4457e4bb9550159031268edb9f58",
".git/objects/8c/64b5fa6c5a11bc3d74dfb889d668200f7d9f5e": "c34a0e4bc06511f2d3a5db91fcbcb480",
".git/objects/22/1e9a6d8b235d77feb84ea3121074d16b62dbf6": "b762b1222d0c6afbd6f8f36a26670d14",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b0f8d6b9371a81f35c1f762cc773173f",
".git/logs/refs/heads/gh-pages": "b0f8d6b9371a81f35c1f762cc773173f",
".git/logs/refs/remotes/origin/gh-pages": "76537444633fb932988c46b770f23df0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "080f5fd25e33925cc54445d13605db9e",
".git/refs/remotes/origin/gh-pages": "080f5fd25e33925cc54445d13605db9e",
".git/index": "15cf1ea55fd9b7d20343d1355f2baea6",
".git/COMMIT_EDITMSG": "83cb5400ae3f141a3a0dee84412d0277",
"assets/AssetManifest.json": "73d7bc5bca17f0ae6cda23e4bf52f337",
"assets/NOTICES": "fa8f44ab114f4a111161881a6e560cbc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "6d55f5c9a52e2d347826077c40821df4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "33dba96ed34da277e014b68dca65c6c2",
"assets/fonts/MaterialIcons-Regular.otf": "7b5d09f9b635255f75035f960617d315",
"assets/assets/images/naperstok_green.jpg": "b0826a352cb5a2f39a1b4553ce406288",
"assets/assets/images/rezinka_red.jpg": "47ab8413ec7455074216bfbe70dd455a",
"assets/assets/images/covid_green.jpg": "130878c7c2a8f1642ea8028c9edf6d98",
"assets/assets/images/vilka_red.jpg": "6c16f5b06027de9cab431a281a2f1695",
"assets/assets/images/prischepka_red.jpg": "d514eb96d0ef39d523a41f703c3a79a8",
"assets/assets/images/shnurok_red.jpg": "f3a43d8ee87f8ead347eb0b12cbf38f6",
"assets/assets/images/shnurok_green.jpg": "6c6d1e814e967f2b94384caf6864f96e",
"assets/assets/images/plastilin_green.jpg": "ca3ebbbcb061fb8c8beb93f5f01ccaa0",
"assets/assets/images/covid_red.jpg": "215ec3a3360194386b875b9a37af6a2e",
"assets/assets/images/covid_big_red.jpg": "15ef159112d98c609aac0b83554f3699",
"assets/assets/images/prischepka_green.jpg": "b7c9ef741a2643706ab9019114afa4b3",
"assets/assets/images/zerna_red.jpg": "64afba805782570d39d07a85b8ad4e7f",
"assets/assets/images/golovolomka_green.jpg": "3575ffbba8e3523f0b38443260a43fec",
"assets/assets/images/busina_green.jpg": "6be5c4e718ec7d907d6ccdb971dcf7ff",
"assets/assets/images/vilka_green.jpg": "773fd148932eef50cc62c1022130b54c",
"assets/assets/images/rezinka_green.jpg": "51e422fabd7ba76831939568053704b8",
"assets/assets/images/naperstok_red.jpg": "d4cff11bca7225ee89878ece25f9f41a",
"assets/assets/images/poloska_red.jpg": "a41085a83b58638842c2cf438b45b9fd",
"assets/assets/images/plastilin_red.jpg": "ac47ed22e4c85c32bb6ee28ab89aca4f",
"assets/assets/images/golovolomka_red.jpg": "5e8084211baf25d55914e8103c8700cd",
"assets/assets/images/sharik_green.jpg": "183dc1691bfb6b6992bf5dfcf71c93b8",
"assets/assets/images/busina_red.jpg": "405b7e48004140df72905baccd279161",
"assets/assets/images/perchik_red.jpg": "60e7ad764f23b7ae389f5d06b4e04752",
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
