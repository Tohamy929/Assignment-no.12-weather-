let reqloc =document.getElementById('locationinput');
let searchbtn =document.getElementById('inputbtn');
let allweather=[];
async function getdata(location) {
try{
let response= await fetch(` http://api.weatherapi.com/v1/forecast.json?key=d133467617e44feea2b120800251609&q=${location}&days=7 `)
let data= await response.json()
allweather=data
console.log(location,allweather)
displaydata()
}catch(error){
console.log(error);
document.querySelector('.weatherdata').innerHTML=`<div class='alert alert-danger'>The location you searched for does not exist</div>`
}finally{
console.log('done');
}
}
function displaydata(){
let container=``;
container+=`
<div class="weathercard text-white col-md-3 text-center">
<div class="cardhead p-1 rounded-top-3">
 <p>${allweather.location.name}</p>
</div>
 <div class="cardbody rounded-bottom-3 p-2">
    <p>${getDayName(allweather.forecast.forecastday[0].date)}</p>
    <h1>${allweather.current.temp_c}C</h1>
    <img src="https:${allweather.forecast.forecastday[0].day.condition.icon}" alt="">
    <p id="condition">${allweather.current.condition.text}</p>
    <ul class="list-unstyled d-flex justify-content-around">
    <li><img src="./images/icon-umberella.png" alt=""> <span>${allweather.forecast.forecastday[0].day.daily_chance_of_rain}%</span></li>
    <li><img src="./images/icon-wind.png" alt=""> <span>${allweather.current.wind_kph}k/h</span></li>
    <li><img src="./images/icon-compass.png" alt=""> <span>${allweather.forecast.forecastday[0].hour[0].wind_dir}</span></li>
    </ul>
  </div>
</div>
<div class="weathercard text-white col-md-3 text-center">
<div class="cardhead p-1 rounded-top-3">
<p>${allweather.location.name}</p>
</div>
 <div class="cardbody rounded-bottom-3 p-2">
 <p>${getDayName(allweather.forecast.forecastday[1].date)}</p>
    <h1>${allweather.forecast.forecastday[1].day.maxtemp_c}C</h1>
    <img src="https:${allweather.forecast.forecastday[1].day.condition.icon}" alt="">
    <p id="condition">${allweather.forecast.forecastday[1].day.condition.text}</p>
    <ul class="list-unstyled d-flex justify-content-around">
    <li><img src="./images/icon-umberella.png" alt=""> <span>${allweather.forecast.forecastday[1].day.daily_chance_of_rain}%</span></li>
    <li><img src="./images/icon-wind.png" alt=""> <span>${allweather.forecast.forecastday[1].hour[1].wind_kph}k/h</span></li>
    <li><img src="./images/icon-compass.png" alt=""> <span>${allweather.forecast.forecastday[1].hour[1].wind_dir}</span></li>
    </ul>
  </div>
</div>
<div class="weathercard text-white col-md-3 text-center">
<div class="cardhead p-1 rounded-top-3">
<p>${allweather.location.name}</p>
</div>
 <div class="cardbody rounded-bottom-3 p-2">
 <p>${getDayName(allweather.forecast.forecastday[2].date)}</p>
    <h1>${allweather.forecast.forecastday[2].day.maxtemp_c}C</h1>
    <img src="https:${allweather.forecast.forecastday[1].day.condition.icon}" alt="">
    <p id="condition">${allweather.forecast.forecastday[2].day.condition.text}</p>
    <ul class="list-unstyled d-flex justify-content-around">
    <li><img src="./images/icon-umberella.png" alt=""> <span>${allweather.forecast.forecastday[2].day.daily_chance_of_rain}%</span></li>
    <li><img src="./images/icon-wind.png" alt=""> <span>>${allweather.forecast.forecastday[2].hour[2].wind_kph}k/h</span></li>
    <li><img src="./images/icon-compass.png" alt=""> <span>${allweather.forecast.forecastday[2].hour[2].wind_dir}</span></li>
    </ul>
  </div>
</div>
`
document.querySelector('.weatherdata').innerHTML=container
}
searchbtn.addEventListener('click',function(e){
console.log(reqloc.value);
getdata(reqloc.value)
})

function getDayName(dateString) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return days[dayIndex];
}

