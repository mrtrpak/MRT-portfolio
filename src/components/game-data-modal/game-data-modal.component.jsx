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
    name, rating, background_image, released, score, genres, platforms  
  } = finalChoice;
  const [hidden, setHidden] = useState("hidden");
  const [videoIdArray, setVideoIdArray] = useState([]);
  const [esrbSrc, setEsrbSrc] = useState(null);

  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
      setVideoIdArray([]);
    } else {
      const youtubeVideoSearch = () => {
        YTSearch({ key: youtubeKey, term: `${finalChoice.name} official video game trailer`}, 
          videos => { videos.map(video => (
            setVideoIdArray(array => [...array, video.id.videoId])
          ))}
        );
      };

      const setEsrbImage = () => {
        const ratingSlug = finalChoice.esrb_rating.slug;

        if (!ratingSlug) {
          return null;
        } else {
          switch (ratingSlug) {
            case "everyone":
              setEsrbSrc(everyone);
              break;
            case "everyone-10-plus":
              setEsrbSrc(everyone10);
              break;
            case "teen":
              setEsrbSrc(teen);
              break;
            case "mature":
              setEsrbSrc(mature);
              break;
            case "adults-only":
              setEsrbSrc(adultsOnly);
              break;
            case "rating-pending":
              setEsrbSrc(ratingPending);
              break;
            default:
              return null;
          }
        }
      }
    
      youtubeVideoSearch();
      setEsrbImage();
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
    <div className="game-data-modal" hidden={hidden} style={{
      backgroundImage: `url(${background_image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <h4 className="game-data-title">{name}</h4>
      <div className="player-and-ratings">
        <YoutubePlayer videoIdArray={videoIdArray} />
        <div className="game-ratings">
          {
            !esrbSrc ? null : <img src={esrbSrc} alt="esrb rating" />
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