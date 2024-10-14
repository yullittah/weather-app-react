import axios from "axios";

export default function WeatherApp() {
  function showTemperature(response) {
    alert(`the temperature in Harare is ${response.data.main.temp}°C`);
  }
  let apiKey = "f8df69650e7862f41c9077b3babedf21";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Harare&appid=${apiKey}&units=metric`;

  axios.get(url).then(showTemperature);
}
