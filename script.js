function displayCast(object) {
	if ($(".displayData").is(':empty')) {
		for (var i = 0; i < object.cast.length; i++) {
		var text;
		var char = object.cast[i];
		text = "<li>" + char.voiceBy + " as " + char.name + " which is a " + char.animal + ".</li>";
		$(".displayData").append(text);
		}
	}
	else {
		$(".displayData").empty();
	}
}

function createCharacters() {
	return {

		"title" : "Zootopia",
		"cast" : [

			{
				"name" : "Judy Hopps",
				"voiceBy" : "Ginnifer Goodwin",
				"animal" : "rabbit"
			},

			{
				"name" : "Nicholas Wilde",
				"voiceBy" : "Jason Bateman",
				"animal" : "fox"
			},

			{
				"name" : "Chief Bogo",
				"voiceBy" : "Idris Elba",
				"animal" : "buffalo"
			},

			{
				"name" : "Dawn Bellwether",
				"voiceBy" : "Jenny Slate",
				"animal" : "sheep"
			}

		]

	};
}

$(document).ready(function() {
	$(".button").mouseover(function() {
		$(this).css("border", "2px solid blue");
	});

	$(".button").mouseout(function() {
		$(this).css("border", "2px solid black");
	});

	$(".button").click(function() {
		var movie = createCharacters();
		displayCast(movie);
	});
});