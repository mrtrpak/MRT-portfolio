import React from 'react';

import './custom-api-button.styles.scss';

const CustomApiButton = ({ btnTitle, onClick }) => (
  <div className="custom-api-button" onClick={onClick}>
    {btnTitle}
  </div>
);

export default CustomApiButton;