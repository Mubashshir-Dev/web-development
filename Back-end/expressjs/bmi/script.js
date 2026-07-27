const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/result", function (req, res) {

    var height = Number(req.body.h);
    var weight = Number(req.body.w);

    // Agar height cm me hai
    height = height / 100;

    var bmi = weight / (height * height);

    res.send("<h1>BMI is : " + bmi.toFixed(2) + " kg/m<sup>2</sup></h1>");
});

app.listen(9900, function () {
    console.log("Server started on port 9900");
});