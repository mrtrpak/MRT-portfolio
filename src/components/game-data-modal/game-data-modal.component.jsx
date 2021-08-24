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
  const [gameBackgroundImage, setGameBackgroundImage] = useState(null);

  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
      setVideoIdArray([]);
    } else {
      const youtubeVideoSearch = () => {
        YTSearch({ key: youtubeKey, term: `${name} official video game trailer`}, 
          videos => { videos.map(video => (
            setVideoIdArray(array => [...array, video.id.videoId])
          ))}
        );
      };
    
      youtubeVideoSearch();
      setHidden("");
      setGameBackgroundImage(background_image);
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
    <div className="game-data-modal" hidden={hidden} style={{
      backgroundImage: `url(${gameBackgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <h4 className="game-data-title">{name}</h4>
      <div className="player-and-ratings">
        <YoutubePlayer videoIdArray={videoIdArray} className="youtube-player-comp" />
        <div className="game-ratings">
          <img src={everyone} alt="esrb rating" />
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