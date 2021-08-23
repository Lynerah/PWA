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