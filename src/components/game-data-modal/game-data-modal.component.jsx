import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

import './game-data-modal.styles.scss';

import { youtubeKey } from '../../utils/secret';

const GameDataModal = props => {
  const [hidden, setHidden] = useState("hidden");

  const { finalChoice } = props;
  
  useEffect(() => {
    if (Object.keys(finalChoice).length === 0) {
      setHidden("hidden");
      console.log(finalChoice === true, "use effect test");
    } else {
      const { name } = finalChoice;
      const youtubeVideoSearch = () => {
        YTSearch({ key: youtubeKey, term: `${name} official trailer`}, 
          videos => {
            console.log(videos);
          }
        );
      };

      setHidden("");
      youtubeVideoSearch();
    }
  }, [finalChoice]);
  
  return (
    <div className="game-data-modal" hidden={hidden}>
      <h4 className="game-data-title">{finalChoice.name}</h4>
    </div>
  );
};

export default GameDataModal;