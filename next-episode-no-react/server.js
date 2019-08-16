var unirest = require("unirest");
var express = require("express");
var app = express();
var mongoose = require("mongoose");
const User = require("./models/users");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/nextepdb", { useNewUrlParser: true });

app.use(express.static('public'));

var test = function (request, response) {
    var req = unirest("GET", `https://frecar-epguides-api-v1.p.rapidapi.com/${request.body.show}/next/`);
    console.log(request.body)
    req.headers({
        "x-rapidapi-host": "frecar-epguides-api-v1.p.rapidapi.com",
        "x-rapidapi-key": "15cacc2175msh52cf4f4aa8efd48p166945jsnb4864ae31222"
    });


    req.end(function (res) {
        // if (res.error) throw new Error(res.error);
        response.json(res.body);
        console.log(res.body);
    });
}

app.post("/dashboard", test);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
    // res.send("hello");
});

app.get("/dashboard", function (req, res) {
    res.sendFile(__dirname + "/public/dashboard.html");
    // res.send("hello");
})

app.post("/", function (req, res) {

    User.create(req.body);


})

app.listen(3002);