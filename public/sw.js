const cacheName = 'static-cache-v13';
const staticAssets = [
    "/",
    "/index.html",
    "/index.js",
    "/db.js",
    "/style.css"];

    //Install service worker
    self.addEventListener('install', evt => {
        evt.waitUntil(
            caches.open(cacheName).then(cache =>{
                console.log('Your files were pre-cached successfully');
                return cache.addAll(staticAssets);
            })
        );
        self.skipWaiting();
    });


// self.addEventListener('install', async e => {
//     const cache = await caches.open(cacheName);
//     await cache.addAll(staticAssets);
//     return self.skipWaiting();
// });

// self.addEventListener('activate', e => {
//     self.clients.claim();
// });