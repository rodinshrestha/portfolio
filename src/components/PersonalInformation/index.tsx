import React from 'react';

import Tags from '@/components/Tags';
import AnimatedLetter from '../AnimatedLetters';
import { infoArray, nameArray, designation } from '@/utils/personalInformation';

import styles from './style.module.scss';
const PersonalInformation = () => {
  return (
    <Tags>
      <div className={styles.personal_information_container}>
        <div className={styles.text_zone}>
          <h1>
            {infoArray.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={1 + i} />
            ))}
            <br />

            {nameArray.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={4 + i} />
            ))}
            <br />
            {designation.map((char, i) => (
              <AnimatedLetter char={char} key={i} idx={21 + i} />
            ))}
          </h1>

          <h2>React JS / Next Js / Typescript JS / Node JS / MongoDB </h2>
        </div>
      </div>
    </Tags>
  );
};

export default PersonalInformation;
