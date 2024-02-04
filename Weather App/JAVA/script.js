const submitBtn = document.querySelector(".submit");
const labelWeatherForcast = document.querySelector(".h1");
const input = document.querySelector("#input");
const renderData_1 = document.querySelector(".main");
const renderData_2 = document.querySelector(".main-2");
const body = document.querySelector("body");
const dark = document.querySelector(".dark");

async function renderWeather(city) {
  try {
    const cityApi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2aac4db8c572652979de802f004c42fb`
    );
    const data = await cityApi.json();
    return data;
  } catch (err) {
    throw err;
  }
}
let city;

submitBtn.addEventListener("click", async function (e) {
  e.preventDefault();

  try {
    city = await renderWeather(input.value);
    console.log(city);
    const labelClouds = city.weather[0].main;
    console.log(city.weather[0].main.toLowerCase());

    const html = `
      <div class="icon">
        <img src="../${city.weather[0].main.toLowerCase()}.png " alt="image not found" />
        <p>${labelClouds}</p>
      </div>
      <div class="weather">weather: ${labelClouds} 😎</div>
      <br />
      <div class="pressure">Atmospheric pressure: ${
        city.main.pressure
      }psi 💨 </div>`;

    const html2 = `
      <p>Temperature: ${city.main.temp}🌡️ </p>
      <p>Temperature Minimum: ${city.main.temp_min}</p>
      <p>Temperature Maximum: ${city.main.temp_max}</p>
      <p>Feels Like: ${city.main.feels_like} 😬</p>
      <p>Humidity: ${city.main.humidity} 😰</p>
    `;

    labelWeatherForcast.textContent = city.name.toUpperCase();
    if (labelClouds.toLowerCase() === "smoke") {
      body.classList.add("smoke");
    }
    if (labelClouds.toLowerCase() === "clouds") {
      body.classList.add("cloud");
      body.style.color = "dogerblue";
    }
    if (labelClouds.toLowerCase() === "thunderstorm") {
      body.classList.add("thunder");
    }
    if (labelClouds.toLowerCase() === "clear") {
      body.classList.add("clear");
      body.style.color = "white";
    }
    if (labelClouds.toLowerCase() === "haze") {
      body.classList.add("haze");
      body.style.color = "white";
    }
    input.value = "";
    // You need to call insertAdjacentHTML on an element, not directly.
    renderData_1.insertAdjacentHTML("beforeend", html);
    renderData_2.insertAdjacentHTML("beforeend", html2);
  } catch (err) {
    labelWeatherForcast.innerText = `Something went wrong ${err}`;
  }
});
dark.addEventListener("click", function () {
  main.classList.toggle(".dark-mode");
});
