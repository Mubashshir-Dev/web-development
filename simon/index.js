//essentials
var color_array = ["red", "green", "blue", "yellow"];

function random_selector() {
    return color_array[Math.floor(Math.random() * color_array.length)];
}
var num=1;
var sequence = [];

//code

var enter_sequence=[];
var chances = 0;
function clicked(){
	enter_sequence.push($(this).attr("class"));
	if(JSON.stringify(enter_sequence) === JSON.stringify(sequence)){
		num++;
		enter_sequence.length=0;
		start();
		chances=0;

	}
	else if(chances==num){
		$('h1').text("You lose!");
	}
	chances++;
}

$("button").on("click",clicked)

function blink(arg){
	$("."+arg).toggleClass("custom");
	setTimeout(function(){
		$("."+arg).toggleClass("custom");
	}, 500);

}

function play(){

	sequence.push(random_selector());
	for(let i = 0; i<sequence.length ; i++){
		blink(sequence[i]);
	}
	
}

function start() {
	$("h1").html("Level "+ num);
	setTimeout(play, 1000);
}

$(document).on("keypress",start);






