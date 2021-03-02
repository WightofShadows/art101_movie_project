/**
 * Authors: Group 2 -
 * Alejandro Silva
 * Becky Phillips
 * Eloise Shelvin
 * Ethan Chen <ethchen@ucsc.edu>
 * Jacob Rozio
 * Created: 27 February 2021
 * License: Public Domain
 * Link to main page: https://wightofshadows.github.io/art101_movie_project/html/snacks.html
 **/

//snack balance
var bal = 20;
//adjustable snack costs
var pcost = 5;
var scost = 2;
//number of purchases for each snack
var ppurchases = 0;
var spurchases = 0;

//Balance tracker
$("#content").append("<p id='balance'>Your balance: $" + bal + "</p>");

//Purchase list
$("#purchase_list").append("<li id='pop_list'>Popcorn (" + ppurchases + ")</li>");
$("#purchase_list").append("<li id='soda_list'>Soda (" + spurchases + ")</li>");

//Popcorn
//Append popcorn button
$("#content").append("<button id='pop'>Popcorn ($" + pcost + ")</button>");
//Add event listener
$("#pop").click(function() {
  //If not enough money, print a message
  if (bal < pcost) {
    $("#sub_content_2").html("<p>NOT ENOUGH CASH</p>");
    $("#sub_content_2").css("color", "red");
  }
  //Otherwise, add 1 to purchases, subtract cost and update purchase list
  else {
    ppurchases++;
    $("#pop_list").html("Popcorn (" + ppurchases + ")");
    $("#sub_content_2").html("");
    bal -= pcost;
  }
  //Update balance tracker
  $("#balance").html("Your balance: $" + bal);
})

//Soda (works the same way)
$("#content").append("<button id='soda'>Soda ($" + scost + ")</button>");
$("#soda").click(function() {
  if (bal < scost) {
    $("#sub_content_2").html("<p>NOT ENOUGH CASH</p>");
    $("#sub_content_2").css("color", "red");
  }
  else {
    spurchases++;
    $("#soda_list").html("Soda (" + spurchases + ")");
    $("#sub_content_2").html("");
    bal -= scost;
  }
  $("#balance").html("Your balance: $" + bal);
})

$("#reset").click(function() {
  bal = 20;
  ppurchases, spurchases = 0;
})
