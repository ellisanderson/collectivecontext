$(document).ready(function(){

  $('.ham-trigger, .ham-nav').click(function(){
    $('.ham-nav').fadeToggle();
  });

  $('.logo').click(function(){
    $('.ham-nav').fadeOut();
  });
});
