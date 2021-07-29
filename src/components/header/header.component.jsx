import React from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';

import './header.styles.scss';

import Dropdown from '../dropdown/dropdown.component';

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/">HOME</Link>
      <Link className="option" to="/hobbies">HOBBIES</Link>
      <Link className="option" to="/projects">PROJECTS</Link>
      <Link className="option" to="skills">SKILLS</Link>
      <GoThreeBars className="dropdownIcon" />
      <Dropdown />
    </div>
  </div>
);

export default Header;