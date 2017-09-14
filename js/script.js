$(document).ready(function(){

  $('.ham-trigger, .ham-nav').click(function(){
    $('.ham-nav').fadeToggle();
  });

  $('.logo').click(function(){
    $('.ham-nav').fadeOut();
  });

  $('.context .overlay').click(function(){
    $(this).fadeOut();
  });

  $('.context img').click(function(){
    $(this).parent().children().fadeIn();
  });
});
