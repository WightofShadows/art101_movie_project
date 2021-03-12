//take to genre page


// prints out an image of a ticket with user info once clicking button
$("#get-ticket").click( function() {
  var nameVal = $("#ticket-name").val();
  var genreVal = $("#ticket-genre").val();

  $("#ticket-result").html("<div><img id='ticket-image' src='img/ticket.jpg'></img>" +
  "<div id='name-genre-result'><p>Name: " + nameVal + "</p><p>Favorite Genre: " + genreVal + "</p></div></div>");
})

// hovering things using js
// while( $("#enter").hover == "true") {
//   $("#enter").style.transition = "all 5s";
// }
// "enter" button grows a bit while hovering over it
// $("#enter").hover( function() {
//   $(this).css("width", "70px");
//   $(this).css("height", "30px");
// }, function() {
//   $(this).css("width", "initial");
//   $(this).css("height", "initial");
// })
