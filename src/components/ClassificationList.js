import React, {Component} from 'react';
import Classification from './Classification';
import axios from 'axios';

const BASE_URL = `https://api.harvardartmuseums.org/`

class ClassificationList extends Component {
  constructor(props){
    super(props)
    this.state = {
      classificationData: [],
      searchInput: '',
      searchOutput: ''
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
   await this.fetchData();
  }

  async fetchData() {
    let number = 1;
    //newArr is an array of 7 links
    const newArr = [];
    //respAdd is an array of objects after using axios
    let respAdd = [];

    while (number <= 7) {
    let newUrl = `${BASE_URL}classification?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${number}`;
    newArr.push(newUrl)
    number += 1;
  }
    for (let i=0; i < 7; i++) {
    const resp = await axios(newArr[i]);
    respAdd = respAdd.concat(resp.data.records)
  }

    this.setState({
      classificationData: respAdd
   })
  }

  handleSearch(e) {
    const value = e.target.value
    this.setState ({
      searchInput: value
    });
  }

  getSearch(searchInput) {
    const filtArr = this.state.classificationData.filter(e =>
      e.name.includes(this.state.searchInput));
      this.setState({
        searchOutput: filtArr
      })
      console.log(filtArr)
    }

  handleSubmit() {
    this.getSearch(this.state.searchInput);
  }

  render() {
   return (
     <div className="ClassifListStyle">
      <div className="SearchBarStyle">
         <input
           type="text"
           onChange={this.handleSearch}
           value={this.searchInput}
           placeholder="What would you like to search?"
           className="SearchItemsClassif"
         />
         <button
           onClick={this.handleSubmit}
           className="SearchItemsClassif"
         >Search</button>
         {/*<textarea
           type="text"
           onChange={this}
           value={this.state.searchOutput}
           placeholder="Here's the result"
           className="SearchItemsClassif"
         />*/}
      </div>
        {/*{this.state.classificationData.map(e => {
         return(
           <Classification
             classifProps = {e.name} />
         )
      })}*/}
        <Classification
          classifProps = {this.state.searchOutput}/>
   </div>);
  }
}

export default ClassificationList;
