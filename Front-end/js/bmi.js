var weight = prompt(" weight in kg : ");
var height = prompt(" height in m^2 : ");

function bmi_calc(a,b){
    return Math.round(a/(b)*(b));//Math.pow(x,y)>>x^y
}

var bmi = bmi_calc(weight,height);

console.log("bmi is : "+bmi+" kg/m^2");
alert("bmi is : "+bmi+" kg/m^2");
