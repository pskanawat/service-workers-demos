importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  'http://demo1853299.mockable.io/products',
  workbox.strategies.cacheFirst({
    cacheName: 'my-site-api',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60,
        maxEntries: 10,
      }),
    ]
  })
);
