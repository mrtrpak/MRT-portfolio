import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';


import './header.styles.scss';

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/">HOME</Link>
      <Link className="option" to="/hobbies">HOBBIES</Link>
      <Link className="option" to="/projects">PROJECTS</Link>
      <Link className="option" to="skills">SKILLS</Link>
      <a className="option option-icon" href="https://github.com/mrtrpak">
        <AiOutlineGithub />
      </a>
      <a className="option option-icon" href="https://www.linkedin.com/in/michael-trpak/">
        <AiFillLinkedin />
      </a>
    </div>
  </div>
);

export default Header;