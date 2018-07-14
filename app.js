window.onbeforeunload = function(){ window.scrollTo(0,0); }

$(window).load(function () {
  $('#gallery').jqcarousel();
  });

  $("#about-btn").on('click', function() {
    console.log('button clicked about');
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-section").offset().top
    }, 2000);
});

$("#form-btn").on('click', function() {
  console.log('button clicked contact');
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#form-section").offset().top
  }, 2000);
});