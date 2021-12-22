import PropTypes from "prop-types";

const ImageGallery = ({ children }) => {
  return (
    
      <ul className="ImageGallery">
        {children}      
      </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.object.isRequired,
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
