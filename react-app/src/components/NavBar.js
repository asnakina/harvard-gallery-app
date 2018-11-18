import React from 'react';

function NavBar(props) {
  return (
      <div className="NavBarStyle">
          <button type="button" value="imagesView" onClick={props.handleClick} className="NavBtnStyle">Images</button>
          <button type="button" value="videosView" onClick={props.handleClick} className="NavBtnStyle">Videos</button>
          <button type="button" value="galleryView" onClick={props.handleClick} className="NavBtnStyle">Gallery choice</button>
          <button type="button" value="classifView" onClick={props.handleClick} className="NavBtnStyle">Classification</button>
          <button type="button" value="addressesView" onClick={props.handleClick} className="NavBtnStyle">Find us here</button>
          <button type="button" value="newFormView" onClick={props.handleClick} className="NavBtnStyle">Your exhibition request</button>
          <button type="button" value="mainView" onClick={props.handleClick} className="NavBtnStyle">Main page</button>
      </div>
    )
  }

export default NavBar;
