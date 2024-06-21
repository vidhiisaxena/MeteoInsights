function displayTemperature(response) {
  let tempElement = document.querySelector(".current-temperature");
  let temp = Math.round(response.data.main.temp - 273);
  tempElement.innerHTML = temp;
  let countryelement = document.querySelector(".country");
  let country = response.data.sys.country;
  countryelement.innerHTML = `,${country}`;
  let wind = document.querySelector(".wind");
  let w = response.data.wind.speed;
  wind.innerHTML = w;
  let humidity = document.querySelector(".Humidity");
  let h = response.data.main.humidity;
  humidity.innerHTML = h;
  let max = document.querySelector(".max");
  let ma = Math.round(response.data.main.temp_max - 273);
  max.innerHTML = ma;
  let min = document.querySelector(".Min");
  let Min = Math.round(response.data.main.feels_like - 276);
  min.innerHTML = Min;
  let conditions = document.querySelector(".cond");
  let conds = response.data.weather[0].main;
  let video=document.querySelector("#myVideo");
  conditions.innerHTML = conds;
  if (conds === "Rain") {
    video ="url('')";
  } else if (conds === "Clouds") {
    video= "url(cloud.gif)";
  } else if (conds === "Clear") {
    video =
      "url('https://media.istockphoto.com/id/962500712/video/4k-tl-cloudy-sky-with-sun-rays.mp4?s=mp4-640x640-is&k=20&c=nPPwovJCYRu0T7Hbz2K38ut6QOLZjIEcQJS2ZqqQoVA=')";
  } else if (conds === "Haze") {
    video =
      "url('https://live.staticflickr.com/7192/6814624698_2a45c14996_n.jpg')";
  } else {
    video = "url(background.gif)";
  }
  let icon = document.querySelector(".current-temp-icon");
  let icons = response.data.weather[0].icon;
  icon.innerHTML = `<img src= https://openweathermap.org/img/wn/${icons}@2x.png width="94px" height="94px">`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#input-search").value;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInputElement;
  let city = searchInputElement;
  const apiKey = "db277136335444212ef0b75ca3b4f25f";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
  axios.get(api).then(displayTemperature);
  axios.get(api).then(forecast);
}
let long;
let lat;
function forecast(response) {
  const lat = response.data.coord.lat;
  const long = response.data.coord.lon;
  const apiKey2 = "db277136335444212ef0b75ca3b4f25f";
  const api_forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey2}`;
  axios.get(api_forecast).then(weatherforecast);
}
function weatherforecast(response) {
  let day1 = document.querySelector(".day1");
  let date_1 = new Date(response.data.list[10].dt_txt);
  let days = [
    "SUN",
    "MON",
    "TUES",
    "WED",
    "THURS",
    "FRI",
    "SAT",
    "SUN",
    "MON",
    "TUES",
    "WED",
    "THURS",
    "FRI",
    "SAT",
  ];
  let day_1 = days[date_1.getDay()];
  day1.innerHTML = day_1;
  let day1max=document.querySelector(".day1max");
  let day1Ma=Math.round((response.data.list[10].main.temp_max)-273);
  day1max.innerHTML=day1Ma;
  let day1min=document.querySelector(".day1min");
  let day1Mi = Math.round((response.data.list[10].main.feels_like)-280);
  day1min.innerHTML=day1Mi;
  let icon1=document.querySelector(".day1-icon");
  let i1 = response.data.list[10].weather[0].icon;
  icon1.innerHTML = `<img src= https://openweathermap.org/img/wn/${i1}@2x.png width="30px" height="30px">`;

  let day2 = document.querySelector(".day2");
  let date_2 = new Date(response.data.list[19].dt_txt);
  let day_2 = days[date_2.getDay()];
  day2.innerHTML = day_2;
  let day2max = document.querySelector(".day2max");
  let day2Ma = Math.round(response.data.list[19].main.temp_max - 273);
  day2max.innerHTML = day2Ma;
  let day2min = document.querySelector(".day2min");
  let day2Mi = Math.round(response.data.list[19].main.feels_like - 280);
  day2min.innerHTML = day2Mi;
  let icon2 = document.querySelector(".day2-icon");
  let i2 = response.data.list[19].weather[0].icon;
  icon2.innerHTML = `<img src= https://openweathermap.org/img/wn/${i2}@2x.png width="30px" height="30px">`;

  let day3 = document.querySelector(".day3");
  let date_3 = new Date(response.data.list[28].dt_txt);
  let day_3 = days[date_3.getDay()];
  day3.innerHTML = day_3;
  let day3max = document.querySelector(".day3max");
  let day3Ma = Math.round(response.data.list[28].main.temp_max - 273);
  day3max.innerHTML = day3Ma;
  let day3min = document.querySelector(".day3min");
  let day3Mi = Math.round(response.data.list[28].main.feels_like - 280);
  day3min.innerHTML = day3Mi;
  let icon3 = document.querySelector(".day3-icon");
  let i3 = response.data.list[28].weather[0].icon;
  icon3.innerHTML = `<img src= https://openweathermap.org/img/wn/${i3}@2x.png width="30px" height="30px">`;


  let day4 = document.querySelector(".day4");
  let date_4 = new Date(response.data.list[37].dt_txt);
  let day_4 = days[date_4.getDay()];
  day4.innerHTML = day_4;
  let day4max = document.querySelector(".day4max");
  let day4Ma = Math.round(response.data.list[37].main.temp_max - 273);
  day4max.innerHTML = day4Ma;
  let day4min = document.querySelector(".day4min");
  let day4Mi = Math.round(response.data.list[37].main.feels_like - 279);
  day4min.innerHTML = day4Mi;
  let icon4 = document.querySelector(".day4-icon");
  let i4 = response.data.list[10].weather[0].icon;
  icon4.innerHTML = `<img src= https://openweathermap.org/img/wn/${i4}@2x.png width="30px" height="30px">`;


  let day5 = document.querySelector(".day5");
  let date_5 = new Date(response.data.list[37].dt_txt);
  let day_5= days[1+date_5.getDay()];
  day5.innerHTML = day_5;
  let day5max = document.querySelector(".day5max");
  let day5Ma = Math.round(response.data.list[0].main.temp_max - 273);
  day5max.innerHTML = day5Ma;
  let day5min = document.querySelector(".day5min");
  let day5Mi = Math.round(response.data.list[0].main.feels_like - 279);
  day5min.innerHTML = day5Mi;
  let icon5 = document.querySelector(".day5-icon");
  let i5 = response.data.list[0].weather[0].icon;
  icon5.innerHTML = `<img src= https://openweathermap.org/img/wn/${i5}@2x.png width="30px" height="30px">`;


  let day6 = document.querySelector(".day6");
  let date_6 = new Date(response.data.list[37].dt_txt);
  let day_6 = days[2 + date_6.getDay()];
  day6.innerHTML = day_6;
  let day6max = document.querySelector(".day6max");
  let day6Ma = Math.round(response.data.list[10].main.temp_max - 273);
  day6max.innerHTML = day6Ma;
  let day6min = document.querySelector(".day6min");
  let day6Mi = Math.round(response.data.list[10].main.feels_like - 280);
  day6min.innerHTML = day6Mi;
  let icon6= document.querySelector(".day6-icon");
  let i6 = response.data.list[10].weather[0].icon;
  icon6.innerHTML = `<img src= https://openweathermap.org/img/wn/${i6}@2x.png width="30px" height="30px">`;
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


function backgroundChange(weather) {
  if (weather === "Rain") {
    document.body.style.backgroundVideo =
      "url('src/images/4323285-hd_1920_1080_30fps.mp4')";
  } else if (weather === "Clouds") {
    document.body.style.backgroundImage = "url(cloud.gif)";
  } else if (weather === "Clear") {
    document.body.style.backgroundImage = "url('https://i...')";
  } else if (weather === "Haze") {
    document.body.style.backgroundImage =
      "url('https://live.staticflickr.com/7192/6814624698_2a45c14996_n.jpg')";
  } else {
    document.body.style.backgroundImage = "url(background.gif)";
  }
}