import React from 'react';
// import address1 from '../images/address1.jpg';

function Addresses(props) {
  return (
    <div>
      <ul className="AddressUlStyle">
       <li><span className="AddressesLabel">Name:</span> <span className="AddressesValue">{props.addressUrlDataName}</span></li>
       <li><span className="AddressesLabel">Address:</span> <span className="AddressesValue">{props.addressUrlDataAddress}</span></li>
       <li><span className="AddressesLabel">Longitude:</span> <span className="AddressesValue">{props.addressUrlDataLongitude}</span></li>
       <li><span className="AddressesLabel">Latitude:</span> <span className="AddressesValue">{props.addressUrlDataLatitude}</span></li>
      </ul>
    </div>
  )
}

export default Addresses;
