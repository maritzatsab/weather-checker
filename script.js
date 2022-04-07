const api = 'bd4a7fb1093e8e0d5f8b746de3027168';

const iconImg = document.getElementById('weather-icon');
const place = document.querySelector('#position');
const celcius = document.querySelector('.celcius');
const fahrenheit = document.querySelector('.fahrenheit');
const info = document.querySelector('.info');
const riseDOM = document.querySelector('.rise');
const setDOM = document.querySelector('.set');

window.addEventListener('load', () => {
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;
            console.log(base);
            
            fetch(base).then((response) => {
                return response.json();
            })
            
            .then((data) => {
                const {temp} = data.main;
                const place = data.name;
                const {info, icon} = data.weather[0];
                const {rise, set} = data.sys;
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                const fahrenheit = (temp * 9) / 5 + 32;

                const riseGMT = new Data(rise * 1000);
                const setGMT = new Date(set * 1000);

                iconImg.src = iconUrl;
                place.textContent = `${place}`;
                info.textContent = `${info}`;
                celcius.textContent = `${temp.toFixed(2)} °C`;
                fahrenheit.textContent = `${fahrenheit.toFixed(2)} °F`;
                riseDOM.textContent = `${riseGMT.toLocaleDateString()}, ${riseGMT.toLocaleTimeString()}`;
                setDOM.textContent = `${setGMT.toLocaleDateString()}, ${setGMT.toLocaleTimeString()}`;
            })
        })
    }
})

