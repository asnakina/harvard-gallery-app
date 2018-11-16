import React from 'react';

function NavBar(props) {
  return (
      <div>
          <button type="button" value="imagesView" onClick={props.handleClick}>Images</button>
          <button type="button" value="videosView" onClick={props.handleClick}>Videos</button>
          <button type="button" value="addressesView" onClick={props.handleClick}>Find us here</button>
          <button type="button" value="mainView" onClick={props.handleClick}>Main page</button>
      </div>
    )
  }

export default NavBar;
