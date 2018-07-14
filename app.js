window.onbeforeunload = function(){ window.scrollTo(0,0); }


$(window).load(function () {
  $('#gallery').jqcarousel();
  let count = 0;
  console.log(count);

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

$('#crystals').on('click', function() {
  console.log('crystal clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/unit-4-game/";
  }
});

$('#trivia').on('click', function() {
  console.log('trivia clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/TriviaGame/";
  }
});

$('#train').on('click', function() {
  console.log('train clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/train-game/";
  }
});

$('#music').on('click', function() {
  console.log('music clicked');
  count++;
  if (count === 2) {
    window.location = "https://christiehennes.github.io./Project1/";
  }
});

$('#poke').on('click', function() {
  console.log('poke clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/Giphy-HW/";
  }
});





});


