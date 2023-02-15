import "./Search.css";
import { useEffect, useState } from "react";
import CityDisplay from "./CityDisplay";

const Search = (props) => {
  const [results, setResults] = useState({});
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Zagreb");
  const [background, setBackground]=useState("Clear")

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=c70ee0da76caf09c5d9381f4a37c328f&units=metric"
    )
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, [city]);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    setCity(input);
  };

  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={onChangeHandler}
        className="searchBar"
      ></input>

      <button
        onClick={() => {
          onClickHandler();
          props.callback(results.weather[0].main)
        }}
        className="searchButton"
      >
        Search
      </button>

      {typeof results.main !== "undefined" ? (
        <CityDisplay
          name={city}
          country={results.sys.country}
          temp={Math.round(results.main.temp)}
          description={results.weather[0].main}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
