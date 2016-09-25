$( document ).ready(function() {
  $.getJSON( "https://api.meetup.com/2/cities.json?callback=?", function(data) {
    $.each( data, function() {
      console.log(data);
    });
  });
});