// import { useForm } from "./../utils/";

const SearchBar = () => {

  // const [values, handleChange] = useForm({ input: ""});
 
  return (
    <header
      className="Searchbar"    >
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          // value={values.input}
          name="input"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
