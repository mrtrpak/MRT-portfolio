import React, { useState, useEffect } from 'react';
import { IoArrowUndo, IoArrowRedo } from 'react-icons/io5';

import './youtube-player.styles.scss';

const YoutubePlayer = ({ videoIdArray }) => {
  const [index, setIndex] = useState(0);
  const id = videoIdArray[index];
  const [videoId, setVideoId] = useState(id);
  const [height, setHeight] = useState();

  const videoChangeOnclick = direction => {
    if (direction === "back") {
      if (index === 0) {
        setIndex(videoIdArray.length - 1);
        setVideoId(id);
      } else {
        setIndex(index - 1);
        setVideoId(id);
      }
    } else if (direction === "forward") {
      if (index === videoIdArray.length - 1) {
        setIndex(0);
        setVideoId(id);
      } else {
        setIndex(index + 1);
        setVideoId(id);
      };
    };
  };

  useEffect(() => {
    setVideoId(videoIdArray[0]);
    const width = window.innerWidth;
    width < 950 ? setHeight("200px") : setHeight("250px");
  }, [videoIdArray]);

  return (
    <div className="youtube-player">
      <iframe style={{ height: height}}
        src={`https://www.youtube.com/embed/${videoId}`} title="embedded game trailers"
        className="iframe" frameBorder="0" allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="change-video-container">
        <IoArrowUndo className="change-video-icon" id="back"
          onClick={() => videoChangeOnclick("back")} />
        <p className="change-video-text">CYCLE THRU VIDEOS</p>
        <IoArrowRedo className="change-video-icon" id="forward"
          onClick={() => videoChangeOnclick("forward")} />
      </div>
    </div>
  );
};

export default YoutubePlayer;