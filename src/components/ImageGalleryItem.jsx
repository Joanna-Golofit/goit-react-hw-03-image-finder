import PropTypes from "prop-types";

const ImageGalleryItem = ({ fetchedImages, onClick }) => {
  return fetchedImages.map(({ webformatURL, tags, id }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        // onClick={() => onClick(webformatURL)}
      />
    </li>
  ));
};


ImageGalleryItem.propTypes = {
  fetchedImages: PropTypes.array.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
