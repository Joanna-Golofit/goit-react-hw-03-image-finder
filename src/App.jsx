// import './App.css';
import { useState, useEffect } from "react";
import { getApiData } from "./utils/apiCalls";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./components/styles.css";
// import ImageGalleryItem from "./components/ImageGalleryItem";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
// import Loader...
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [fetchedImagesTotal, setFetchedImagesTotal] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState("null");
  // const [query, setQuery] = useState("nul");
  const [query, setQuery] = useState("nut");
  const [modal, setModal] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    // getApiData(IMAGE_URL)
    getApiData(
      // `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=6`
      `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${query}&page=1&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
      .then((data) => {
        setFetchedImages(data.hits);
        setFetchedImagesTotal(data.total);
      })
      .catch((err) => setError("moj log z error.name", err.name))
      .finally(() => {
        setIsLoading(false);
      });
  }, [perPage, query]);

  const getKeyword = (inputValueFromSearchBar) => {
    //przesylana w propsach do searchbar i tam otrzymuje wartosc z inputa i ustawia ja tu jako query i przy okazji ustawia strone na 1
    setQuery(inputValueFromSearchBar);
      setPerPage(12);
  };
  const toggleModal = () => {
    console.log("klik")
    setModal( modal => !modal )
    console.log(modal);
  }

  return (
    <>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <SearchBar getKeyword={getKeyword} />
      {/* halo2 */}
      {fetchedImages.length > 0 && (
        <ImageGallery>
          <ImageGalleryItem
            fetchedImages={fetchedImages}
            onClick={toggleModal}
          />
        </ImageGallery>
      )}
      {modal && <Modal fetchedImages={fetchedImages} onClick={toggleModal} />}
      {/* {isLoading && <p>Loader..?</p>} */}
      {isLoading && (
        <Loader
          style={{ textAlign: "center" }}
          type="MutatingDots"
          color="#3f51b5"
          secondaryColor="lightgray"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      <p style={{ textAlign: "center" }}>
        {fetchedImages.length} z {fetchedImagesTotal}
      </p>
      {!isLoading && fetchedImagesTotal > fetchedImages.length && (
        <Button
          onClick={() => {
            setPerPage((perPage) => perPage + 12);
            console.log(perPage, query);
          }}
        />
      )}
    </>
  );
}

export default App;
