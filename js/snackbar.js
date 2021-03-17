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

//snack balance
var bal = 20;
//adjustable snack costs
var pcost = 5;
var scost = 2;
var ccost = 3;
//number of purchases for each snack
var ppurchases = 0;
var spurchases = 0;
var cpurchases = 0;

//Balance tracker
$("#snacks_text").append("<p id='balance'>Your balance: $" + bal + "</p>");

//Purchase list
$("#purchase_list").append("<li id='pop_list'>Popcorn (" + ppurchases + ")</li>");
$("#purchase_list").append("<li id='soda_list'>Soda (" + spurchases + ")</li>");
$("#purchase_list").append("<li id='candy_list'>Candy (" + cpurchases + ")</li>");

//Add tag text
$("#popcorn_tag").html("Popcorn ($" + pcost + ")");
$("#soda_tag").html("Soda ($" + scost + ")");
$("#candy_tag").html("Candy ($" + ccost + ")");

//Popcorn
//Append popcorn button
$("#popcorn_button").attr("title", "Popcorn ($" + pcost + ")");
//Add event listener
function popFunction() {
  //If not enough money, print a message
  if (bal < pcost) {
    alert("Not enough cash!");
  }
  //Otherwise, add 1 to purchases, subtract cost and update purchase list
  else {
    ppurchases++;
    $("#pop_list").html("Popcorn (" + ppurchases + ")");
    bal -= pcost;
  }
  //Update balance tracker
  $("#balance").html("Your balance: $" + bal);
}

//Soda (works the same way)
$("#soda_button").attr("title", "Soda ($" + scost + ")");
function sodaFunction() {
  if (bal < scost) {
    alert("Not enough cash!");
  }
  else {
    spurchases++;
    $("#soda_list").html("Soda (" + spurchases + ")");
    bal -= scost;
  }
  $("#balance").html("Your balance: $" + bal);
}

//Candy
$("#candy_button").attr("title", "Candy ($" + ccost + ")");
function candyFunction() {
  if (bal < ccost) {
    alert("Not enough cash!");
  }
  else {
    cpurchases++;
    $("#candy_list").html("Candy (" + cpurchases + ")");
    bal -= ccost;
  }
  $("#balance").html("Your balance: $" + bal);
}

//reset values back to default
$("#reset").click(function() {
  bal = 20;
  ppurchases = 0;
  spurchases = 0;
  cpurchases = 0;
  //Update on screen values
  $("#balance").html("Your balance: $" + bal);
  $("#pop_list").html("Popcorn (" + ppurchases + ")");
  $("#soda_list").html("Soda (" + spurchases + ")");
  $("#candy_list").html("Candy (" + cpurchases + ")");
})
