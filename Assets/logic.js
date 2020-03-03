
// Use OpenWeather API to retrive weather data for cities
var APIkey = "f1aa41731ebff07c25c28f270a17faac";
// Bujumbura ID for testing
var cityID = "425378";
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEntry + "&appid=" + APIkey;



// var AJAXbyCity = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEntry + "&appid=" + APIkey;


$(document).ready(function(){
    $("#searchBy").hide(0).delay(300).fadeIn(500, "swing");
    $("#textInput").hide(0).delay(400).fadeIn(500, "swing");
    $("#htmlOnLoadIcon").hide(0).delay(1100).fadeIn(800, "swing");
    $("#htmlCity").hide(0).delay(1100).fadeIn(800, "swing");
    $(".ui.header.fade").hide(0).delay(1100).fadeIn(800, "swing");
    $("#returnContainer").hide(0).delay(1100).slideDown(600, "swing");
});

$( "#cityEntered" ).keypress(function(e) {
    if(e.which == 13) {
        var cityEntry = $("#cityEntered").val(); 
        // console.log("City Entered: " + cityEntry);

        // Use AJAX to hook into API & retrieve data in JSON format
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEntry + "&units=imperial&appid=" + APIkey;
        // api.openweathermap.org/data/2.5/weather?q=London&units=imperial



        $.ajax({
            url: queryURL,
            method: "GET",
            success: 
                function () {
                    console.log("City!");
                    $("#errorMsg").delay(50).fadeOut(100, "swing");
                },
                statusCode: {
                    404: function() {
                        console.log("Not a City");
                        $("#errorMsg").text("Try another location");
                        $("#errorMsg").hide(0).delay(50).fadeIn(250, "swing");
                    }
                }
            })




        .then(function(response) {
            // Returns city name
            console.log(response);
            console.log(response.weather[0].main);

            // Hide onLoadIcon & Show date, condition, & conditionIcon
            $("#htmlOnLoadIcon").css("display", "none");
            $("#htmlIcon").css("display", "block");
            $("#htmlDate").css("display", "block");
            $("#htmlCondition").css("display", "block");

            // City info to HTML
            $("#htmlCity").text(response.name);
            $("#htmlTemp").text(response.main.temp + "° F");
            $("#htmlHumid").text(response.main.humidity + " RH");
            $("#htmlWind").text(response.wind.speed + " MPH");
            $("#htmlCondition").text(response.weather[0].main);           


            // Image based on weather conditions
            var dataIcon = $("#htmlIcon");
            if (response.weather[0].main === "Rain") {
                dataIcon.removeAttr();
                dataIcon.attr("data-icon", "wi:day-rain");
            } else if (response.weather[0].main === "Thunderstorm") {
                dataIcon.removeAttr();
                dataIcon.attr("data-icon", "wi:day-storm-showers");
            } else if (response.weather[0].main === "Drizzle") {
                dataIcon.removeAttr();
                dataIcon.attr("data-icon", "wi:day-rain-mix");
            } else if (response.weather[0].main === "Snow") {
                dataIcon.removeAttr();
                dataIcon.attr("data-icon", "wi:day-snow");
            } else if (response.weather[0].main === "Clouds") {
                dataIcon.removeAttr();
                dataIcon.attr("data-icon", "wi:day-cloudy");
            } else {
                dataIcon.removeAttr();
                dataIcon.attr("data-icon", "wi:day-sunny");
            }
        });


        // Today's date to HTML
        var todaysDate = new Date();
        var year = todaysDate.getFullYear();
        var month = todaysDate.getMonth() + 1;
        var day = todaysDate.getDate();
        // console.log(month, day, year);
        $("#htmlDate").text(month + " / " + day + " / " + year);
    }
});







// Display the following:
    // City
    // Date
    // Icon Image
    // Temperature
    // Humidity
    // Wind Speed