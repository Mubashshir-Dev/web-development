const express = require("express");
var app = express();

app.get("/",function(req,res){
	res.send("<h1>root of server</h1>")
})

app.get("/contact",function(req,res){
	res.send('<a href="mailto:mubashshir@gmail.com">contact me</a>')
})

app.get("/about",function(req,res){
	res.send("<h1>i am mubashshir khan</h1>")
})

app.listen("3000",function(){
	console.log("started on port 3000");
})