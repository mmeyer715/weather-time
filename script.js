// creating variables
const currWeather = document.getElementById('current');
var cityList = document.getElementById('cityList')
const apiKey = 'f23550b18591f7fe101ff3e67461858b'
// var pullWeather = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey

//pulling users inputed city
function current() {
    var userCity = document.getElementById('cityInput').value;
    var cityInfo = 'http://api.openweathermap.org/data/2.5/weather?q=' + userCity + '&units=imperial&appid=' + apiKey
    fetch(cityInfo)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const { main, name, sys, weather } = data;
            const div1 = document.createElement('div');
            const edit = `
            <h2 data-name="${name},${sys.country}">
                <span>${name}</span>
                <sup>${sys.country}</sup>
            </h2>
            `;
            div1.innerHTML = edit;
            currWeather.appendChild(div1)
        })
}

