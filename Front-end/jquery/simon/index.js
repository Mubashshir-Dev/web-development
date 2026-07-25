var set = ["red","green","blue","yellow"];
var pattern = [];

var level = 0;
var clicks = [];
var counts = 0;


$(document).on("keypress",function(){
    game_start();
});


function game_start(){

    $(document).off("keypress");

    clicks = [];
    counts = 0;

    level++;

    $("h1").text("Level " + level);

    pattern.push(set[Math.floor(Math.random()*4)]);


    for(let i=0;i<pattern.length;i++){

        setTimeout(function(){

            $("."+pattern[i]).addClass("custom");

            setTimeout(function(){
                $("."+pattern[i]).removeClass("custom");
            },200);

        },500*i);

    }
}



$("button").on("click",function(){

    var clicked = $(this).attr("class");

    clicks.push(clicked);


    if(clicked === pattern[counts]){

        counts++;

        if(counts === pattern.length){

            setTimeout(function(){
                game_start();
            },1000);

        }

    }
    else{

        $("h1").text("Game Over");

    }

});