const CACHE_VERSION = 'marsbound-shell-v1';
const SHELL = ['/', '/index.html', '/favicon.svg', '/manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('marsbound-') && key !== CACHE_VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin === self.location.origin) {
    if (request.mode === 'navigate') {
      event.respondWith(caches.match('/index.html').then(cached => cached || fetch(request)));
      return;
    }
    event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response && response.ok) caches.open(CACHE_VERSION).then(cache => cache.put(request, response.clone()));
      return response;
    })));
    return;
  }
  if (request.destination === 'image' || request.destination === 'font' || url.hostname === 'fonts.googleapis.com') {
    event.respondWith(fetch(request).then(response => {
      if (response && (response.ok || response.type === 'opaque')) caches.open(CACHE_VERSION).then(cache => cache.put(request, response.clone()));
      return response;
    }).catch(() => caches.match(request)));
  }
});