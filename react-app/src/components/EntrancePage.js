import React from 'react';
import triangle1 from '../images/triangle6.png';

function EntrancePage(props) {
  return(
    <div class="EntrancePageImg">
      <img src={triangle1} className="triangleImg"/>
      <button type="button" value='mainView' onClick={props.handleClick} className="EntrBtnStyle">Click me</button>
    </div>
  )
}

export default EntrancePage;
