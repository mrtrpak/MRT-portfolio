import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import bgImage from './assets/mntsBG.jpg';
import Header from './components/header/header.component';
import HomePage from './pages/home/homepage.component';
import HobbiesPage from './pages/hobbies/hobbies.component';
import ProjectsPage from './pages/projects/projects.components';
import SkillsPage from './pages/skills/skills.component';

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
        <Route exact path="/hobbies" component={HobbiesPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/skills" component={SkillsPage} />
      </Switch>
    </div>
  );
};

export default App;