import React from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

import './dropdown.styles.scss';

import profilePic from '../../assets/profile.jpg';

const Dropwdown = () => (
  <div className="dropdown">
    <img src={profilePic} alt="profile" className="profilePic" />
    <div className="icons">
      <AiFillLinkedin className="icon" />
      <AiOutlineGithub className="icon" />
    </div>
  </div>
);

export default Dropwdown;