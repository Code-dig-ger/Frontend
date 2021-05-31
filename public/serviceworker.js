const CACHE_NAME = "version1";
const urlsToCache = ["index.html", "offline.html"];

const self=this; //to get rid of warning

//install SW
//when installing, we will open this cache memory and add the array urlsTocache
self.addEventListener('install', (event) => {
    event.waitUnitl(
        caches.open(CACHE_NAME)
        .then((cache) => {
            // console.log('Opened Cache');
            return cache.addAll(urlsToCache);
        })
    )
});

//listen to req
//it will check every fetch request in our application (Api call, fetching image, etc.) and match it to
//all the requests the page is saving and then we will fetch it again, if it fails to fetch i.e. catch we will
//return offline.html

//we are calling fetch again because lets say I have to get the weather of Delhi again so, it should make a new
//call and get the data insted of displaying stored req data
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch(() => caches.match('offline.html'))
        })
    )
});

//activate SW
//on updating something or changing something, we will iterate through cache and only keep the version1 info
// and delete everything else
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.key().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName))
                {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});
