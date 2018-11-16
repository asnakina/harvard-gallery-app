import React from 'react';

function ZeroPage(props) {
  return(

    <div>
      <img src="image2.jpg" className="smallImg" />
      <h1>This is Entrance page. Click the button!</h1>
      <button type="button" value='mainView' onClick = {props.handleClick}>Click me</button>
    </div>
  )
}

export default ZeroPage;
    // <div className = "ZeroPageImg">
