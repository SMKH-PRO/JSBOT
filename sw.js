




var filesToCache  = [
  '',
  'index.html',
  'js/Data_Initialize.js',
  'js/fbinit.js',
  'js/js.js',
  'js/modal.js',
  'css/css.css',
  'css/modal.css',
  'css/fontawesome.css',
  'media/gifs/bg1.gif',
  'media/gifs/bg2.gif',
  'media/gifs/bg3.gif',
  'media/gifs/bg4.gif',
  'media/gifs/bg5.gif',
  'media/gifs/bg6.gif',
  'media/gifs/bg7.gif',
  'media/gifs/bg8.gif',
  'media/gifs/bg9.gif',
  'media/gifs/bg10.gif',
  'media/gifs/bg11.gif',
  'media/gifs/bg12.gif',
  'media/gifs/bg13.gif',
  'media/gifs/bg14.gif',
  'media/gifs/bg15.gif',
  'media/icons/defaultuser.png',
  'media/icons/like.png',
  'media/icons/robot.png',
  'media/icons/sendmsg.png',
  'media/images/bgi1.jpg',
  'media/images/bgi2.jpg',
  'media/images/bgi3.jpg',
  'media/images/bgi4.jpg',
  'media/images/bgi5.jpg',
  'media/images/bgi6.jpg',
  'media/images/bgi7.jpg',
  'media/images/bgi8.jpg',
  'media/images/bgi9.jpg',
  'media/sounds/bye.wav',
  'media/sounds/ping.mp3',
  'media/sounds/ticking.mp3',

  
  


  
  
];


var staticCacheName = 'JS-BOT';

self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});






self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});





self.addEventListener('fetch', function(event) {
  //console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
       // console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      //console.log('Network request for ', event.request.url);
      return fetch(event.request)

      // TODO 4 - Add fetched files to the cache

    }).catch(function(error) {

      // TODO 6 - Respond with custom offline page

    }).then(function(response) {

  // TODO 5 - Respond with custom 404 page

  return caches.open(staticCacheName).then(function(cache) {
    if (event.request.url.indexOf('test') < 0) {
     // cache.put(event.request.url, response.clone());
      //Not Supported in Chrome..!
    }
    return response;
  })
})
    
  );
});