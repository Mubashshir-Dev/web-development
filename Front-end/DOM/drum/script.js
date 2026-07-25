
var target = document.querySelectorAll("button");

for(var i = 0 ; i < target.length ; i++){

    target[i].addEventListener("click",function (){

    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    click(buttonInnerHtml);});
};

document.addEventListener("keypress",function(event){
    makesound(event.key);
    click(event.key);
});


function click(key){
    var activeButton = document.querySelector(("."+key));
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

function makesound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break
        case "a":
            var tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break
        case "s":
            var tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break
        case "d":
            var tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break
        case "j":
            var snare = new Audio("sound/snare.mp3");
            snare.play();
            break
        case "k":
            var crash = new Audio("sound/crash.mp3");
            crash.play();
            break
        case "l":
            var kick_bass = new Audio("sound/kick-bass.mp3");
            kick_bass.play();
            break
        default:
            console.log("error");
    }

}