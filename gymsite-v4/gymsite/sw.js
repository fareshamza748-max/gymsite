const CACHE = 'gympro-v3';
const ASSETS = [
  './', './index.html',
  './css/main.css',
  './js/data.js',
  './js/state-v3.js',
  './js/exercises-svg.js',
  './manifest.json', './icon.svg',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;900&family=Barlow+Condensed:wght@500;700;800;900&display=swap',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || e.request.url.startsWith('chrome-extension')) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res && res.status === 200 && res.type !== 'opaque') {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => e.request.destination === 'document' ? caches.match('./index.html') : null))
  );
});
