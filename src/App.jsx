// import './App.css';
import { useState, useEffect } from "react";
import { getApiData } from "./utils/apiCalls";

import "./components/styles.css";
// import ImageGalleryItem from "./components/ImageGalleryItem";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
// import Loader...
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";

function App() {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [fetchedImagesTotal, setFetchedImagesTotal] = useState(0);
  const [page, setPage] = useState(12);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {
    setIsLoading(true);
    // getApiData(IMAGE_URL)
    getApiData(
      // `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=6`
      `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${query}&page=1&image_type=photo&orientation=horizontal&per_page=${page}`
    )
      .then((data) => {
        setFetchedImages(data.hits);
      setFetchedImagesTotal(data.total);
      })
      .catch((err) => setError("moj log z error.name", err.name))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, query]);

  const getKeyword = (inputValueFromSearchBar) => {
    //przesylana w propsach do searchbar i tam otrzymuje wartosc z inputa i ustawia ja tu jako query i przy okazji ustawia strone na 1
    setQuery(inputValueFromSearchBar);
      setPage(12);

  };

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <SearchBar getKeyword={getKeyword} />
      {/* halo2 */}
      {fetchedImages.length > 0 && (
        <ImageGallery>
          <ImageGalleryItem
            fetchedImages={fetchedImages}
            // onClick={this.handleClick}
            />
        </ImageGallery>
      )}
      {isLoading && <p>Loader..?</p>}
      {fetchedImages.length} z {fetchedImagesTotal}
      {!isLoading && fetchedImagesTotal > fetchedImages.length && (
        <Button
          onClick={() => {
            setPage((page) => page + 12);
            console.log(page, query);
          }}
        />
      )}
    </>
  );
}

export default App;
