import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import EntrancePage from './components/EntrancePage';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import VideosList from './components/VideosList';
import ImagesList from './components/ImagesList';
import GalleryList from './components/GalleryList';
import ClassificationList from './components/ClassificationList';
import AddressesList from './components/AddressesList';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    currentView: 'EntranceView',
    lastNum: 1
  }
  this.handleClick = this.handleClick.bind(this);
  this.next = this.next.bind(this);
  this.prev = this.prev.bind(this);
 }

 next() {
   this.setState ({
      lastNum: this.state.lastNum + 1
    });
    this.getView();
 }

 prev() {
   if(this.state.lastNum >= 2) {
     this.setState({
       lastNum: this.state.lastNum - 1
     });
     this.getView()
   } else {
     alert('This is the first page. There are no previous pages')
  }
 }

 handleClick(e) {
   const value = e.target.value;
   this.setState({
     currentView: value
   })
 }

 //created new class Components Lists in order to prevent calling data again and again from switch statement
 //before only 1 URL from API call was used in App.js with changing {category} inside of the link
 //async fetchData(category) {
 //const newUrl=`${BASE_URL}${category}?apikey=${process.env.REACT_APP_GALLERY_API_KEY}&page=${this.state.lastNum}`;
 //const resp = await axios(newUrl);
 //as we have other class Components, they call certain URLs.
 getView() {
   const view = this.state.currentView;
   switch(view) {
     case 'imagesView':
       return (
       <ImagesList
       nextProps = {this.next}
       lastNumProps = {this.state.lastNum}
       prevProps = {this.prev}
       />
     );
     case 'galleryView':
       return <GalleryList />
     case 'classifView':
       return <ClassificationList />
     case 'addressesView':
       return <AddressesList />
     case 'videosView':
       return <VideosList />
     case 'mainView':
       return <LandingPage />
     case 'EntranceView':
       return <EntrancePage handleClick = {this.handleClick} />
     }
 }

  render() {
    //writing conditional/triple/ternary operator
    return (
      <div className="App">
        {this.state.currentView === "EntranceView" ? null :
          <div>
            <NavBar handleClick={this.handleClick} />
          </div>}
        {this.getView()}
      </div>
     );
   }
 }

export default App;
