import React from 'react';
import Tilt from 'react-tilt';

import './skills.styles.scss';

import SkillsList from '../../components/skills-list/skills-list.component';
import SkillIcons from '../../components/skill-icons/skill-icons.component';

const SkillsPage = () => (
  <Tilt className=" Tilt skills-page"
    options={{ max: 35, speed: 30, perspective: 700 }}
  >
    <SkillsList />
    <SkillIcons />
  </Tilt>
);

export default SkillsPage;