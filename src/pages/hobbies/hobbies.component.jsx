import React from 'react';

import './hobbies.styles.scss';

import CustomButton from "../../components/hobby-button/custom-button.component";

const HobbiesPage = () => (
  <div className="hobbies-page">
    <CustomButton title={"soccer"} route={"/"} /> 
  </div>
);

export default HobbiesPage;