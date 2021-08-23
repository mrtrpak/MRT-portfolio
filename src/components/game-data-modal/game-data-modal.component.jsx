import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

import './game-data-modal.styles.scss';

import { youtubeKey } from '../../utils/secret';
import everyone from '../../assets/esrb-rating-images/everyone.png';
import everyone10 from '../../assets/esrb-rating-images/everyone10+.png';
import teen from '../../assets/esrb-rating-images/teen.png';
import mature from '../../assets/esrb-rating-images/mature.png';
import adultsOnly from '../../assets/esrb-rating-images/adults-only.png';
import ratingPending from '../../assets/esrb-rating-images/rating-pending.png';
import YoutubePlayer from '../youtube-player/youtube-player.component';

const GameDataModal = ({ finalChoice }) => {
  const { 
    name, rating, background_image, released, score, esrb_rating, genres, platforms  
  } = finalChoice;
  const [hidden, setHidden] = useState("hidden");
  const [videoIdArray, setVideoIdArray] = useState([]);
  const [esrbSrc, setEsrbSrc] = useState(undefined);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const youtubeVideoSearch = () => {
    YTSearch({ key: youtubeKey, term: `${name} official trailer`}, 
      videos => { videos.map(video => (
        setVideoIdArray(array => [...array, video.id.videoId])
      ))}
    );
  };

  youtubeVideoSearch();

  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
      setVideoIdArray([]);
    } else {
      setHidden("");
    };
  }, [finalChoice]);

  // if (!esrb_rating) {
  //   setEsrbSrc(null);
  // } else if (esrb_rating.slug === "everyone") {
  //   setEsrbSrc(everyone);
  // } else if (esrb_rating.slug === "everyone-10-plus") {
  //   setEsrbSrc(everyone10);
  // } else if (esrb_rating.slug === "teen") {
  //   setEsrbSrc(teen);
  // } else if (esrb_rating.slug === "mature") {
  //   setEsrbSrc(mature);
  // } else if (esrb_rating.slug === "adults-only") {
  //   setEsrbSrc(adultsOnly);
  // } else if (esrb_rating.slug === "rating-pending") {
  //   setEsrbSrc(ratingPending);
  // }
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">{name}</h4>
      <div className="player-and-ratings">
        <YoutubePlayer videoIdArray={videoIdArray} />
        <div className="game-ratings">
          {
            !esrbSrc ? null : 
            <div className="esrb-rating">
              
            </div>
          }
          <div className="game-rating">
            <h4 className="game-rating-title">GAME RATING</h4>
            <p className="game-rating-score">{rating} / 5</p>
          </div>
        </div>
      </div>
      <div className="game-data-container">

      </div>
    </div>
  );
};

export default GameDataModal;