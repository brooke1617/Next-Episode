// import shows from "./shows.json";
// var User = require("../models/users");

$(document).ready(function () {
    console.log("linked");
    $("#add").on("click", function () {
        console.log("click");


        $.ajax({
            url: "/dashboard",
            method: "POST",
            data: { show: $("#showSearch").val() }
            //data: user
        }).then(function (response) {
            console.log(response);
            console.log(response.episode.show.epguide_name);
            console.log(response.episode.season);
            console.log(response.episode.number);
            console.log(response.episode.title);
            console.log(response.episode.release_date);

            // var tRow = $("<tr>");

            // // Methods run on jQuery selectors return the selector they we run on
            // // This is why we can create and save a reference to a td in the same statement we update its text
            // var name = $("<td>").text(response.episode.show.epguide_name);
            // var season = $("<td>").text(response.episode.season);
            // var episode = $("<td>").text(response.episode.number);
            // var title = $("<td>").text(response.episode.title);
            // var date = $("<td>").text(response.episode.release_date);

            // // Append the newly created table data to the table row
            // tRow.append(name, season, episode, title, date);
            // // Append the table row to the table body
            // $("tbody").append(tRow);
        });

        // console.log($("#email").val());
        // console.log($("#password").val());

    })


    ////////////////////////////////SignIn-SignUp/////////////////////

    $("#signUpButton").on("click", function () {
        event.preventDefault();
        let user = {
            userName: $("#userNameSignUp").val().trim(),
            email: $("#email").val().trim(),
            password: $("#passwordSignUp").val().trim(),
            show: []
        };


        $.ajax({
            url: "/",
            method: "POST",
            data: user
            //data: user
        }).then(res.sendFile(__dirname + "/dashboard.html"));


    })
    $("#signInButton").on("click", function () {
        app.post("/dashboard", function (req, res) {
            res.sendFile(__dirname + "/public/dashboard.html");
            // res.send("hello");
            state = {
                shows
            };



        });

    })
});