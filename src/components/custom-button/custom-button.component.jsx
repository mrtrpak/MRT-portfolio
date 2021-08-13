import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './custom-button.styles.scss';

const CustomButton = ({ route, title }) => (
  <div className="custom-button">
    <Link to={route} className="custom-button-link">
      <span className="custom-button-title">
        {title.toUpperCase()}
      </span>
      <span className="custom-button-icon-container">
        <AiOutlineArrowRight className="custom-button-icon" />
      </span>
    </Link>
  </div>

);

export default CustomButton;