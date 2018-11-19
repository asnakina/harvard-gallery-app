import React from 'react';
import triangle1 from '../images/triangle6.png';

function EntrancePage(props) {
  return(
    <div className="EntrancePageImg">
      <img src={triangle1} className="triangleImg" onClick={props.handleClick} value='mainView' />
      <button type="button" value='mainView' onClick={props.handleClick} className="EntrBtnStyle">
        <span value='mainView' onClick={props.handleClick}>Click me</span>
      </button>
    </div>
  )
}

export default EntrancePage;
