$(document).ready(function(){
  var header = "<header><div class='logo'><a href='index.html'>&rarr;CC&larr;</a></div><nav><ul class='main-nav'><li><a href='tunnel.html'>Tunnel</a></li><li><a href='instructions.html'>Instructions</a></li></ul><div class='ham-trigger'>Menu</div><div class='ham-nav'><ul><li><a href='tunnel.html'>Tunnel</a></li><li><a href='instructions.html'>Instructions</a></li></ul></div></nav></header>";
  var footer = "<footer><a href='instructions.html'>Want to participate?</a></footer>";

  // $('body').prepend(header);
  // $('body').append(footer);
  $('body').append('<footer>Ellis Henry Anderson / 2017</footer');

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

  var quotes = [
    "Imagining someone punching a hole in the tunnel wall late at night out of frustration certainly makes the tunnel experience more interesting.",
    "I've always pondered who decided to make the entrance of that tunnel like a little meditation garden. It's random, but a nice break between the parking lot and the damp tunnel.",
    "Escape routes aren't always good, as this one makes me have wet feet as the puddles are almost impossible to miss.",
    "The tunnel feels very confined to me, I feel that you could grab everything with your hair touching the roof.",
    "It appears to be something that will last for a very long time.",
    "I feel like it's always wet and damp in there, regardless of the last time it rained.",
    "I can feel secure knowing it was under surveillance.",
    "If a tunnel is always silent, is it really a tunnel or is it just an extension of the same space you were just in? What's its purpose?",
    "As I was walking up to the tunnel it seemed mysterious. But when I first went in it felt intimate...",
  ];

  var i = (Math.random() * quotes.length) | 0;

  $('#quotesText').html(quotes[i]);

});
