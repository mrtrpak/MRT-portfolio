import React from 'react';
import { FaReact, FaCss3Alt, FaBootstrap, FaFileWord } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiMysql, SiMongodb, SiMaterialUi, SiHeroku, SiRedux, SiFirebase } from 'react-icons/si';
import { DiJqueryUiLogo } from 'react-icons/di';

import './skill-icons.styles.scss';

const SkillIcons = () => (
  <div className="skill-icons-container">
    <div className="skill-icons">
      <FaReact />
      <FaCss3Alt />
      <IoLogoJavascript />
      <SiMysql />
      <IoLogoNodejs />
      <DiJqueryUiLogo />
      <SiRedux />
    </div>
    <div className="skill-icons">
      <FaBootstrap />
      <SiMaterialUi />
      <SiMongodb />
      <SiFirebase />
      <SiHeroku />
      <FaFileWord />
    </div>
  </div>
);

export default SkillIcons;