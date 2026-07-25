var output = [];
output.push(1);
output.push(2);

function fizzbuzz(x){
    if(x%3===0 && x%5===0){
        output.push("fizzbuzz");
        
    }
    else if(x%3===0){
        output.push("fizz");
        
    }
    else if(x%5===0){
        output.push("buzz")
    }
    else{
        output.push(x);
    }
}

var st = 1 ;
while(st <= 100){
    fizzbuzz(st);
    st++;
}

console.log(output);