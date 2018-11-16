import React, {Component} from 'react';
import Gallery from './Gallery';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class GalleryList extends Component {
  constructor(props){
   super(props)
   this.state = {
     galleryData: [],
     // lastNum: 1
     selectedItem: '',
     selectedObj: null,
   }
   this.handleChange = this.handleChange.bind(this);
 }

 async componentDidMount() {
   // e.preventDefault()
   await this.fetchData();
 }

 async fetchData() {
   let number = 1;
   const newArr = [];
   let respAdd = [];

   while( number < 8){
     let newUrl = `${BASE_URL}gallery?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${number}`;
     newArr.push(newUrl)
     number += 1;
   }
   //newArr it's an array of 7 links
   console.log('this is newArr', newArr)
   for (let i=0; i < 7; i++) {
     const resp = await axios(newArr[i]);
     console.log('this is resp', resp)
     console.log('this is resp.data.records', resp.data.records)
     respAdd = respAdd.concat(resp.data.records)
    //respAdd - it's an array of objects after using axios
     console.log('this is respAdd', respAdd)
   }
   //console.log(respAdd);
   this.setState({
     galleryData: respAdd,
     selectedItem: respAdd[1].name,
     selectedObj: respAdd[1]
   })
   // console.log(this.state.galleryData)
 }

 handleChange(e) {
   let obj = this.state.galleryData.find(obj => obj.name == e.target.value)
   this.setState({
     selectedItem: e.target.value,
     selectedObj: obj
   })
   console.log(obj)
 }

 render(){
 return (
   <div>
    {/*// {this.state.galleryData.map(e => {
    //   return (
        // <GalleryDropdown
        // title="Select section"
        // GalleryName={e.name}
        // />
        <select
        {/*}// onChange={this.handleClick}
        // value={this.state.value}*/}
      <select onChange = {this.handleChange}>
        {this.state.galleryData.map((eachObj, index) => (
          <option value={eachObj.name} key={index}>{eachObj.name}</option>
        ))}
      </select>
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
