$(document).ready(function(){

	var num_win = 0;
	var num_lose = 0;


	var score_to_guess;
	var player_total_score;
	var diamon;
	var ruby;
	var gem;
	var emerald;

	setup();

	$("img").on("click", function() {
		console.log(this.value);
		//if (this.value) {}
	});


	function setup () {
		var x1 = 19 ;
		var y1 = 120;

		var x2 = 1;
		var y2 = 12

		score_to_guess = Math.floor(Math.random() * ((y1-x1)+1) + x1);;
		
		diamon = Math.floor(Math.random() * ((y2-x2)+1) + x1);
		ruby = Math.floor(Math.random() * ((y2-x2)+1) + x1);
		gem = Math.floor(Math.random() * ((y2-x2)+1) + x1);
		emerald = Math.floor(Math.random() * ((y2-x2)+1) + x1);

		score_to_guess = 0;
		player_total_score = 0;
	}


});



