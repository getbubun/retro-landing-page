let cacheName = 'retro-landing-pwa';

var filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/img'
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


  self.addEventListener('install', (event) => {
    console.log('👷', 'install', event);
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('👷', 'activate', event);
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', function(event) {
    // console.log('👷', 'fetch', event);
    event.respondWith(fetch(event.request));
  });
