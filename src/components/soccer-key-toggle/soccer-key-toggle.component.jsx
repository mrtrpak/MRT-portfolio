import React, { useState } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

import './soccer-key-toggle.styles.scss';

const SoccerKeyToggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="soccer-key-toggle">
      {
        !toggle 
        ? <BsToggleOff onClick={() => setToggle(true)} /> 
        : <BsToggleOn onClick={() => setToggle(false)} />
      }
    </div>
  );
};

export default SoccerKeyToggle;