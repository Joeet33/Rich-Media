var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  'https://up931673.ct.port.ac.uk/CT5RMWD/webroot/index.html',
  'https://up931673.ct.port.ac.uk/CT5RMWD/webroot/css/index.css',
  'https://up931673.ct.port.ac.uk/CT5RMWD/webroot/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});