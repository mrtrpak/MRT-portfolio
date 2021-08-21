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

  const { name, rating } = finalChoice;
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">{name}</h4>
      <div className="player-and-ratings">
        <YoutubePlayer videoIdArray={videoIdArray} />
        <div className="game-ratings">
          <div className="esrb-rating">

          </div>
          <div className="game-rating">
            <h4 className="game-rating-title">GAME RATING</h4>
            <p className="game-rating-score">{rating}</p>
          </div>
        </div>
      </div>
      <div className="game-data-container">

      </div>
    </div>
  );
};

export default GameDataModal;