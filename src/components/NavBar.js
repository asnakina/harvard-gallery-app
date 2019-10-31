import React from 'react';

function NavBar(props) {
  return (
      <ul className="NavBarStyle">
          <li data-value="imagesView" onClick={props.handleClickMenuText} className="NavBtnStyle">Images</li>
          <li data-value="videosView" onClick={props.handleClickMenuText} className="NavBtnStyle">Videos</li>
          <li data-value="galleryView" onClick={props.handleClickMenuText} className="NavBtnStyle">Gallery choice</li>
          <li data-value="classifView" onClick={props.handleClickMenuText} className="NavBtnStyle">Classification</li>
          <li data-value="addressesView" onClick={props.handleClickMenuText} className="NavBtnStyle">Find us here</li>
          <li data-value="newFormView" onClick={props.handleClickMenuText} className="NavBtnStyle">Your exhibition request</li>
          <li data-value="mainView" onClick={props.handleClickMenuText} className="NavBtnStyle">Main page</li>
      </ul>
    )
  }

export default NavBar;
