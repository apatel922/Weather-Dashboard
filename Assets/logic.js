
// Use OpenWeather API to retrive weather data for cities
var APIkey = "f1aa41731ebff07c25c28f270a17faac";
// Bujumbura ID
var cityID = "425378";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&APPID=" + APIkey;



// Use AJAX to hook into API & retrieve data in JSON format
$.ajax({
    url: queryURL,
    method: "GET"
})

.then(function(response) {
    // Returns city name
    // console.log(response.city.name);

});

// Display the following:
    // City
    // Date
    // Icon Image
    // Temperature
    // Humidity
    // Wind Speed