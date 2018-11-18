import React from 'react';
// import address1 from '../images/address1.jpg';

function Addresses(props) {
  return (
    <div className="AddressStyle">
    <div>
      <ul className="AddressUlStyle">
       <li>Name: {props.addressUrlDataName}</li>
       <li>Address: {props.addressUrlDataAddress}</li>
       <li>Longitude: {props.addressUrlDataLongitude}</li>
       <li>Latitude: {props.addressUrlDataLatitude}</li>
      </ul>
    </div>
    <div>
       {/*<img src={address1} className="addressImg" />*/}
    </div>
    </div>
  )
}

export default Addresses;
