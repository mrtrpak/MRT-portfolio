import React from 'react';
import { Route } from 'react-router-dom';

import './hobbies.styles.scss';

const HobbiesPage = ({ match }) => (
  <div className="hobbies-page">
    hobbies page
    <Route exact path={`${match.path}`} component={} /> 
  </div>
);

export default HobbiesPage;