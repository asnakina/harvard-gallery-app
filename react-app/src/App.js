import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import Images from './components/Images';
import LandingPage from './components/LandingPage';
//import Videos from './components/Videos';
//import Groups from './components/Groups';
//import Classification from './components/Classification';
//import Addresses from

//how can i type only 1 BASE_URL and change only {TOPIC} in the middle and num. of page in the end?
const BASE_URL = `https://api.harvardartmuseums.org/`
// {category}?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&
// const VIDEOS_URL = `https://api.harvardartmuseums.org/video?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&`
// const GALLERY_URL = 'https://api.harvardartmuseums.org/gallery?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&'
// const IMAGES_URL = 'https://api.harvardartmuseums.org/image?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&'
// const ADDRESSES_URL = 'https://api.harvardartmuseums.org/site?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&'
// const CLASSIFICATION_URL = 'https://api.harvardartmuseums.org/classiffications?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&'

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    galleryData: [],
    // videos: [],
    // images: [],
    // baseimageurl: [],
    // renditionnumber: '',
    currentView: '',
    // value: ''
  }
  this.handleClick = this.handleClick.bind(this);
 }

 async fetchData(category) {
   const newUrl = `${BASE_URL}${category}?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&1`;
   const resp = await axios(newUrl);
    console.log(resp);
   this.setState({
     galleryData: resp.data.records
   })
   console.log(this.state.galleryData)
 }

 handleClick(e) {
   const value = e.target.value;
   this.setState({currentView: value})
 }

 componentDidMount() {
   // this.getVideos();
   // this.getImages();
   // this.fetchData();
 }

 getView() {
   const view = this.state.currentView;
   switch(view) {
     case 'imagesView':
     this.fetchData('image');
     console.log(this.state.galleryData)
       return <Images imageData = {this.state.galleryData}/>
       case 'mainView':
       return <LandingPage />
     default:
       return <LandingPage />
   }
 }

 //   async getImages() {
 //     // const allImages = await axios.get(`${BASE_URL}image?apikey=${process.env.API_KEY}`);
 //     // console.log('this is allImages', allImages)
 //     this.setState({
 //       // images: allImages.data.records,
 //       baseimageurl: (allImages.data.records.map(image => (image.baseimageurl)
 //     ))
 // }

  render() {
    return (
      <div className="App">
         <div>
          <NavBar handleClick={this.handleClick}/>
         </div>
      {/*} <Images getImages={this.getImages} imageShowUp={this.state.baseimageurl} />*/}
          {this.getView()}
       </div>
     );
   }
 }
//<iframe src={`https://player.vimeo.com/video/${Num}?title=0&byline=0&portrait=0`} width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//<iframe src="https://player.vimeo.com//video52099684?title=0&byline=0&portrait=0" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//<video>
//<source src={e.primaryurl}/>
//</video>

export default App;









//     // for (let i=0; i < images.length; i++) {
//     // renditionnumber: allImages.data.records.map(rNumber => rNumber.renditionnumber)
//   })
//   // console.log(images);
//   // console.log(baseimageurl);
// }
//
// async getVideos() {
//   const allVideos = await axios.get(`${BASE_URL}images?apikey=${process.env.API_KEY}`);
//   this.setState({ videos: allVideos.data.records.map(video =>
//     video.primaryurl) });
//   // console.log(videos);
//   // const Num = allVideos.map(e => {
//   //   return (
//   //     e.slice(18) //it will be the number
//   //   )
//   // })
// }

// <img src={this.state.baseimageurl[1]} />
// <img src={this.state.baseimageurl[2]} />

// {/*// {this.state.renditionnumber}
// {this.state.videos.map(e => {
//   return (

//      )})}
// {this.state.images.map(e => {
//    return (
//     // <img src="https://nrs.harvard.edu/urn-3:HUAM:COIN09238_dlvr" />
//      )}*/}