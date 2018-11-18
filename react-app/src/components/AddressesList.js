import React, {Component} from 'react';
import Addresses from './Addresses';
import axios from 'axios';
import address1 from '../images/address1.jpg';
import address2 from '../images/address2.jpg';
import address3 from '../images/address3.jpg';

const BASE_URL = `https://api.harvardartmuseums.org/`

class AddressesList extends Component {
  constructor(props){
   super(props)
   this.state = {
     addressesData: []
   }
   console.log(this.state.addressesData)
 }

 async componentDidMount() {
   await this.fetchData();
   console.log('mount')
 }

  async fetchData() {
    const newUrl = `${BASE_URL}site?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&`;
    const resp = await axios(newUrl);
     console.log(resp);
      this.setState({
      addressesData: resp.data.records
    })
    console.log(this.state.addressesData)
  }

  render(){
  return (
    <div>
    <div className="AddressListStyle">
     {this.state.addressesData.map(e => {
       return (
         <Addresses
         addressUrlDataName = {e.name}
         addressUrlDataAddress = {e.address}
         addressUrlDataLongitude = {e.geo.longitude}
         addressUrlDataLatitude = {e.geo.latitude}
          />
       )
     })}
    </div>
    <div className="AddressImagesStyle">
      <img src={address1} className="addressImg" />
      <img src={address2} className="addressImg" />
      <img src={address3} className="addressImg" />
    </div>
  </div>);
  }
}

export default AddressesList;
