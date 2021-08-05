import React from 'react';
import { Route } from 'react-router-dom';

import './hobbies.styles.scss';

import CustomButton from "../../components/hobby-button/custom-button.component";

const HobbiesPage = ({ match }) => (
  <div className="hobbies-page">
    hobbies page
    <Route exact path={`${match.path}`} component={CustomButton} /> 
  </div>
);

export default HobbiesPage;