import React from 'react';

function Videos(props) {
  //videosLinkData = "https://vimeo.com/${id}";
  //urlArray will be 2 separate parts now
  const urlArray = props.videosLinkData.split('/');
  //and we take the last part
  const id = urlArray[urlArray.length - 1];

  return (
    <div className="allVideos">
      <h2>{props.videosDescrData}</h2>
      <iframe src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`} frameborder="0" title="yogaVideo" className="VideosStyle"></iframe>
      <a href = {props.videolinkData} target="__html">{props.videolinkData}</a>
      {/* <h3>source: {props.videosLinkData}</h3>*/}
    </div>
)}

export default Videos;
