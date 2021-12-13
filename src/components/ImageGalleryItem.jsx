// {
//   /* <li class="gallery-item">
//   <img src="" alt="" />
// </li>; */
// }

// key: 23726584 - b0725e8cc2245e4091c11b21f;
// https://pixabay.com/api/

// https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo

import React, { Component } from "react";

class ImageGalleryItem extends Component {
  state = {
    images: [],
  };

  fetchImages = () => {
    fetch(
      "https://pixabay.com/api/?key=23726584-b0725e8cc2245e4091c11b21f&q=yellow+flowers&image_type=photo"
    )
      .then((dataJson) => {
        if (!dataJson.ok) {
          throw new Error("z ifa:", dataJson.status);
        }
        return dataJson.json();
      })
      .then((data) => {
        this.setState({ images: data.hits });
        localStorage.setItem("pict", JSON.stringify(data.hits));

        console.log("data:", data.hits);
      })
      .catch((err) => console.log(err))
      .finally(console.log("fetchImages"));
  };

  componentDidMount() {
    this.fetchImages();
  }

  render() {
    return (
      <>
        {this.state.images.map(image =>
          <li key={ image.id} className="gallery-item">
            <img src={image.previewURL} alt="" />
          </li>
        )} 
      </>
    );
  }
}

export default ImageGalleryItem;
