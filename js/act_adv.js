const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=raiders%20of%20the%20lost%20ark",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "93f8468805msh8eb0d7c18ccdb0ep138158jsn89b55ce8261e",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response.d[0]);
	$("#movie_info_1").append("<img src=" + response.d[0].i.imageUrl + " height='250px' width='175px'>");
	$("#movie_info_1").append("<br>" + response.d[0].l + "</br>");
	$("#movie-one").append("<div>Year: " + response.d[0].y + "</div>");
	$("#movie-one").append("<div>Rank on IMDb: " + response.d[0].rank);
	$("#movie-one").append("<div>Starring: " + response.d[0].s);
});

const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=spider%20man%202",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "93f8468805msh8eb0d7c18ccdb0ep138158jsn89b55ce8261e",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

$.ajax(settings2).done(function (response) {
	console.log(response.d[0]);
	$("#movie_info_2").append("<img src=" + response.d[0].i.imageUrl + " height='250px' width='175px'>");
	$("#movie_info_2").append("<br>" + response.d[0].l + "</br>");
	$("#movie-two").append("<div>Year: " + response.d[0].y + "</div>");
	$("#movie-two").append("<div>Rank on IMDb: " + response.d[0].rank);
	$("#movie-two").append("<div>Starring: " + response.d[0].s);
});

const settings3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb8.p.rapidapi.com/auto-complete?q=die%20hard",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "93f8468805msh8eb0d7c18ccdb0ep138158jsn89b55ce8261e",
		"x-rapidapi-host": "imdb8.p.rapidapi.com"
	}
};

$.ajax(settings3).done(function (response) {
	console.log(response.d[0]);
	$("#movie_info_3").append("<img src=" + response.d[0].i.imageUrl + " height='250px' width='175px'>");
	$("#movie_info_3").append("<br>" + response.d[0].l + "</br>");
	$("#movie-three").append("<div>Year: " + response.d[0].y + "</div>");
	$("#movie-three").append("<div>Rank on IMDb: " + response.d[0].rank);
	$("#movie-three").append("<div>Starring: " + response.d[0].s);
});
