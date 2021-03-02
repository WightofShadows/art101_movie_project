//take to genre page


// prints out an image of a ticket with user info once clicking button
$("#get-ticket").click( function() {
  var nameVal = $("#ticket-name").val();
  var genreVal = $("#ticket-genre").val();

  $("#ticket-result").html("<div><img id='ticket-image' src='img/ticket.jpg'></img>" +
  "<div id='name-genre-result'><p>Name: " + nameVal + "</p><p>Favorite Genre: " + genreVal + "</p></div></div>");
})

// clicking button takes user to another page with genrrs the user can choose from
/*
$("#enter").click( function() {
  window.open(location.hre)
})
*/

// click enter button to go to genre page
