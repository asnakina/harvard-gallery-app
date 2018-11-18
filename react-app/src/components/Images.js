import React from 'react';

function Images(props) {
  return (
    <div>
      <img src={props.imageUrlData} className="ImagesStyle"/>
    </div>
  )
}

export default Images;
