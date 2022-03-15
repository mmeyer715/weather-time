// creating variables
var cityList = document.getElementById('cityList')
const apiKey = 'f23550b18591f7fe101ff3e67461858b'
// var cityInfo = 'http://api.openweathermap.org/data/2.5/weather?q=' + userCity + '&appid=' + apiKey
// var pullWeather = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey
//pulling users inputed city
// var userCity = document.getElementById('cityInput').value;


function current() {
    var userCity = document.getElementById('cityInput').value;
    var cityInfo = 'http://api.openweathermap.org/data/2.5/weather?q=' + userCity + '&units=imperial&appid=' + apiKey
    fetch(cityInfo)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            displayCurrent(data);
        });
}

function displayCurrent() {
    

}