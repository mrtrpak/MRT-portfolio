import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import bgImage from './assets/mntsBG.jpg';
import HomePage from './pages/home/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <div style={{
          backgroundImage: `url(${bgImage})`,
          height: "100vh",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <Route exact path="/" component={HomePage} />
        </div>
      </Switch>
    </div>
  );
};

export default App;