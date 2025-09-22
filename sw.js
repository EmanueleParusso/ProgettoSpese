const CACHE_NAME = "mia-app-v1";
const FILES_TO_CACHE = [
  "/ProgettoSpese/",
  "/ProgettoSpese/index.html",
  "/ProgettoSpese/manifest.json",
  "/ProgettoSpese/icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Se trovato in cache, restituisci
      if (cached) {
        return cached;
      }
      // Altrimenti prova a fetchare dalla rete
      return fetch(event.request).catch(() => {
        // Se fallisce (offline), restituisci index.html
        return caches.match("/ProgettoSpese/index.html");
      });
    })
  );
});
