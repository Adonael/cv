import { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";
function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = () => {
    setSearchItem(search);
  };

  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=" +
        searchItem +
        "&app_id=0073b72b&app_key=3719a51ac21b72b01567a28be189b9a4&imageSize=REGULAR&random=true"
    )
      .then((response) => response.json())
      .then((data) => setResults(data.hits));
  }, [searchItem]);

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <div className="inputs">
        <input
          type="text"
          onChange={onChangeHandler}
          className="searchBar"
        ></input>
        <button onClick={onClickHandler}>Search</button>
      </div>
      {searchItem ? <RecipeCard item={results} /> : ""}
    </div>
  );
}

export default App;
