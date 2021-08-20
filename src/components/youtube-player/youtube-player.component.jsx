import React from 'react';

import './youtube-player.styles.scss';

const YoutubePlayer = ({ videoIdArray }) => {
  let index = 0;

  console.log(videoIdArray.length);

  return (
    <div className="youtube-player">
      <iframe 
        src={`https://www.youtube.com/embed/${videoIdArray[index]}`}
        frameborder="0" className="iframe" allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="embedded game trailers"
      />
    </div>
  );
};

export default YoutubePlayer;