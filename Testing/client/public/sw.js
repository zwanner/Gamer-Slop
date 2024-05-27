const CACHE_NAME = 'gamer-slop-cache-v1';
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');
    e.waitUntil(caches.open(CACHE_NAME).then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            'static/js/bundle.js'
        ])
            .then(() => self.skipWaiting());
    }
    ));
}
);