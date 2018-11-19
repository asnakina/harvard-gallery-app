import React, {Component} from 'react';
import Videos from './Videos';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class VideosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videosData: []
    }
  }

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData(){
    let number = 1;
    //newArr is an array of 7 links
    const newArr = [];
    //respAdd is an array of objects after using axios
    let respAdd = [];

    while (number <= 7) {
    let newUrl = `${BASE_URL}video?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${number}`;
    newArr.push(newUrl)
    number += 1;
  }
    for (let i=0; i < 7; i++) {
    const resp = await axios(newArr[i]);
    respAdd = respAdd.concat(resp.data.records)
  }

    this.setState({
      videosData: respAdd
    })
    console.log(this.state.videosData)
  }

  render(){
    return (
      <div className="VideosListStyle">
      {this.state.videosData.map(e => {
        return (
          <Videos
          videosLinkData = {e.primaryurl}
          videosDescrData = {e.description}
          />
        )
      })}
      </div>);
  }
}

export default VideosList;
