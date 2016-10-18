$(function (){
  console.log("js loaded");

  $("nav ul li:nth-child(1)")
  .on("click", function() {
    console.log("clicked")
    event.preventDefault();
    $(this).siblings().slideToggle();
  });
})