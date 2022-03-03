//selectors
const form = document.querySelector("form");
const card = document.querySelector(".card");
const image = document.querySelector(".day-night");
const cityName = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".weather-condition");
const temprature = document.querySelector(".temp");

//form event
form.addEventListener("submit", (e) => {
  //prevent default behaivior
  e.preventDefault();

  //get value of input
  const city = form.city.value.trim();

  //reset input
  form.reset();

  //update next city
  updateCity(city);
});
