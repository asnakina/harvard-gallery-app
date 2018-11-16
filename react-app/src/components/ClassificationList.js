import React, {Component} from 'react';
import Classification from './Classification';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class ClassificationList extends Component {
  constructor(props){
    super(props)
    this.state = {
      classificationData: []
    }
  }

  async componentDidMount() {
   await this.fetchData();
  }

  async fetchData() {
    const newUrl = `${BASE_URL}classification?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&`;
    const resp = await axios(newUrl);
    console.log(resp);
    this.setState({
      classificationData: resp.data.records
   })
   console.log(this.state.classificationData)
  }
  
  render(){
   return (
     <div>
      {this.state.classificationData.map(e => {
         return(
       <Classification
           classifProps = {e.name} />
     )
   })}
   </div>);
 }
}

export default ClassificationList;
