import React, {Component} from 'react';
import Images from './Images';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class ImagesList extends Component {
  constructor(props){
   super(props)
   this.state = {
     imageData: []
   }
 }

 async componentDidMount() {
   // e.preventDefault()
   await this.fetchData();
 }

  async fetchData() {
    const newUrl = `${BASE_URL}image?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${this.state.lastNum}`;
    // if (category === 'image') {
    //   this.setState({imageURL: newUrl})
    // }
    const resp = await axios(newUrl);
     console.log(resp);
    this.setState({
      imageData: resp.data.records
    })
    console.log(this.state.imageData)
  }

  render(){
  return (
    <div>
     {this.state.imageData.map(e => {
       return (
         <Images imageUrlData = {e.baseimageurl} />
       )
     })}
    </div>);
  }
}

export default ImagesList;

    // <button onClick = {props.next}>Next</button>
