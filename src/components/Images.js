import React from 'react';

function Images(props) {
  return (
    <div>
      <img src={props.imageUrlData} className="ImagesStyle" alt="img"/>
    </div>
  )
}

export default Images;
