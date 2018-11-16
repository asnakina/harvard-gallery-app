import React from 'react';

function Gallery(props) {
  return(
    <div>
      <ul>
        <li> {props.galleryPropsFloor} </li>
        <li> {props.galleryPropsTheme} </li>
        <li> {props.galleryPropsLabeltext} </li>
      </ul>
    </div>
  )
}

export default Gallery;
