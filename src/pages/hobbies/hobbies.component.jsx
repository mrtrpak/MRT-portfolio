import React from 'react';
import { Link } from 'react-router-dom';

import './hobbies.styles.scss';

import CustomButton from "../../components/custom-button/custom-button.component";

const HobbiesPage = () => (
  <div className="hobbies-page">
    <CustomButton title={"soccer"} route={"/soccer"} /> 
    <CustomButton title={"gamer"} route={"/"} />
  </div>
);

export default HobbiesPage;