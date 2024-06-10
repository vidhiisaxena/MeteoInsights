function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#input-search").value;
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInputElement;
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
time.innerHTML = `${day} ${hour}:${minute}`;
