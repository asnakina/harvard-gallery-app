// import React, {Component} from 'react';
// import Classification from './Classification';
// import axios from 'axios';
//
// const BASE_URL = `https://api.harvardartmuseums.org/`
//
// class ClassificationList extends Component {
//   constructor(props){
//    super(props)
//    this.state = {
//      classificationData: []
//    }
//  }
//
//  async componentDidMount() {
//    // e.preventDefault()
//    await this.fetchData();
//  }
//
//  async fetchData() {
//    const newUrl = `${BASE_URL}classification?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${number}`;
//    const resp = await axios(newUrl);
//    console.log(resp);
//    this.setState({
//      classificationData: resp.data.records
//    })
//    console.log(this.state.classificationData)
//  }
//
//  render(){
//    return (
//      <div>
//       {this.state.imageData.map(e => {
//        <Classification classifProps = {} />
//     )
//   })}
//  </div>);
//  }
// }
//  export default ClassificationList;
