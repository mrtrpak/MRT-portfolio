import React from 'react';

import './skills.styles.scss';

import SkillsList from '../../components/skills-list/skills-list.component';
import SkillIcons from '../../components/skill-icons/skill-icons.component';

const SkillsPage = () => (
  <div className="skills-page">
    <SkillsList />
    <SkillIcons />
  </div>
);

export default SkillsPage;