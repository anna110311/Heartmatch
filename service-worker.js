
self.addEventListener('install', function(e) {
  console.log('Service Worker Installed');
  e.waitUntil(
    caches.open('heartmatch-cache').then(function(cache) {
      return cache.addAll(['/', '/index.html']);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('Fetch event:', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
