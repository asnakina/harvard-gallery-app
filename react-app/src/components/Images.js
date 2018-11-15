import React from 'react';

function Images(props) {
  return (
    <div>
    {props.imageData.map(e => {
      return (
          <img src={e} />
      )
    })
   }
  </div>
 )
}

export default Images;
