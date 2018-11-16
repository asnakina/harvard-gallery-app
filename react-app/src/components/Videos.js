import React from 'react';

function Videos(props) {
  // const num = 52099684;
  // const urlArray = "https://vimeo.com/${id}".split('/');
  // console.log(urlArray);
  // const id = urlArray[urlArray.length - 1];
  // console.log(id);
  //props.videolinkData.split('/')

  //urlArray will be 2 separate parts now
  const urlArray = props.videolinkData.split('/');
  //and we take the last part
  const id = urlArray[urlArray.length - 1];

  return (
    // <div>
    // <video> <source src ={e.primaryurl}</video>
    // </div>
    <div>
      <h2>{props.videoDescrData}</h2>
    {/*// <iframe src={`https://player.vimeo.com/video/52099684?title=0&byline=0&portrait=0`} //width="640" height="427" frameborder="0" */}
    <iframe src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
    webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      {/*// <a href = {props.videolinkData} target="__html">*/}
      <h3>source: {props.videolinkData}</h3>
       {/*// </a>*/}
    </div>
)}

export default Videos;



//<iframe src={`https://player.vimeo.com/video/${Num}?title=0&byline=0&portrait=0`}
//width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//<iframe src="https://player.vimeo.com//video52099684?title=0&byline=0&portrait=0" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
