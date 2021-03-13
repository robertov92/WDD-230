// Fetching current weather conditions
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&apiKey=8fb6d8a1fed11d8a1a0433cabf99fd70';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current-condition').textContent = jsObject.weather[0].description;
        document.getElementById('temperature').textContent = jsObject.main.temp;
        document.getElementById('max-temperature').textContent = jsObject.main.temp_max;
        document.getElementById('min-temperature').textContent = jsObject.main.temp_min;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind-speed').textContent = jsObject.wind.speed;

        // calculating wind chill
        let temperature = parseFloat(jsObject.main.temp);
        let windSpeed = parseFloat(jsObject.wind.speed);
        if (temperature <= 50.0 && windSpeed >= 3.0) {
            document.getElementById("windChill").innerHTML = windChill(temperature, windSpeed).toFixed(2);
        } else {
            document.getElementById("windChill").innerHTML = "N/A";
        }

        function windChill(t, s) {
            let f = (35.74) + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
            return f;
        }
    });

// fetching forecast
const apiURLforecast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&apiKey=8fb6d8a1fed11d8a1a0433cabf99fd70';
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        let day = 1; // this variable will help me find the correct html elements by id
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // saving jsOject to an array for easier manipulation
        let array = jsObject.list;

        // finds the elements form the array in which dt_txt includes "18:00:00"
        array.forEach(element => {
            if (element.dt_txt.includes("18:00:00")) {
                // displaying day of the week
                let d = new Date(element.dt_txt);
                document.getElementById(`dayofweek${day}`).textContent = dayofWeek[d.getDay()];

                // displaying forecast temperature
                document.getElementById(`forecast-temp${day}`).textContent = element.main.temp;

                // displaying image icon
                let imagesrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
                let description = element.weather[0].description;
                document.getElementById(`image-src${day}`).setAttribute('src', imagesrc);
                document.getElementById(`image-src${day}`).setAttribute('alt', description);

                // autoincrements my day variable
                day++;
            }
        });
    });