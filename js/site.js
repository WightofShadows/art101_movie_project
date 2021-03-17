/**
 * Authors: Group 2 -
 * Alejandro Silva <asilvase@ucsc.edu>
 * Becky Phillips <rbphilli@ucsc.edu>
 * Eloise Shevin <eshevin@ucsc.edu>
 * Ethan Chen <ethchen@ucsc.edu>
 * Jacob Rozio <jrozio@ucsc.edu>
 * Created: 27 February 2021
 * License: Public Domain
 * Link to main page: https://wightofshadows.github.io/art101_movie_project/html/snacks.html
 **/

var hasTicket = false;

// prints out an image of a ticket with user info once clicking button
$("#get-ticket").click( function() {
  var nameVal = $("#ticket-name").val();
  var genreVal = $("#ticket-genre").val();

  $("#ticket-result").html("<div><img id='ticket-image' src='img/ticket.jpg'></img>" +
  "<div id='name-genre-result'><p><b>Name: " + nameVal + "</b></p><p><b>Favorite Genre: " + genreVal + "</b></p></div></div>");
  hasTicket = true;
})

$("#door_button").hover(
  function() {
    $(this).attr("src", "img/open_door_button_alt.png");
  }, function() {
    $(this).attr("src", "img/closed_door_button_alt.png");
  })

$("#door_button").click(function() {
  // require ticket to pass through doors
  if (!hasTicket) {
    alert("You need a ticket before you can enter!");
  }
  else {
    location.href='html/genres.html';
  }
})
