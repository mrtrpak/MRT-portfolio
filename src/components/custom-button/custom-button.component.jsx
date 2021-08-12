import React from 'react';
import { Link } from 'react-router-dom';

import './custom-button.styles.scss';

const CustomButton = ({ route, title }) => (
  <div className="custom-button">
    <Link to={route}>
      <span className="custom-button-title">
        {title.toUpperCase()}
      </span>
    </Link>
  </div>

);

export default CustomButton;