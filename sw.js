const CACHE_VERSION = 'marsbound-shell-v5';
const SHELL = ['/', '/index.html', '/favicon.svg', '/manifest.webmanifest'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('marsbound-shell-') && key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin && request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_VERSION).then(cache => cache.put('/index.html', copy))
            );
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  if (sameOrigin) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_VERSION).then(cache => cache.put(request, copy))
            );
          }
          return response;
        });
      })
    );
    return;
  }

  const isCacheableExternal =
    request.destination === 'image' ||
    request.destination === 'font' ||
    (request.destination === 'style' && url.hostname === 'fonts.googleapis.com');

  if (isCacheableExternal) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response && (response.ok || response.type === 'opaque')) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE_VERSION).then(cache => cache.put(request, copy))
            );
          }
          return response;
        });
      })
    );
  }
});
