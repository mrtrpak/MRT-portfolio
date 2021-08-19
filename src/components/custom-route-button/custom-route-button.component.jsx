import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './custom-route-button.styles.scss';

const CustomRouteButton = ({ route, title }) => (
  <div className="custom-route-button">
    <Link to={route} className="route-button-link">
      <span className="route-button-title">
        {title.toUpperCase()}
      </span>
      <span className="route-button-icon-container">
        <AiOutlineArrowRight className="route-button-icon" />
      </span>
    </Link>
  </div>
);

export default CustomRouteButton;