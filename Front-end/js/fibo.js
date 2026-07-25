var prev = 1;
var next = 0;
var temp ;
var output = [];
// terms = prompt("no of terms : ");
terms=10;
for(var i = 0 ; i < terms ; i++){
    output.push(next);
    temp = prev;
    prev = next;
    next+=temp;
}

console.log(output);