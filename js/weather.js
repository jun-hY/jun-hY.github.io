const API_KEY = "dc89576cccdfbd30d2357223e897e3d9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${Math.round(data.main.temp)}˚C`;
    }));
}

function onGeoErr() {
    alert("너 어디냐 못찾겠다 꾀꼬리");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);