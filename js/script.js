(function () {
	"use strict";
    
    var fullscreenmenu = document.querySelector(".fullscreenmenu");
    
    var strokes = document.querySelectorAll(".strokes"),
        icon = document.querySelector(".menu"),
        fullscreenmenu = document.querySelector(".fullscreenmenu");
  
    function transformStart() {

        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        fullscreenmenu.classList.toggle("show");

    }
    
    icon.addEventListener("click", transformStart);

})();