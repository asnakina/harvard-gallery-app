import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import Images from './components/Images';
import LandingPage from './components/LandingPage';
import Videos from './components/Videos';
import ImagesList from './components/ImagesList';
//import Groups from './components/Groups';
//import Classification from './components/Classification';
import AddressesList from './components/AddressesList';
import ZeroPage from './components/ZeroPage';

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
    videoData: [],
    // imageData: [],
    // addressesData: [],
    // baseimageurl: [],
    // renditionnumber: '',
    currentView: 'zeroView',
    // value: '',
    imageURL: '',
    videoURL: '',
    lastNum: 1,

  }
  this.handleClick = this.handleClick.bind(this);
  this.next = this.next.bind(this);
  this.prev = this.prev.bind(this);
 }

 async fetchData(category) {
   const newUrl = `${BASE_URL}${category}?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${this.state.lastNum}`;
   // if (category === 'image') {
   //   this.setState({imageURL: newUrl})
   // }
   const resp = await axios(newUrl);
    console.log(resp);
   this.setState({
     galleryData: resp.data.records
   })
   console.log(this.state.galleryData)
 }

 next() {
    this.setState({
       lastNum: this.state.lastNum + 1
    });
    this.getView();
 }

 prev() {
   if(this.state.lastNum >= 1){
   this.setState({
     lastNum: this.state.lastNum - 1
   });
   this.getView()
  } else {
    alert('No way back')
  }
 }

 handleClick(e) {
   debugger
   const value = e.target.value;
   this.setState({currentView: value})
 }

//created new class Components Lists in order to prevent calling data again and again from switch statement
//and before i used only 1 URL with changing {category}, but now other class Components call certain URLs.
 getView() {
   const view = this.state.currentView;
   switch(view) {
     case 'imagesView':
     //console.log(this.state.galleryData)
     return (
       <ImagesList
       nextProps = {this.next}
       lastNumProps = {this.state.lastNum}
       prevProps = {this.prev}
       />
     );
     //<div>
     //   <button onClick = {this.next}>Next</button>
     //  {this.state.galleryData.map(e => {
     //    return (
     //      <Images imageData = {e.baseimageurl} />
     //    )
     //  })}
     // </div>
     case 'addressesView':
     return(
       <AddressesList />
     );
       case 'videosView':
       this.fetchData('video');
       return (
         <div>
         {this.state.galleryData.map(e => {
           return (
             <Videos videolinkData = {e.primaryurl}
                  videoDescrData = {e.description}
             />
           )
         })}
         </div>)
       case 'mainView':
       return <LandingPage />
       // case 'addressesView':
       // return <Addresses addressData = {this.state.galleryData}
       case 'zeroView':
       return <ZeroPage handleClick = {this.handleClick} />
     }
 }

  render() {
    //writing ternary operator for Zeropage
    return (
      <div className="App">
      {this.state.currentView === "zeroView" ? null :
         <div>
           <NavBar handleClick={this.handleClick} />
         </div>}
      {/*} <Images getImages={this.getImages} imageShowUp={this.state.baseimageurl} />*/}
          {this.getView()}
       </div>
     );
   }
 }

export default App;






// debugger
// const url = this.state.imageURL;
// let storedURL = '';
// for(let i=0; i < url.length -1; i++) {
//   storedURL += url[i];
// }
// let arr = url.split('');
// let lastNum =  arr.pop;
// let storedURL = arr.join('');
//  let storedURL =  url.substr(0, (url.length - 1));
 // let lastNum = url[url.length - 1] //it's a string
 // lastNum = Number(lastNum) + 1; //it's a number now
 // lastNum = String(lastNum); //it's a string back
 // return (
 //   storedURL + lastNum
 // )
 // this.setState({
 //   // imageURL:  storedURL + lastNum,
 //   lastNum: lastNum
 // })

// componentDidMount() {
//   // this.getVideos();
//   // this.getImages();
//   // this.fetchData();
// }
//   async getImages() {
//     // const allImages = await axios.get(`${BASE_URL}image?apikey=${process.env.API_KEY}`);
//     // console.log('this is allImages', allImages)
//     this.setState({
//       // images: allImages.data.records,
//       baseimageurl: (allImages.data.records.map(image => (image.baseimageurl)
//     ))
// }
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
