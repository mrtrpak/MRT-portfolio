import React, { useState } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

import './soccer-key-toggle.styles.scss';

import SoccerKeyModal from '../soccer-key-modal/soccer-key-modal.component';

const SoccerKeyToggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="soccer-key-toggle">
      <p className="key-title">KEY</p>
      {
        !toggle 
        ? <BsToggleOff className="toggle-icon" onClick={() => setToggle(true)} /> 
        : <BsToggleOn className="toggle-icon" onClick={() => setToggle(false)} />
      }
      { !toggle ? null : <SoccerKeyModal /> }
      <p className="key-title">TOGGLE</p>
    </div>
  );
};

export default SoccerKeyToggle;