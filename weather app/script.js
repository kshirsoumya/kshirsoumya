const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const button = document.getElementById('.button');
const search = document.getElementById('inputVvalue');

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const API_KEY = 'adaead1e09e37ece1f0077b639688850';

setInterval(() => {
   const time = new Date();
   const month =time.getMonth();
   const date = time.getDate();
   const day = time.getDay();
   const hour = time.getHours();
   const hoursIn12hrFormat= hour >= 13 ? hour %12: hour 
   const minutes = time.getMinutes();
   const ampm = hour >= 12 ? 'PM' : 'AM'

   timeEl.innerHTML = hoursIn12hrFormat + ':' + minutes + ' ' +`<span id="am-pm">${ampm}</span>`

   dateEl.innerHTML = days[day] + ' , ' + date+ ' ' + months[month]
}, 1000);

getWeatherData();
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutly&appid=${API_KEY}`)
        .then(res => res.json()).then(data => {
            console.log(data);
        })
    })
}