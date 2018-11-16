import React from 'react';

function Addresses(props) {
  return (
    <div>
      <ul>
       <li>{props.addressUrlDataName}</li>
       <li>{props.addressUrlDataAddress}</li>
       <li>{props.addressUrlDataLongitude}</li>
       <li>{props.addressUrlDataLatitude}</li>
       </ul>
    </div>
  )
}

export default Addresses;
