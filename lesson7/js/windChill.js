let temperature = parseFloat(document.getElementById("temperature").innerText);
let windSpeed = parseFloat(document.getElementById("windSpeed").innerText);

if (temperature <= 50 && windSpeed >= 3) {
    document.getElementById("windChill").innerHTML = windChill(temperature, windSpeed).toFixed(2);
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}

function windChill(t, s) {

    let f = (35.74) + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    return f;
}