import React from 'react';
import { Route } from 'react-router-dom';

import './hobbies.styles.scss';

import HobbyButton from "../../components/hobby-button/hobby-button.component";

const HobbiesPage = ({ match }) => (
  <div className="hobbies-page">
    hobbies page
    <Route exact path={`${match.path}`} component={HobbyButton} /> 
  </div>
);

export default HobbiesPage;