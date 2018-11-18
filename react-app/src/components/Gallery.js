import React from 'react';

function Gallery(props) {
  return(
    <div className="GalleryStyle">
      <ul>
        <li>floor number: {props.galleryPropsFloor}</li>
        <li>{props.galleryPropsTheme}</li>
        <li>{props.galleryPropsLabeltext}</li>
      </ul>
    </div>
  )
}

export default Gallery;
