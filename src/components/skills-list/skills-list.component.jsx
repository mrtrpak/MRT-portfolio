import React from 'react';

import './skills-list.styles.scss';

import { skills } from './skills.data';

const SkillsList = () => {

  return (
    <div className="skills-list">
      <div className="technical-skills" key={skills.id}>
        <h4 className="technical-title">{skills.title}</h4>
        <ol className="technical-list-container">
          {
            skills.list.map(skill => (
              <li className="skill technical-skill">{skill}</li>
            ))
          }
        </ol>
      </div>


    </div>
  );
};

export default SkillsList;