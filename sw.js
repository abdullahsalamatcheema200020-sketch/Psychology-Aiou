const CACHE_NAME = 'aiou-sem1-final-v1';
const APP_ASSETS = [
  './',
  'index.html',
  'styles.css',
  'app.js',
  'data.js',
  'books/9382-functional-english.pdf',
  'books/9424-quantitative-reasoning-1.pdf',
  'books/8411-introduction-to-psychology.pdf',
  'books/9389-environmental-science.pdf',
  'books/9801-islamic-studies.pdf',
  'assets/covers/9382-functional-english.jpg',
  'assets/covers/9424-quantitative-reasoning-1.jpg',
  'assets/covers/8411-introduction-to-psychology.jpg',
  'assets/covers/9389-environmental-science.jpg',
  'assets/covers/9801-islamic-studies.jpg',
  'assets/covers/9806-pakistan-studies.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match('index.html'));
    })
  );
});