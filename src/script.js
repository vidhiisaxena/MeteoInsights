function weatherforecast(response){
  
}
function displayTemperature(response){
  let tempElement = document.querySelector(".current-temperature");
  let temp= Math.round(((response.data.temperature.current)));
  tempElement.innerHTML= temp;
  let countryelement=document.querySelector(".country");
  let coun=(response.data.country);
  let count=coun.toUpperCase();
  let country=count.substring(0,2);
  let lat = (response.data.coordinates.latitude);
  let long =(response.data.coordinates.longitude);
  countryelement.innerHTML=`,${country}`;
    function forecast(event){
      event.preventDefault();
      const apiKey2="db277136335444212ef0b75ca3b4f25f";
      const api_forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey2}`;
      axios.get(api_forecast).then(weatherforecast);
    }
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#input-search").value;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInputElement;
  let city = searchInputElement;
  const apiKey = "057314561f8344abb8d5d80t6761o6ae";
  const api = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(api).then(displayTemperature);  
}

let forms = document.querySelector(".search-form");
forms.addEventListener("submit", search);


let time = document.querySelector("#day-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[new Date().getDay()];
let hour = new Date().getHours();
let minute = new Date().getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
time.innerHTML = `${day} ${hour}:${minute}`;
