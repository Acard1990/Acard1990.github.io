$('#search-button').on('click', function() {
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  var api = "8ccb3d4f77cb42e1b9e9b7d76cf055d6";
  var q = $('#search').val();
  var num = $('#number').val();
  var start = $('#start').val();
  var end = $('#end').val();
  url += '?' + $.param({
    'api-key': api,
    'q': q,
    'begin-date': start,
    'end-date': end
  });


  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    var articles = result.response.docs;

    for (var i = 0; i < articles.length; i++) {
      var newsDiv = $('<div>');
      var title = $('<p>').text(articles[i].headline);
      var author = $('<p>').text(articles[i].byline);
      var section = $('<p>').text(articles[i].section_name);
      var publisher = $('<p>').text(articles[i].pub_date);
      var link = $('<p>').text(articles[i].web_url);

      newsDiv.append(title);
      newsDiv.append(author);
      newsDiv.append(section);
      newsDiv.append(publisher);
      newsDiv.append(link);
      $('#top-articles').prepend(newsDiv);
    }
  });
});

$('#clear-results').on('click', function(){
  $('#top-articles').empty();
});
