import { useState, useEffect } from "react";
import { getApiData } from "../utils/apiCalls";
import { IMAGE_URL } from "../utils/data";
import { setStorageItems, getStorageItems } from "../utils/localStorage";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = () => {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (getStorageItems().length === 0) {
      setIsLoading(true);
      getApiData(IMAGE_URL)
        .then((data) => {
          console.log("pobrano z Api:", data.hits);
          setStorageItems(data.hits);
          setFetchedImages(data.hits);
        })
        .catch((err) => {
          console.log("moj log z error.name", err.name);
          setError(err);
        })
        .finally(() => setIsLoading(false));
    } else {
      setFetchedImages(getStorageItems());
      console.log("localStorage:", JSON.parse(localStorage.getItem("picts")));
    }
  }, []);

  return (
    <>
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

// {
//   /* <li class="gallery-item">
//   <img src="" alt="" />
// </li>; */
// }

// key: 23726584 - b0725e8cc2245e4091c11b21f;
// https://pixabay.com/api/

// https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo

// import ImageGalleryItem from "./ImageGalleryItem";

// function ImageGallery() {
//   return (
//     <ul className="ImageGallery">
//       <ImageGalleryItem />
//     </ul>
//   );
// }

// export default ImageGallery;

// {/* <ul class="gallery">
//   <!-- Zbiór <li> obrazów -->
// </ul> */}
