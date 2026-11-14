// Offline support.
// App shell: serve from cache, refresh in the background.
// Data (data/*.json): network first so updates show up, cache as offline fallback.
const CACHE = 'mho-armor-v7';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './optimizer.js',
  './builds.js',
  './guide.js',
  './data/mho-data.json',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function fetchAndCache(req) {
  return fetch(req).then(res => {
    if (res.ok) {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
    }
    return res;
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;

  if (url.pathname.includes('/data/')) {
    e.respondWith(fetchAndCache(req).catch(() => caches.match(req, { ignoreSearch: true })));
    return;
  }

  const network = fetchAndCache(req);
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || network));
  e.waitUntil(network.then(() => {}, () => {}));
});
