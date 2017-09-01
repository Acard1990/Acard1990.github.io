//4 crystals
//crystals have random number result
//new number shoud be generated everytime we win or lose
//when clicking crystal it should add to previous result
//if not equal we start over
//if equal then we increment a win counter

var random_result;
var losses = 0;
var win = 0;
var previous = 0;


var resetAndStart = function() {

  $(".crystals").empty();

  var images = [
    'http://www.totpi.com/wp-content/uploads/2016/11/0202121-21-1500x840.jpg',
    'http://www.tiffany.com/shared/images/engagement/uv-dark-mobile.png',
    'http://channelingerik.com/wp-content/uploads/2015/12/Crystal-Fantasy-Wallpaper-Desktop.jpg',
    'http://wlpapers.com/images/beautiful-colors-1.jpg'
  ];

  random_result = Math.floor(Math.random() * 69) + 30;


  $("#result").html('Good luck: ' + random_result);

  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    var crystal = $("<div>");

    crystal.attr({
      "class": 'crystal transform',
      "data-random": random
    });

    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });


    $(".crystals").append(crystal);

  }

  $("#previous").html("Total Score: " + previous);

}


resetAndStart();


$(document).on('click', ".crystal", function() {

  $('.transform').toggleClass('transform-active');
  //still working on the .transform-reset.  Not sure
  //if I should create a loop that only runs once or
  //possibly do a conditional statement for the effect.

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("#previous").html("Total score: " + previous);

  console.log(previous);

  if (previous > random_result) {

    losses++;

    $("#losses").html("You lost: " + losses);

    previous = 0;

    resetAndStart();

  } else if (previous === random_result) {

    win++;
    //still working on this congratulatory spin
    //$('.transform').toggleClass('winning-spin');

    $("#win").html("You win: " + win);

    previous = 0;

    resetAndStart();

  }

});
