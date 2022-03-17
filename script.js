// creating variables
const currWeather = document.getElementById('current');
var cityList = document.getElementById('cityList')
const apiKey = 'f23550b18591f7fe101ff3e67461858b';

//pulling data about users inputed city
function current() {
    var userCity = document.getElementById('cityInput').value;
    var cityInfo = 'http://api.openweathermap.org/data/2.5/weather?q=' + userCity + '&units=imperial&appid=' + apiKey;
    fetch(cityInfo)
        .then(function(response) {
            return response.json();
        })
        // defining what elements will be pulled from data
        .then(function(data) {
            console.log(data);
            const { main, name, sys, weather, wind } = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
            }@2x.png`;
            const div1 = document.createElement('div');
            const edit = `
            <h2 data-name="${name},${sys.country}">
                <span>${name}</span>${sys.country}
            </h2>
            <div> 
            Temp: ${Math.round(main.temp)} °F
            </div>
            <div>
            Wind: ${wind.speed} MPH
            </div>
            <div>
            Humidity: ${main.humidity} %
            </div>
            <figure>
            <img src=${icon} alt=${weather[0]["main"]}>
            <figcaption>${weather[0]["description"]}</figcaption>
            </figure>
            `;
            // appending html
            div1.innerHTML = edit;
            currWeather.appendChild(div1)
        })
}

