$(document).ready(function () {

    // Get Location
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    // Call Weather
    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }

    // Update Dom
    function updateDOM(data) {
        var city = data.name;
        var temp = Math.round(data.main.temp_max);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var feels= Math.round(data.main.feels_like);
        var humid= data.main.humidity;
        var windSpeed= Math.round(data.wind.speed);
        var clouds= data.clouds.all;


        $("#city").html(city);
        $("#temp").html(temp);
        $("#desc").html(desc);
        $("#icon").attr('src', icon);
        $("#feelslike").html("Feel's Like: "+ feels+" °");
        $("#humid").html("Humidty: "+ humid+" %");
        $("#windspeed").html("Wind Speed: "+ windSpeed+ " meter/sec");
        $("#clouds").html("Cloudiness: "+ clouds+" %");







    }
});