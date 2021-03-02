//take to genre page
$("#get-ticket").onclick( function()
{
  var nameVal = $("#ticket-name").val();
  var genreVal = $("#ticket-genre").val();

  $("#ticket-result").append("<div id='ticket-image' src='img/ticket.jpg'></div>");
  $("#ticket-result").append("<p>Name: " + nameVal + "</p>");
  $("#ticket-result").append("<p>Favorite Genre: " + genreVal + "</p>");
})
