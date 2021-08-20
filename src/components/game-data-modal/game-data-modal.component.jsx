import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

import './game-data-modal.styles.scss';

import { youtubeKey } from '../../utils/secret';
import YoutubePlayer from '../youtube-player/youtube-player.component';

const GameDataModal = ({ finalChoice }) => {
  const [hidden, setHidden] = useState("hidden");
  const [videoIdArray, setVideoIdArray] = useState([]);
  
  useEffect(() => {
    
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
    } else {
      const { name } = finalChoice;

      const youtubeVideoSearch = () => {
        YTSearch({ key: youtubeKey, term: `${name} official trailer`}, 
          videos => { videos.map(video => (
            setVideoIdArray(array => [...array, video.id.videoId])
          ))}
        );
      };

      setHidden("");
      setVideoIdArray([]);
      youtubeVideoSearch();
    }
  }, [finalChoice]);
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">{finalChoice.name}</h4>
      <YoutubePlayer videoIdArray={videoIdArray} />
    </div>
  );
};

export default GameDataModal;