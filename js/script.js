$(document).ready(function(){
  var header = "<header><div class='logo'><a href='index.html'>&rarr;CC&larr;</a></div><nav><ul class='main-nav'><li><a href='tunnel.html'>Tunnel</a></li></ul><div class='ham-trigger'>Menu</div><div class='ham-nav'><ul><li><a href='tunnel.html'>Tunnel</a></li></ul></div></nav></header>";
  var footer = "<footer><a href='instructions.html'>Want to participate?</a></footer>";

  $('body').prepend(header);
  $('body').append(footer);

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
