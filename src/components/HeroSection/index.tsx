import React from 'react';
import styles from './style.module.scss';
// import Tags from '../Tags';
// import AnimatedLetter from '../AnimatedLetters';
import { Container } from '@chakra-ui/react';

import PersonalInformation from '@/components/PersonalInformation';
import SkillShowCase from '@/components/SkillShowCase';
import Navbar from '../NavBar';

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <Container className={`${styles.hero_container} my_container`} maxW="1920px">
        <div className={styles.personal_information_container}>
          <PersonalInformation />
        </div>
        <div className={styles.skill_show_case_container}>
          <SkillShowCase />
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
