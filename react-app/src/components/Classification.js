import React from 'react';

function Classification(props) {
  //if classifProps.length > 0 return the div, if not-nothing
  return props.classifProps.length > 0 ?
   (
    <div className="ClassifStyle">
     {props.classifProps.map(e => {
      return(
        <p>{e.name}</p>
       )
      })}
    </div>
   )
  : null
}

export default Classification;
