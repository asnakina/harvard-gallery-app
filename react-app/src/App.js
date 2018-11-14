import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
//import NavBar from './components/NavBar';

//const BASE_URL = `https://api.harvardartmuseums.org/{TOPIC}?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&`
//how can i type only 1 BASE_URL and change only {TOPIC} in the middle and num. of page in the end?
const VIDEOS_URL = `https://api.harvardartmuseums.org/video?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&`
const GALLERY_URL = 'https://api.harvardartmuseums.org/gallery?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&'
const IMAGE_URL = 'https://api.harvardartmuseums.org/image?apikey=c618a9f0-e782-11e8-ac8f-15dc77ff48b1&'

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    videos: [],
    images: [],
    renditionnumber: ''
  }
}

  componentDidMount() {
    this.getVideos();
    this.getImages();
  }

  async getVideos() {
    const allVideos = await axios.get(VIDEOS_URL);
    this.setState({ videos: allVideos.data.records });
    // console.log(videos);
    const Num = allVideos.map(e => {
      return (
        e.slice(18) //it will be the number
      )
    }
  }


  async getImages() {
    const allImages = await axios.get(IMAGE_URL);
    console.log(allImages)
    this.setState({
      images: allImages.data.records,
      renditionnumber: ''
    })
    // console.log(images);
  }

  render() {
    return (
      <div className="App">
      {this.state.videos.map(e => {
        return (
          <div>
          <iframe src={`https://player.vimeo.com/video/${Num}?title=0&byline=0&portrait=0`} width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
           )})}
      {this.state.images.map(e => {
         return (
          <img src="https://nrs.harvard.edu/urn-3:HUAM:COIN09238_dlvr" />
           )})}
       </div>
     );
   }
 }
//<iframe src="https://player.vimeo.com//video52099684?title=0&byline=0&portrait=0" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <video>
//   <source src={e.primaryurl}/>
// </video>

export default App;
