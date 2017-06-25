$(document).ready(function(){

	var num_win = 0;
	var num_lose = 0;


	var score_to_guess = 0;
	var player_total_score = 0;
	var diamond;
	var ruby;
	var gem;
	var emerald;

	setup();

	$(".img").on("click", function() {
		

		if (this.alt === "diamond") 
			player_total_score += diamond;
		else if (this.alt === "ruby") 
			player_total_score += ruby;
		else if (this.alt === "gem")
			player_total_score += gem
		else if (this.alt === "emerald")
			player_total_score += emerald;
	
		$("#score_num_id").html(player_total_score);
		console.log("player score: " + player_total_score);

		if (player_total_score === score_to_guess) {
			alert("Congratulations you won!!!");
			++num_win;
			setup();
		}

		if (player_total_score > score_to_guess) {
			alert("You lost.... Try again!");
			++num_lose;
			setup();
		}

	});


	function setup () {
		var x1 = 19 ;
		var y1 = 120;

		var x2 = 2;
		var y2 = 12

		score_to_guess = Math.floor(Math.random() * ((y1-x1)+1) + x1);;
		player_total_score = 0;
		diamond = Math.floor(Math.random() * ((y2-x2)+1) + x2);
		ruby = Math.floor(Math.random() * ((y2-x2)+1) + x2);
		gem = Math.floor(Math.random() * ((y2-x2)+1) + x2);
		emerald = Math.floor(Math.random() * ((y2-x2)+1) + x2);
		player_total_score = 0;

		$("#number_to_guess_id").html(score_to_guess);
		$("#score_num_id").html(player_total_score);	
		$("#win_id").html(num_win);
		$("#lose_id").html(num_lose);

		var str = "diamond: " + diamond;
		str += "\ngem: " + gem;
		str += "\nemerald: " + emerald;		
		str += "\nruby: " + ruby;
		console.log(str);
	}


});



