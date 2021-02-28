//Formatted date
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


var today = new Date();
var weekDay = days[today.getDay()];
var day = String(today.getDate()).padStart(2, '0');
var month = months[today.getMonth()];
var year = today.getFullYear();

todayFormatted = weekDay + ', ' + day + ' ' + month + ' ' + year;
document.getElementById("date").innerHTML = todayFormatted;


//Responsive navigation menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//Pancake reminder
if (today.getDay() == 5) {
    document.getElementById("prestonPancakes").style.display = "block";
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}