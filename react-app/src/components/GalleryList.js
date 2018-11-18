import React, {Component} from 'react';
import Gallery from './Gallery';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class GalleryList extends Component {
  constructor(props){
   super(props)
   this.state = {
     galleryData: [],
     selectedItem: '',
     selectedObj: null,
   }
   this.handleChange = this.handleChange.bind(this);
 }

 async componentDidMount() {
   await this.fetchData();
 }

 async fetchData() {
   let number = 1;
   //newArr is an array of 7 links
   const newArr = [];
   //respAdd is an array of objects after using axios
   let respAdd = [];

   while(number < 8) {
     let newUrl = `${BASE_URL}gallery?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${number}`;
     newArr.push(newUrl)
     number += 1;
   }
   for (let i=0; i < 7; i++) {
     const resp = await axios(newArr[i]);
     respAdd = respAdd.concat(resp.data.records)
   }

   this.setState({
     galleryData: respAdd,
     selectedItem: respAdd[1].name,
     selectedObj: respAdd[1]
   })
   // console.log(this.state.galleryData)
 }

 handleChange(e) {
   //we use id because it's unic
   let obj = this.state.galleryData.find(obj => obj.id == e.target.value)
   this.setState({
     selectedItem: e.target.value,
     selectedObj: obj
   })
   console.log(obj)
 }

 render(){
 return (
   <div className="GalleryListStyle">
      <select onChange = {this.handleChange} className="SelectStyle">
        {this.state.galleryData.map((eachObj, index) => (
          <option value={eachObj.id} key={index}>{eachObj.name}</option>
        ))}
      </select>
      {/* writing conditional/triple/ternary operator */}
      {this.state.selectedObj ?
      <Gallery
        galleryPropsFloor = {this.state.selectedObj.floor}
        galleryPropsTheme = {this.state.selectedObj.theme}
        galleryPropsLabeltext = {this.state.selectedObj.labeltext}
      /> : null
    }
   </div>);
 }
}

export default GalleryList;
