import { useState, useEffect } from "react";
import { getApiData } from "../utils/apiCalls";
// import { IMAGE_URL } from "./../utils/data";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";

const ImageGallery = () => {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("home");

  useEffect(() => {
    setIsLoading(true);
    // getApiData(IMAGE_URL)
    getApiData(
      `https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=4`
    )
      .then((data) => setFetchedImages(data.hits))
      .catch((err) => setError("moj log z error.name", err.name))
      .finally(() => setIsLoading(false));
  }, [page, search]);

  return (
    <>
      <Button
        onClick={() => {
          setPage(page + 1);
          console.log(page);
        }}
      />

      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading && <p>Loading Api data...</p>}
      {fetchedImages.length > 0 && (
        <ul className="ImageGallery">
          {fetchedImages.map((image) => (
            <ImageGalleryItem key={image.id} {...image} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;

// key: 23726584 - b0725e8cc2245e4091c11b21f;
// https://pixabay.com/api/

// https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo

// useEffect(() => {
//   if (getStorageItems().length === 0) {
//     setIsLoading(true);
//     getApiData(IMAGE_URL)
//       .then((data) => {
//         console.log("pobrano z Api:", data.hits);
//         setStorageItems(data.hits);
//         setFetchedImages(data.hits);
//       })
//       .catch((err) => {
//         console.log("moj log z error.name", err.name);
//         setError(err);
//       })
//       .finally(() => setIsLoading(false));
//   } else {
//     setFetchedImages(getStorageItems());
//     console.log("localStorage:", JSON.parse(localStorage.getItem("picts")));
//   }
// }, []);
