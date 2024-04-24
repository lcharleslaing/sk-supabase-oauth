import { build, files, version } from "$service-worker";

console.log({ build, files, version });

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

self.addEventListener("install", (event) => {
  async function addFilesToCache() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
  }

  // @ts-ignore
  event.waitUntil(addFilesToCache());
});

self.addEventListener("activate", (event) => {
  async function deleteOldCaches() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }
  }

  // @ts-ignore
  event.waitUntil(deleteOldCaches());
});

self.addEventListener("fetch", (event) => {
  // @ts-ignore
  if (event.request.method !== "GET") return;

  async function respond() {
    // @ts-ignore
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    if (ASSETS.includes(url.pathname)) {
      return cache.match(url.pathname);
    }

    try {
      // @ts-ignore
      const response = await fetch(event.request);

      if (response.status === 200) {
        // @ts-ignore
        cache.put(event.request, response.clone());
      }

      return response;
    } catch {
      // @ts-ignore
      return cache.match(event.request);
    }
  }

  // @ts-ignore
  event.respondWith(respond());
});
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    // @ts-ignore
    self.skipWaiting();
  }
});
