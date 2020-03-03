<br>

# Weather Dashboard



---
<br>

## OpenWeather API Setup

First thing was to get my API key and set it to a variable.  I passed this on into my variable, queryURL.  This references the Current Weather data API and the call that goes by city name.  

```

var APIkey = "f1aa41731ebff07c25c28f270a17faac";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEntry + "&units=imperial&appid=" + APIkey;

```

<br>

---

<br>

## AJAX on 'Enter' Keypress

I didn't want to use the onclick( ) method that's been the status quo for running functions until now.  

Instead, I wanted to use the 'enter' key to trigger my API call.  I found a several Stack Overflow posts saying that enter is almost universally always referenced as #13 on all browsers, so I'd be safe using code that references it as such.  

In this snippet, the system is capture the value of the text field when 'enter' is pressed.
```

$("#cityEntered").keypress(function(x) {
    if(x.which == 13) {
        var cityEntry = $("#cityEntered").val();

```

<br>

---

<br>

## Error Handling the 404

The problem with open-ended search fields is that user error is always possible, so there needs to be feedback when such mistakes are made.  In the console, I found that a bad API call always returns a 404 error.  

I used this to write an error message string that displays "Try another location".  This shows with a fadeIn( ) transition and hides with a fadeOut( ) when the user searches a valid location.

```

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

```

<br>

---

<br>

## Appending Object to HTML

Navigating the returned object is easy enough now.  The only additional step is adding a couple of units to the string, depending on the piece of information returned.  Below, I am appending city name, temperature, humidity, wind speed, and weather condition to the HTML.

```
// City info to HTML
    $("#htmlCity").text(response.name);
    $("#htmlTemp").text(response.main.temp + "° F");
    $("#htmlHumid").text(response.main.humidity + " RH");
    $("#htmlWind").text(response.wind.speed + " MPH");
    $("#htmlCondition").text(response.weather[0].main); 
```

<br>

---

<br>

## On Load Transitions

My favorite part of good front-end design is the transitioning of elements as the user navigates the page.  I haven't quite explored the transitions as the user navigates, but I've done a bit of onLoad transitions by now.  Here is what I ran for the Weather Dashboard.

```

$(document).ready(function(){
    $("#searchBy").hide(0).delay(300).fadeIn(500, "swing");
    $("#textInput").hide(0).delay(400).fadeIn(500, "swing");
    $("#htmlOnLoadIcon").hide(0).delay(1100).fadeIn(800, "swing");
    $("#htmlCity").hide(0).delay(1100).fadeIn(800, "swing");
    $(".ui.header.fade").hide(0).delay(1100).fadeIn(800, "swing");
    $("#returnContainer").hide(0).delay(1100).slideDown(600, "swing");
});

```
The elements transition in, top-down.  The jumbotron label fades in, then the search field, and the drawer containing location info and placeholder slide down last.

