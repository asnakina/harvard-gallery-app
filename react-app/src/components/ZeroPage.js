import React from 'react';
import image2 from '../image2.jpg';

function ZeroPage(props) {
  return(
    <div class="ZeroPageImg">
      <img src={image2} className="smallImg" />
      <h1>This is Entrance page. Click the button!</h1>
      <button type="button" value='mainView' onClick = {props.handleClick}>Click me</button>
    </div>
  )
}

export default ZeroPage;
    // <div className = "ZeroPageImg">
