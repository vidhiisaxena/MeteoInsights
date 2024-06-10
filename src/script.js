function displayTemperature(response){
  let tempElement = document.querySelector(".current-temperature");
  let temp= Math.round(response.)
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#input-search").value;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInputElement;
  let city = document.querySelector("#input-search").value;
  let apikey = "ebcc3971d2aee717f81151084b09afd4 ";
  let apiurl = `api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apikey}`;

    axios.get(apiUrl).then(displayTemperature);
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
