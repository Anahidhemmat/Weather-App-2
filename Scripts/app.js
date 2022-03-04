//selectors
const form = document.querySelector("form");
const card = document.querySelector(".card");
const image = document.querySelector(".day-night");
const cityName = document.querySelector(".city-name");
const weatherCondition = document.querySelector(".weather-condition");
const temprature = document.querySelector(".temp");
const icon = document.querySelector(".icon");

//get weather information => function
const getWeather = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=08e3bf692cfa4f90b42141857210109&q=${city}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

//update next city

//form event
form.addEventListener("submit", (e) => {
  //prevent default behaivior
  e.preventDefault();

  //get value of input
  const city = form.city.value.trim();
  //reset input
  form.reset();

  //update next city
  getWeather(city).then((data) => {
    console.log(data);
    //display card
    card.classList.remove("d-none");

    //display weather information
    cityName.textContent = data.location.name;
    weatherCondition.textContent = data.current.condition.text;
    temprature.textContent = data.current.temp_c;

    //display icon
    icon.src = data.current.condition.icon;

    //display image
    if (data.current.is_day === 0) {
      image.src = "/images/night.jpeg";
    } else {
      image.src = "/images/day.png";
    }
  });
});
