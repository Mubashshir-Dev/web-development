function leapyear(year){
    if(year%400===0){
        if(year%100===0){
            alert("not leap year. ");
        }
        else{
            alert("leap year");
        }
    }
    else if(year%4===0){
        alert("leap year");
    }
    else{
        alert("not leap year");
    }
}


function leapyear(year){
    if(year%100===0 && year%400!==0 || year%4!==0){
        alert("not leap year. ");
    }
    else{
        alert("leap year");
    }
}