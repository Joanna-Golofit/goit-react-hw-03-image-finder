import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ getKeyword }) => {
  const [, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    getKeyword(input.value);
    setQuery(input.value);
    console.log(input.value);
    input.value = "";
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="input"
          // value={query}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // onChange={handleChange}
          // onChange={(e) => {
          //   console.log(e.target.value);
          //   setQuery(e.target.value);
          //   console.log("query:", query);
          // }}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  getKeyword: PropTypes.func,
};

export default SearchBar;
