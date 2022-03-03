//selectors
const form = document.querySelector("form");
const card = document.querySelector(".card");
const image = document.querySelector(".day-night");
const cityName = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".weather-condition");
const temprature = document.querySelector(".temp");

// form input event
form.addEventListener("submit", (e) => {
  //prevent default behaivior
  e.preventDefault();
  //get input value
  const city = form.city.value.trim();
  //reset formx
  form.reset();
  //update city
  updateCity(city);
});
