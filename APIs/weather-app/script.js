
const express = require('express');
var app = express();
const https = require("https");


app.get("/",function(req,res){
    const url = "https://api.weatherapi.com/v1/current.json?q=mumbai&key=fb7342a15d2a4d6abe5104956262807";
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    })
    res.sendFile(__dirname+"/index.html")
})

app.listen(4000,function(){
    console.log("server started on port 4000");
})