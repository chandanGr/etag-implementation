var self = this;

const staticCacheName = "site-static-v3";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
    "/",
    "/static/js/bundle.js",
    "/static/js/main.chunk.js",
    "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxK.woff2",
    "/favicon.ico",
    "https://cdn-icons-png.flaticon.com/512/2948/2948037.png",
    "https://cdn-icons-png.flaticon.com/512/933/933634.png",
    "https://cdn-icons-png.flaticon.com/512/679/679793.png",
    "https://cdn-icons-png.flaticon.com/512/2503/2503376.png",
    "https://cdn-icons-png.flaticon.com/512/862/862993.png",
    "https://fonts.googleapis.com/css?family=Roboto"
];

// install event
self.addEventListener("install", (evt) => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (evt) => {
  console.log('fetch event', evt);
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(evt.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch((err) => {
        return {
          error: err,
          showPwaPage: true
        }
      })
  );
});
