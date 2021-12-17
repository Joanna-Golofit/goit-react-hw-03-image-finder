
const ImageGalleryItem = ({previewURL, tags}) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={previewURL} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem
