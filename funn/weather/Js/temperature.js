
var fav1="new york"
var fav2="london"
var local="Johanneberg"


function update(city) { 
    document.getElementById("stad").innerHTML = city;
    document.getElementById("weather").innerHTML=
}

function favorites(){
    document.getElementById("local").innerHTML = local;
    document.getElementById("fav1").innerHTML = fav1;
    document.getElementById("fav2").innerHTML = fav2;
}
// copied from W3School
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(findCity);
//     } else {
//       x.innerHTML = "Geolocation is not supported by this browser.";
//     }
//   }

// function findCity(position){
//     var latlon = position.coords.latitude + "," + position.coords.longitude;
// }

// function gettemperature() {
//     return "rain"
//     fetch('http://example.com/movies.json')
//    .then(response => response.json())
//    .then(data => console.log(data));
// }

document.getElementById("local").onclick = function() {update(local)};
document.getElementById("fav1").onclick = function() {update(fav1)};
document.getElementById("fav2").onclick = function() {update(fav2)};
