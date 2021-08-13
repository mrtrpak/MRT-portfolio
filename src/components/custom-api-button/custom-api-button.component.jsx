import React, { useState } from 'react';

import './custom-api-button.styles.scss';

const CustomApiButton = ({btnTitle, onClick}) => {

  return (
    <div className="custom-api-button" onClick={onClick}>
      {btnTitle}
    </div>
  );
};

export default CustomApiButton;