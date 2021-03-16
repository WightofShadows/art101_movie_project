// prints out an image of a ticket with user info once clicking button
$("#get-ticket").click( function() {
  var nameVal = $("#ticket-name").val();
  var genreVal = $("#ticket-genre").val();

  $("#ticket-result").html("<div><img id='ticket-image' src='img/ticket.jpg'></img>" +
  "<div id='name-genre-result'><p><b>Name: " + nameVal + "</b></p><p><b>Favorite Genre: " + genreVal + "</b></p></div></div>");
})

$("#door_button").hover(
  function() {
    $(this).attr("src", "img/open_door_button_alt.png");
  }, function() {
    $(this).attr("src", "img/closed_door_button_alt.png");
  })
