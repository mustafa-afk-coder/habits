// Generated at build time by vite.config.ts.
const CACHE = 'habit-system-7b748678892a';
const FILES = ["./assets/ibm-plex-sans-arabic-arabic-400-normal-Bwel1Edd.woff2","./assets/ibm-plex-sans-arabic-arabic-600-normal-C_8-il80.woff2","./assets/ibm-plex-sans-arabic-arabic-700-normal-h89dPt8c.woff2","./assets/ibm-plex-sans-arabic-latin-400-normal-WmMPB2Yj.woff2","./assets/ibm-plex-sans-arabic-latin-600-normal-D2IuUTjp.woff2","./assets/ibm-plex-sans-arabic-latin-700-normal-B1l2chsb.woff2","./assets/index-5HITnoSL.js","./assets/index-Be0RI8AA.css","./font-license.txt","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./icon.svg","./index.html","./manifest.webmanifest"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(caches.match('./index.html', { ignoreVary: true }).then((cached) => cached ?? fetch(request)));
    return;
  }
  // ignoreVary: the page asks with an Origin header the cached copies were stored without.
  event.respondWith(caches.match(request, { ignoreVary: true }).then((cached) => cached ?? fetch(request)));
});
