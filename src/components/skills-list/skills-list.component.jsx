import React from 'react';

import './skills-list.styles.scss';

import { skills } from './skills.data';

const SkillsList = () => {
  const techSkills = skills[0];
  const softSkills = skills[1];

  return (
    <div className="skills-list">
      <div className="title-container">
        <h4 className="skill-title">{techSkills.title}</h4>
        <h4 className="skill-title">{softSkills.title}</h4>
      </div>
      <div className="skills-container">
        <ul className="technical-list">
          {
            techSkills.list.map(skill => (
              <li key={skill} className="skill"> - {skill}</li>
            ))
          }
        </ul>
        <ul className="soft-list">
          {
            softSkills.list.map(skill => (
              <li key={skill} className="skill"> - {skill}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;