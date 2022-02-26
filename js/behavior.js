document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement_1 = document.getElementById("smart_thumbnail_love");
    thumbnailElement_1.addEventListener("click",function(){

       if (thumbnailElement_1.className == "") {
        thumbnailElement_1.className = "small";
       }else{
        thumbnailElement_1.className = "";
       }

    });
    var thumbnailElement_2 = document.getElementById("smart_thumbnail_book");
    thumbnailElement_2.addEventListener("click",function(){

       if (thumbnailElement_2.className == "") {
        thumbnailElement_2.className = "small";
       }else{
        thumbnailElement_2.className = "";
       }

    });
})
