import React from 'react';

function Gallery(props) {
  return(
    <div className="GalleryStyle">
      <ul>
        <li className="GallItemsCentered">floor number: {props.galleryPropsFloor}</li>
        <li className="GallItemsCentered">{props.galleryPropsTheme}</li>
        <li>{props.galleryPropsLabeltext}</li>
      </ul>
    </div>
  )
}

export default Gallery;
