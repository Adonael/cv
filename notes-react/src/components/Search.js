import "./Search.css";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  const onSearchChange = (e) => {
    handleSearchNote(e.target.value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em"></MdSearch>
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearchChange}
      ></input>
    </div>
  );
};

export default Search;
