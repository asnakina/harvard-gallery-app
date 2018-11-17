import React, {Component} from 'react';
import Addresses from './Addresses';
import axios from 'axios';

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
    </div>);
  }
}

export default AddressesList;
