import React, {Component} from 'react';
import Images from './Images';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class ImagesList extends Component {
  constructor(props) {
   super(props)
   this.state = {
     imageData: []
   }
 }

 async componentDidMount() {
   await this.fetchData();
 }

 componentDidUpdate(prevProps){
   if(prevProps.lastNumProps !== this.props.lastNumProps) {
       this.fetchData()
   }
 }

  async fetchData() {
    const newUrl = `${BASE_URL}image?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${this.props.lastNumProps}`;
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
    <div className="BtnImgDivStyle">
      <button type="button" onClick = {this.props.prevProps} className="ImgBtnStyle">Previous</button>
      <button type="button" onClick = {this.props.nextProps} className="ImgBtnStyle">Next</button>
    </div>
    <div className="ImgListStyle">
     {this.state.imageData.map(e => {
       return (
         <Images
         imageUrlData = {e.baseimageurl}
         />
       )
     })}
    </div>
    </div>);
  }
}

export default ImagesList;
