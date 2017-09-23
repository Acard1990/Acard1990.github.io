
var subjects = ["Lexus", "Honda", "Acura", "Ferrari", "Lamborghini", "Maserati", "Subaru", "Audi", "BMW", "Porsche", "VW"];
var queryURL = "https://api.giphy.com/v1/gifs/search"; //api_key= dc6zaTOxFJmzC &limit=10";
var api = "dc6zaTOxFJmzC";
var query, still, animate;

function setButtons(){
  $.each(subjects, function(i) { $('#buttons').append('<button id="sub-btns" class="btn btn-primary">' + subjects[i] + '</button>'); });
}
setButtons();
function showGifs() {
  queryURL += '?' + $.param({'api_key': api, 'q': query, 'limit': 10 });
  $.ajax({ url: queryURL, method: "GET"})
  .done(function(response) {
    console.log(response);
    $.each(response.data, function(s) {
      var image_content = $('<div class="gifs">');
      var rating_area = $('<p>').text('Rating: ' + response.data[s].rating);
      var gif_area = $('<img class="img-responsive">');
      gif_area.attr({
        'src': response.data[s].images.fixed_height_still.url,
        'data-still': response.data[s].images.fixed_height_still.url,
        'data-animate': response.data[s].images.fixed_height.url,
        'data-state': 'still'
      });
      image_content.append(rating_area);
      image_content.append(gif_area);
      $('#images').prepend(image_content);
    });
  });
}
$('#add-gifs').on('click', function(event){
  event.preventDefault(event);
  if ($('#search-bar').val().length > 0) {
    var newButton = $('#search-bar').val();
    $('#buttons').empty();
    subjects.push(newButton);
    setButtons();
    $('#search-bar').val('');
  }
});
$(document).on('click', 'img', function(){
  var state = $(this).attr('data-state');
  console.log(state);
  if (state == 'still') {
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  } else {
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }
});
$(document).on('click', '#sub-btns', function(){
  $('#images').empty();
  query = $(this).html();
  showGifs();
});
