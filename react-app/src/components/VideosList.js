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
    const newUrl = `${BASE_URL}video?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&`;
    const resp = await axios(newUrl);
    this.setState({
      videosData: resp.data.records
    })
    console.log(this.state.videosData)
  }

  render(){
    return (
      <div>
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
