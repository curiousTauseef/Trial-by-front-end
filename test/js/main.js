$(function (){
  console.log("js loaded");

//Toggle current class on navbar on click 
  $('nav ul li').click(function(){

    if(!$(this).hasClass("responsive")){
      
      $(this).siblings('.current').removeClass('current');
      $(this).addClass('current');
    }

  });

// display nav menu when clicking menu icon
  $navItems = null;

  $("nav ul li:nth-child(1)")
  .on("click", function() {

    event.preventDefault();
    $navItems = $(this).siblings();
    $navItems.slideToggle();

  });

  $(window).on('resize', function (){

    // fix display of navbar items when screen is resized
    if ($(window).width() > 690 && $navItems !== null){
      $navItems.show().css('display', 'inline');
      $("nav ul li:nth-child(2)").hide();
    }

    else if($(window).width() < 690 && $navItems !== null && $navItems.is(':visible')) {
        $navItems.show().css('display', 'block');
        $navItems.hide();
      }

    $(".pagetop").click(function() {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    // fix display of footer links when screen is resized
    if($(window).width() > 690 && $('.footerList').is(':hidden')){
      $('.footerList').show();
      $('.sitemapToggle').text('+');
    }

    else if ($(window).width() < 690 && $('.footerList').is(':visible')){
      $('.footerList').hide();
    }

  });

  $('.sitemap p').click(function(){

    if($('.sitemapToggle').text() === "+") {
      $('.sitemapToggle').text('-');
      $('.footerList').show();
    }

    else if($('.sitemapToggle').text() === "-"){
      $('.sitemapToggle').text('+');
      $('.footerList').hide();
    }

  });

});

