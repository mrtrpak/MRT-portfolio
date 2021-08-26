import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

import './game-data-modal.styles.scss';

import everyone from '../../assets/esrb-rating-images/everyone.png';
import everyone10 from '../../assets/esrb-rating-images/everyone10+.png';
import teen from '../../assets/esrb-rating-images/teen.png';
import mature from '../../assets/esrb-rating-images/mature.png';
import adultsOnly from '../../assets/esrb-rating-images/adults-only.png';
import ratingPending from '../../assets/esrb-rating-images/rating-pending.png';
import YoutubePlayer from '../youtube-player/youtube-player.component';

const GameDataModal = ({ finalChoice }) => {
  const { name, rating, background_image, released } = finalChoice;
  const [hidden, setHidden] = useState("hidden");
  const [videoIdArray, setVideoIdArray] = useState([]);
  const [esrbSrc, setEsrbSrc] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [platformList, setPlatformList] = useState([]);
  
  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
    } else {
      setVideoIdArray([]);
      setGenreList([]);
      setPlatformList([]);
      
      const youtubeVideoSearch = () => {
        let youtubeKey = '';
        if (process.env.NODE_ENV === 'development') {
          youtubeKey  = require('../../utils/secret/soccerKey');
        } else if (process.env.NODE_ENV === 'production') {
          youtubeKey = process.env.soccerKey;
        }
        YTSearch({ key: youtubeKey, term: `${finalChoice.name} official video game trailer`}, 
          videos => { videos.map(video => (
            setVideoIdArray(array => [...array, video.id.videoId])
          ))}
        );
      };

      const setEsrbImage = () => {
        
        if (!finalChoice.esrb_rating) {
          return null;
        } else {
          const ratingSlug = finalChoice.esrb_rating.slug;

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
          };
        };
      };

      const getGenreList = () => {
        const genres = finalChoice.genres;

        Object.entries(genres).map(genre => (
          setGenreList(array => [...array, genre[1].name])
        ));
      };

      const getPlatformList = () => {
        const platforms = finalChoice.platforms;

        Object.entries(platforms).map(platform => (
          setPlatformList(array => [...array, platform[1].platform.name])
        ));
      };

      youtubeVideoSearch();
      setEsrbImage();
      getGenreList();
      getPlatformList();
      setHidden("");

    };
  }, [finalChoice]);

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
            !esrbSrc ? null : <img src={esrbSrc} alt="esrb rating" className="esrb-image" />
          }
          <div className="game-rating">
            <h4 className="game-rating-title">GAME RATING</h4>
            <p className="game-rating-score">{rating} / 5</p>
          </div>
        </div>
      </div>
      <div className="game-data-container">
        <div className="list-data">
          <span className="data-title">GENRES</span>
          <p>
            {
              genreList.toString().split(",").join(", ")
            }
          </p>
        </div>
        <div className="game-released">
          <span className="data-title">RELEASED</span>
          <p>{released}</p>
        </div>
        <div className="list-data">
          <span className="data-title">PLATFORMS</span>
          <p>
            {
              platformList.toString().split(",").join(", ")
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDataModal;