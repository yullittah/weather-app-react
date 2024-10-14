import React, { useState } from "react";
import axios from "axios";

export default function NewForm() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setResult(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "f8df69650e7862f41c9077b3babedf21";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="enter city..." onChange={updateCity} />
      <button type="submit"> search</button>
    </form>
  );

  if (result) {
    return (
      <div>
        <ul>
          {form}
          <li>
            temperature{"       "}
            {Math.round(weather.temperature)}°C
          </li>
          <li>humidity {Math.round(weather.humidity)}</li>

          <li> wind {Math.round(weather.wind)}</li>
          <li>
            <img src={weather.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
