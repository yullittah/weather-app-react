import "./App.css";
import WeatherApp from "./application";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <WeatherApp />
      <footer>
        code hosted on{" "}
        <a
          href="https://github.com/yullittah/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
