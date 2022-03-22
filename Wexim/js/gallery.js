$(document).ready(function(){
  $('a#filter_a').click(function(){
    //Cache tous les élément par défaut
    $(".work_one").addClass('filter_hide');
    
    $(".work_one[data-filter='"+$(this).attr('data-filter')+"']").removeClass("filter_hide");
    
    //supprime la classe sélectionnée du lien     
    $('a#filter_a').removeClass('selected');
    //ajoute la classe sélectionnée au lien actif
    $(this).addClass('selected');
    return false;
   });

   //Au click sur l'ancre #filter_a ( liste en haut)
  $('a#filter_a').click(function(event) {  

    console.log($(this).attr('data-filter'));
    // Si data-filter différent de "*"(All)
    if ( $(this).attr("data-filter")!="*"){ 
      // alert( $(this).text());
      // Supprimer les classes suivantes
      $( "div" ).removeClass("top_works bottom_works left_works right_works group_works_top group_works_bottom");
      // Rajouter la classe active pour chacune des Div suivantes
      $(".all_works").addClass("active");
      $(".work_one").addClass("active");
    //   $(".work_one:nth-child(02)").animate({left:"+=30%"});
    //   $(".work_one:last-child").animate({top:"+=30%"});
    // Fonction qui permet de déplacer les blocs contenant l'ancre et l'image
    // L'index permet de récupérer l'élément 
// Ayant 8 blocs, l'index va permettre de récupérer chacun d'eux en partant du deuxième (index+1)
// car le premier reste à sa place
// Je dois savoir en revanche à quel bloc ça correspond ddans le html pour pouvoir les placer correctement dans
// les blocs où ils seront classés en fonction du nombre d'image
// Ici il y a 3 images en Graphic Design, 1 en Marketing et donc pas besoin de déplacer
// Deux en SEO et c'est la deuxième qu'on déplace et deux en Web Design et c'est également
// la deuxième qu'on déplace
// Vérifier surtout la corresspondance dans le HTML
    function move(index) {
        if(index<3){
          // L'animation pour la deuxième et troisième de Graphic data-filter="graphic" dans le html
          $('.work_one').eq(index+2).animate({left:"+=25%",top:"0%", height:"350px"}, 200);
          $('.work_one').eq(index+5).animate({left:"+=50%",top:"0%", height:"350px"}, 200);
          // L'animation pour la deuxième de Web Design data-filter="web" dans le html
          $('.work_one').eq(index+6).animate({left:"+=25%",top:"0%", height:"350px"}, 200);
          // L'animation pour la deuxième de SEO data-filter="seo" dans le html
          $('.work_one').eq(index+7).animate({left:"+=25%",top:"0%", height:"350px"}, 200);
        }
      }
      // On réinitialise
    move(0);
    }
    else{
      // Sinon si data-filter ="*"(All)
      // Rajouter classes précédemment supprimmées sur chacune des div
      $(".work_one").removeAttr('style');
      $(".top").addClass("top_works");
      $(".bottom").addClass("bottom_works");
      $(".left").addClass("left_works");
      $(".right").addClass("right_works");
      $(".group_top").addClass("group_works_top");
      $(".group_bottom").addClass("group_works_bottom");
      // Supprimer les class active
      $(".all_works").removeClass("active");
      $(".work_one").removeClass("active");
    }  
});

 
   //affiche tous les travaux pour le menu "All"
  $('a[data-filter="*"]').click(function(event) {    
     $(".work_one").removeClass('filter_hide');
     
     return false;
  });
});