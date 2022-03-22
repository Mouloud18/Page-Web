
 //$(window).on('load', function()
 $(document).ready(function(){
$(".btn").on("click", function(){
    $(".btn").toggleClass("fbtn");
    $(".menu").toggleClass("omenu");
  });

  $(".carousel ul li p:first").fadeIn("slow");
  $(".item div h2").fadeIn("slow");
  $(".item div h3").fadeIn(3000);
  //fonctuon automatique 
setInterval(function(){
 
  //Animation de la ul: on déplace l'élément de la liste depuis la gauche de 100%
$(".carousel ul").animate({left:"+=100%"},function(){
//Rechercher le 1er élément de la liste et avant celui ci le dernier de cette liste
$(this).find("li:first-child").before($(this).find("li:last-child"));
//On reinitialiser 
$(this).removeAttr("style");
});
//durée de l'animation
//$(".carousel p").slideDown(1000);
},6000);

$("#btnSlidePrev").on("click", function(){
  $(".carousel ul").animate({left:"-=100%"},function(){
    $(this).find("li:first-child").before($(this).find("li:last-child"));
    $(this).removeAttr("style");
    });
});
$("#btnSlideNext").on("click", function(){
  $(".carousel ul").animate({left:"+=100%"},function(){
    $(this).append($(".carousel li:first-child"));
    //$(this).find("li:first-child").before($(this).find("li:last-child"));
    $(this).removeAttr("style");
    });
});
// A completer pour zomm des images en mode galerie
// const carres = document.querySelectorAll(".img")
// carres.forEach(img =>{
// img.addEventListener("click", () => {
//   img.classList.toggle("active");
// })
// })
});
//$(document).ready(function())