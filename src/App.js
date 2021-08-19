import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import bgImage from './assets/mntsBG.jpg';

import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';
import HobbiesPage from './pages/hobbies/hobbies.component';
import ProjectsPage from './pages/projects/projects.components';
import SkillsPage from './pages/skills/skills.component';
import SoccerPage from './pages/soccer/soccer.component';
import GamerPage from './pages/gamer/gamer.component';
import AntiBoredomPage from './pages/anti-boredom/anti-boredom.component';
import TravelPage from './pages/travel/travel.component';

function App() {
  return (
    <div className="app" style={{
      backgroundImage: `url(${bgImage})`,
      height: "100vh",
      width: "100vw",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hobbies" component={HobbiesPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/soccer" component={SoccerPage} />
        <Route exact path="/gamer" component={GamerPage} />
        <Route exact path="/anti-boredom" component={AntiBoredomPage} />
        <Route exact path="/travel" component={TravelPage} />
      </Switch>
    </div>
  );
};

export default App;