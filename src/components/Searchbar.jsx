import { useState } from "react";

const SearchBar = () => {

  const [search, setSearch] = useState({value: ""});
   
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="input"
          value={search.value}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // onChange={handleChange}
          onChange={(e) => {
            console.log(e.target.value);
            setSearch({
              ...search,
              value : e.target.value,
            });
            console.log(search);
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
