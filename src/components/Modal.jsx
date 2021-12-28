import React, { useEffect } from 'react'

const Modal = ({ largeImageURL, tag, onClick }) => {

  useEffect(() => {
    window.addEventListener("keydown", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  });

  const closeModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      console.log("escape");
      console.log("img", largeImageURL);

      onClick();
    }
  };

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img
          // src="https://www.svgrepo.com/show/49706/eye-on-magnifying-glass.svg"
          src={largeImageURL}
          alt={tag}
          // width="360"
        />
      </div>
    </div>
  );
};

export default Modal
