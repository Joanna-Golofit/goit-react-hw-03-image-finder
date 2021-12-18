import React from 'react'

const Modal = ({ largeImg, closeModal, tags }) => {
  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={largeImg} alt={tags} />
      </div>
    </div>
  );
};

export default Modal
