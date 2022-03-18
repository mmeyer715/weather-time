// creating variables
const currWeather = document.getElementById('current');
const apiKey = 'f23550b18591f7fe101ff3e67461858b';
const startBtn = document.getElementById('getWeather');

// creating list of user city inputs
function cityList(cityName) {
    var city = document.createElement('button');
    var savedCities = document.getElementById('savedCities');
    city.innerHTML = cityName;
    savedCities.appendChild(city);
}

//pulling data about users inputed city
// needs city name in parameter for function work
function current(cityName) {
    cityList(cityName);
    var cityInfo = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;
    fetch(cityInfo)
        .then(function(response) {
            return response.json();
        })
        // defining what elements will be pulled from data
        .then(function(data) {
            console.log(data);
            currWeather.innerHTML = ''
            const { main, name, weather, wind, coord } = data;
            const icon = `https://openweathermap.org/img/wn/${
                weather[0]["icon"]
            }@2x.png`;
            const div1 = document.createElement('div');
            div1.classList.add('weatherInfo')
            const edit = `
            <h2 >
                <span>${name}</span>
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
            latLon(coord.lat, coord.lon);
        })
}

// getting uv index
function latLon(lat, lon) {
var fiveDay = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=' + apiKey;
    fetch(fiveDay)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        var main = document.querySelector('.weatherInfo')
        var index = document.createElement('div');
        var uvi = data.current.uvi;
        index.innerHTML = uvi;
        main.appendChild(index);

        for (var i = 0; i < data.daily.length; i++)
        if (i <= 5 && i > 0) {
            var futureForecast = document.querySelector('.forecast');
            var p = document.createElement('p');
            var upcoming = `
            <p>
            Temp: ${Math.round(data.daily[i].temp.day)} °F
            </p>
            `;
            p.innerHTML = upcoming;
            futureForecast.appendChild(p);
        }
    });
}

startBtn.addEventListener('click', function(){
    var userCity = document.getElementById('cityInput').value;
    current(userCity);
})