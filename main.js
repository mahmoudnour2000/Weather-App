var conataner = document.querySelector('.contaner');
var search = document.querySelector('.search-box button');
var weatherBox = document.querySelector('.weather-box');
var weatherDetails = document.querySelector('.weather-details');
var error404 = document.querySelector('.not-found')

search.addEventListener('click' , ()=> {
    var APIKey = 'bd5e378503939ddaee76f12ad7a97608';
    var city = document.querySelector('.search-box input').value;
    if(city == ''){
        return ;
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response=>response.json()).then(json=>{

        if (json.cod == '404') {
            conataner.style.height='400px'
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }
            conataner.style.height='555px'
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

            var image = document.querySelector('.weather-box img');
            var temperature = document.querySelector('.weather-box .temperature');
            var description = document.querySelector('.weather-box .description');
            var humidity = document.querySelector('.weather-details .humidity span');
            var wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'image/clear.png'
                    break;
                case 'Rain':
                    image.src = 'image/rain.png'
                    break;
                case 'Snow':
                    image.src = 'image/snow.png'
                    break;
                case 'Clouds':
                    image.src = 'image/cloud.png'
                    break;
                case 'Mist':
                    image.src = 'image/mist.png'
                    break;
                case 'Haze':
                    image.src = 'image/haze.png'
                    break;
                default:
                    image.src = 'image/cloud.png'
            }
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;


        });

});

