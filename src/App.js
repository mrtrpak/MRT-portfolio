import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import bgImage from './assets/mntsBG.jpg';
import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      height: "100vh",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;