prompt("what is your name? : ");
prompt("what is their name? : ");

var love_perc=Math.random();
love_perc*=100;
love_perc=Math.floor(love_perc);
love_perc+=1;

if(love_perc>=70){
    alert("your love is "+love_perc+"% you both love each other." );
}
else if(love_perc<70 && low_perc>=30 ){
    alert("your love is "+love_perc+"% .");
}
else{
    alert("your love is "+love_perc+"% you both go together like oil and water.");
}



