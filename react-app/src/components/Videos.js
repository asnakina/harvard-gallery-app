import React from 'react';

function Videos(props) {
  return (
    // <div>
    // <video><source src ={props.}</video>
    // </div>
    <div>
    <a href = {props.videolinkData} target="__html">
    <h3>{props.videolinkData}</h3>
    console.log(props.videolinkData)
    </a>
    <h2>{props.videoDescrData}</h2>
    </div>
)}

export default Videos;

//<iframe src={`https://player.vimeo.com/video/${Num}?title=0&byline=0&portrait=0`}
//width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//<iframe src="https://player.vimeo.com//video52099684?title=0&byline=0&portrait=0" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//<video>
//<source src={e.primaryurl}/>
//</video>
