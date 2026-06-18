const cacheName = "notes-app";

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(cacheName)
    );
});


self.addEventListener("fetch", function(event){

});