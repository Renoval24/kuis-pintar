/* Service worker Kuis Pintar
   - Menyimpan "kerangka" aplikasi agar bisa dibuka tanpa internet.
   - Pembuatan soal dan penilaian tetap butuh internet (permintaan ke Gemini tidak disentuh di sini).
   - Naikkan VERSION setiap kali file aplikasi diganti agar cache lama dibersihkan. */
const VERSION = 'kuis-pintar-v1';
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(cache => Promise.all(CORE.map(url => cache.add(url).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Biarkan permintaan lintas-domain (mis. API Gemini) langsung ke jaringan.
  if (url.origin !== self.location.origin) return;

  // Halaman: coba jaringan dulu (agar pembaruan cepat terlihat), cadangan dari cache.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // File lain: pakai cache dulu, perbarui diam-diam di belakang.
  event.respondWith(
    caches.match(req).then(cached => {
      const fresh = fetch(req)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then(c => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
