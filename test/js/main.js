$(function (){
  console.log("js loaded");

  $navItems = null;

  $("nav ul li:nth-child(1)")
  .on("click", function() {

    event.preventDefault();

    $navItems = $(this).siblings();

    $navItems.slideToggle();
  });


  $(window).on('resize', function (){

    if ($(window).width() > 690 && $navItems !== null){
      $navItems.show().css('display', 'inline');
      $("nav ul li:nth-child(2)").hide();
    }
    else if($(window).width() < 690 && $navItems !== null && $navItems.is(':visible')) {
        $navItems.hide();
      }
  });

  
});

