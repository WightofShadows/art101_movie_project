/**
 * Authors: Group 2 -
 * Alejandro Silva <asilvase@ucsc.edu>
 * Becky Phillips <rbphilli@ucsc.edu>
 * Eloise Shevin <eshevin@ucsc.edu>
 * Ethan Chen <ethchen@ucsc.edu>
 * Jacob Rozio <jrozio@ucsc.edu>
 * Created: 16 March 2021
 * License: Public Domain
 * Link to main page: https://wightofshadows.github.io/art101_movie_project/html/snacks.html
 **/

//ajax for movie 1
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=e.%20t.%20the%20extraterrestrial",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "93f8468805msh8eb0d7c18ccdb0ep138158jsn89b55ce8261e",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

//append image, title and stats when done
$.ajax(settings).done(function (response) {
	console.log(response.d[0]);
	$("#movie_info_1").append("<img src=" + response.d[0].i.imageUrl + " height='250px' width='175px'>");
	$("#movie_info_1").append("<br>" + response.d[0].l + "</br>");
	$("#movie-one").append("<div>Year: " + response.d[0].y + "</div>");
	$("#movie-one").append("<div>Rank on IMDb: " + response.d[0].rank);
	$("#movie-one").append("<div>Starring: " + response.d[0].s);
});

//ajax for movie 2
const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=wall-e",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "93f8468805msh8eb0d7c18ccdb0ep138158jsn89b55ce8261e",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

//append image, title and stats when done
$.ajax(settings2).done(function (response) {
	console.log(response.d[0]);
	$("#movie_info_2").append("<img src=" + response.d[0].i.imageUrl + " height='250px' width='175px'>");
	$("#movie_info_2").append("<br>" + response.d[0].l + "</br>");
	$("#movie-two").append("<div>Year: " + response.d[0].y + "</div>");
	$("#movie-two").append("<div>Rank on IMDb: " + response.d[0].rank);
	$("#movie-two").append("<div>Starring: " + response.d[0].s);
});

//ajax for movie 3
const settings3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=gravity",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "93f8468805msh8eb0d7c18ccdb0ep138158jsn89b55ce8261e",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

//append image, title and stats when done
$.ajax(settings3).done(function (response) {
	console.log(response.d[1]);
	$("#movie_info_3").append("<img src=" + response.d[1].i.imageUrl + " height='250px' width='175px'>");
	$("#movie_info_3").append("<br>" + response.d[1].l + "</br>");
	$("#movie-three").append("<div>Year: " + response.d[1].y + "</div>");
	$("#movie-three").append("<div>Rank on IMDb: " + response.d[1].rank);
	$("#movie-three").append("<div>Starring: " + response.d[1].s);
});
