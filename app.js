window.onbeforeunload = function(){ window.scrollTo(0,0); }
//since there is scrolls on clicks below I wanted a page load to always load at top

$(window).load(function () {
  $('#gallery').jqcarousel();
  //initalizes carousel plugin
  let count = 0;
  //count is for click on carousel images, so that second click takes you to the project.
  console.log(count);

  //scroll from about button to about section
  $("#about-btn").on('click', function() {
    console.log('button clicked about');
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-section").offset().top
    }, 2000);
});

//scroll from contact button to contact section
$("#form-btn").on('click', function() {
  console.log('button clicked contact');
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#form-section").offset().top
  }, 2000);
});

//when link is clicked twice, crystal game page loads
$('#crystals').on('click', function() {
  console.log('crystal clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/unit-4-game/";
  }
});

//when ocean is clicked twice, trivia game page loads
$('#trivia').on('click', function() {
  console.log('trivia clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/TriviaGame/";
  }
});

//when train is clicked twice, train schedule page loads
$('#train').on('click', function() {
  console.log('train clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/train-game/";
  }
});

//when music is clicked twice, venue search page loads
$('#music').on('click', function() {
  console.log('music clicked');
  count++;
  if (count === 2) {
    window.location = "https://christiehennes.github.io./Project1/";
  }
});

//when pokedex is clicked twice, giphy-dex page loads
$('#poke').on('click', function() {
  console.log('poke clicked');
  count++;
  if (count === 2) {
    window.location = "https://kkirker.github.io/Giphy-HW/";
  }
});





});


