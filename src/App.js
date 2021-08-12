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

function App() {
  return (
    <div className="app" style={{
      backgroundImage: `url(${bgImage})`,
      height: "115vh",
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
      </Switch>
    </div>
  );
};

export default App;