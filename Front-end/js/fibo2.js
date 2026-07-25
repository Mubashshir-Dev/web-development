var output = [];
function fibo(terms){
    if(terms===0){
        return [];
    }
    if(terms === 1){
        return [0];
    }
    else if(terms==2){
        return [0,1];
    }
    else{
        output=[0,1];
        for(var i = 2 ; i < terms ; i++){
            output.push(output[i-2]+output[i-1]);
        } 
        return output; 
    }
}

console.log(fibo(50));