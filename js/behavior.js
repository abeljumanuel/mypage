document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click",function(){

       if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";
       }else{
        thumbnailElement.className = "";
       }

    });
})

const PAGE_URL = window.location.href;
var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = "comments"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://juan-manuel-rojas-gonzalez.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})