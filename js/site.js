//take to genre page


// prints out an image of a ticket with user info once clicking button
$("#get-ticket").click( function()
{
  var nameVal = $("#ticket-name").val();
  var genreVal = $("#ticket-genre").val();

  $("#ticket-result").append("<div id='ticket-image' src='img/ticket.jpg'></div>");
  $("#ticket-result").append("<div><p>Name: " + nameVal + "</p>" +
  "<p>Favorite Genre: " + genreVal + "</p>");
})

//
$("#enter").click()
