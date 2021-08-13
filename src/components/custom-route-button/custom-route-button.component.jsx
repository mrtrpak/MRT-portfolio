import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './custom-route-button.styles.scss';

const CustomRouteButton = ({ route, title }) => (
  <div className="custom-route-button">
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

export default CustomRouteButton;