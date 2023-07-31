import "./ItemsInput.css";
import SearchOutput from "../SearchOutput/SearchOutput";
import { useState } from "react";
import Loader from "../Loader/Loader";

export const ItemsInput = ({ theme }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); 

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=36c372c3&app_key=161c2c3e1e354f508fc42d20718d8ed3`;

  const handleSearch = async () => {
    setLoading(true); 
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.hits);
        console.log("data", data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)); 
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    } else {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <form
        className={`search-bar ${theme === "dark" ? "dark" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter your fridge ingredients..."
          type="text"
          value={search}
          onChange={handleInput}
          className={`search-bar__input ${theme === "dark" ? "dark" : ""}`}
        />
        
        <button className="search-bar__button">Search recipes</button>
      </form>
      {loading ? <Loader /> : <SearchOutput searchResults={searchResults} theme={theme} />}
    </div>
  );
};

export default ItemsInput;
