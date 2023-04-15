
// Declaring the variables
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

function getWeatherByState(state) {
	const api = "644647f5e3b5dffd7959af10fd5b236c";
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${api}`;
	
	fetch(url)
	  .then(response => response.json())
	  .then(data => {
		console.log(data);
		temperature.textContent =
		  Math.floor(data.main.temp - kelvin) + "°C";
		summary.textContent = data.weather[0].description;
		loc.textContent = data.name + "," + data.sys.country;
		let icon1 = data.weather[0].icon;
		icon.innerHTML = `<img src="img/weather.svg" style= 'height:6rem'/>`;
	  })
	  .catch(error => console.error(error));
  }
  const searchBtn = document.querySelector("#search-btn");
  const searchInput = document.querySelector("#search-input");
  
  searchBtn.addEventListener("click", () => {
	const state = searchInput.value.trim();
	if (state) {
	  getWeatherByState(state);
	}
  });
	



