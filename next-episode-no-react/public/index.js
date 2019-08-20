
$(document).ready(function () {
    var loggedUser = (sessionStorage.getItem("user"));
    var aaaa = JSON.parse(loggedUser)

    console.log("linked");
    ////////////////////////////////SignUp///////////////////////////////////

    $("#signUpButton").on("click", function () {
        event.preventDefault();
        let user = {
            userName: $("#userNameSignUp").val().trim(),
            email: $("#email").val().trim(),
            password: $("#passwordSignUp").val().trim(),
            show: []
        };


        $.ajax({
            url: "/api/user/create",
            method: "POST",
            data: user
        }).then(function (result) {
            if (result) {
                window.location = "/dashboard"
                //(res.sendFile(__dirname + "/dashboard.html"));
                console.log(result);
            }
            sessionStorage.setItem("user", JSON.stringify(data));
        })



    })

    /////////////////////////////////Login/////////////////////////////////////////////////

    $("#loginButton").on("click", function () {
        console.log("click");
        let user = {
            email: $("#usernameLogin").val().trim(),
            password: $("#loginPassword").val().trim(),
        };

        $.ajax({
            url: "/api/user",
            method: "POST",
            data: user,
        }).then(function (result) {
            console.log(result);
            // if (error) {
            //     console.log(error);

            // }
            // else {
            // console.log(result);
            sessionStorage.setItem("user", JSON.stringify(result));
            window.location.href = "/dashboard"
            // }
            console.log(aaaa);
        })



    });

});


