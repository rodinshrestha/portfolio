import React from 'react';
import styles from './style.module.scss';
// import Tags from '../Tags';
// import AnimatedLetter from '../AnimatedLetters';

import PersonalInformation from '@/components/PersonalInformation';
import SkillShowCase from '@/components/SkillShowCase';

const HeroSection = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.personal_information_container}>
        <PersonalInformation />
      </div>
      <div className={styles.skill_show_case_container}>
        <SkillShowCase />
      </div>
    </div>
  );
};

export default HeroSection;
