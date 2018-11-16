import React from 'react';

function Images(props) {
  return (
    <div>
      <img src={props.imageUrlData} className="imgClass"/>
    </div>
  )
}

export default Images;
