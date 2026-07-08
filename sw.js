/* MakineHesap — Servis Çalışanı (çevrimdışı destek) */
const CACHE = 'makinehesap-v15';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  // 3D motor (Three.js) — artık sitenin içinden sunuluyor (CDN engellerinden etkilenmez)
  'vendor/three.module.min.js',
  'vendor/addons/controls/OrbitControls.js',
  'vendor/addons/environments/RoomEnvironment.js',
];

// Kurulum: dosyaları önbelleğe al
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Etkinleşme: eski önbellekleri temizle
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// İstekler:
//  - HTML/sayfa: önce ağ (online'da hep güncel), offline'da önbellek
//  - diğer dosyalar: önce önbellek (hızlı), yoksa ağ
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(req).then((h) => h || caches.match('index.html')))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((hit) =>
      hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
    )
  );
});
