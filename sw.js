const version = "0.1"

self.addEventListener("install", ()=>{
   console.log("Install Service Worker version " + version)
   return self.skipWaiting()
})

self.addEventListener("activate", ()=>{
   console.log("Activate Service Worker version " + version)
})

self.addEventListener('fetch', () => {

})

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if(workbox){
   console.log('Yes, workbox is there')
   workbox.precaching.precacheAndRoute([
      {
         "url" : "index.html"
      },
      {
         "url" : "style.css"
      },
      {
         "url" : "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css"
      }
   ])
   //routage
   workbox.routing.registerRoute(
      /(.*)\.(?:png|gif|jpg|css)$/,
      new workbox.strategies.CacheFirst({
         cacheName: "design-cache",
         plugins: [
            new workbox.expiration.Plugin({
               maxAgeSeconds: 30*24*60*60, //30 days
               maxEntries: 50
            })
         ]
      })
   )
   //routage api
   workbox.routing.registerRoute(
      "https://api.punkapi.com/v2/beers",
      new workbox.strategies.NetworkFirst({
         cacheName: "api-cache",
         plugins: [
            new workbox.expiration.Plugin({
               maxAgeSeconds: 30*24*60*60, //30 days
               maxEntries: 50
            })
         ]
      })
   )
}
else {console.log('no work box')}

