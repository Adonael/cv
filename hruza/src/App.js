import "./App.css";
import WeatherCard from "./components/WeatherCard";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [weatherBg, setWeatherBg] = useState("");

  const callback = (payload) => {
    setWeatherBg(payload);
  };


  return (
    <div className="App">
      <WeatherCard weatherCard={weatherBg}>
        <Search callback={callback} />
      </WeatherCard>
    </div>
  );
}

export default App;
