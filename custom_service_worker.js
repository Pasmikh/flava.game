const CACHE_NAME = 'flutter-app-cache-v1';

const ASSETS_TO_CACHE = [
    '/', // Main entry point
    '/index.html',
    '/main.dart.js',
    '/flutter.js',
    '/manifest.json',
    '/favicon.png',
      // Images
    '/assets/assets/images/busina_green.jpg',
    '/assets/assets/images/busina_red.jpg',
    '/assets/assets/images/covid_big_green.jpg',
    '/assets/assets/images/covid_big_red.jpg',
    '/assets/assets/images/covid_green.jpg',
    '/assets/assets/images/covid_red.jpg',
    '/assets/assets/images/golovolomka_green.jpg',
    '/assets/assets/images/golovolomka_red.jpg',
    '/assets/assets/images/naperstok_green.jpg',
    '/assets/assets/images/naperstok_red.jpg',
    '/assets/assets/images/perchik_green.jpg',
    '/assets/assets/images/perchik_red.jpg',
    '/assets/assets/images/plastilin_green.jpg',
    '/assets/assets/images/plastilin_red.jpg',
    '/assets/assets/images/poloska_green.jpg',
    '/assets/assets/images/poloska_red.jpg',
    '/assets/assets/images/prischepka_green.jpg',
    '/assets/assets/images/prischepka_red.jpg',
    '/assets/assets/images/rezinka_green.jpg',
    '/assets/assets/images/rezinka_red.jpg',
    '/assets/assets/images/sharik_green.jpg',
    '/assets/assets/images/sharik_red.jpg',
    '/assets/assets/images/shnurok_green.jpg',
    '/assets/assets/images/shnurok_red.jpg',
    '/assets/assets/images/vilka_green.jpg',
    '/assets/assets/images/vilka_red.jpg',
    '/assets/assets/images/zerna_green.jpg',
    '/assets/assets/images/zerna_red.jpg',

    // Sounds
    '/assets/assets/sounds/eliminate.wav',
    '/assets/assets/sounds/end_turn.wav',
    '/assets/assets/sounds/heartbeat_fast.wav',
    '/assets/assets/sounds/heartbeat_normal.wav',
    '/assets/assets/sounds/heartbeat_slow.wav',
    '/assets/assets/sounds/win.wav',
  ];

  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });