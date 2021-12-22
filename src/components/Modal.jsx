import React from 'react'

const Modal = ({ fetchedImages, onClick }) => {
  const { largeImageURL, tags } = fetchedImages;
  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img
          src="https://www.svgrepo.com/show/49706/eye-on-magnifying-glass.svg"
          alt={tags}
        />
      </div>
    </div>
  );
};

export default Modal
