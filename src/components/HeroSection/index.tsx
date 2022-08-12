import React from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import Tags from '../Tags';
import AnimatedLetter from '../AnimatedLetters';

const HeroSection = () => {
  const infoArray = ['H', 'i', ','];
  const nameArray = [
    'I',
    '#m',
    '',
    'R',
    'o',
    'd',
    'i',
    'n',
    ' ',
    'S',
    'h',
    'r',
    'e',
    's',
    't',
    'h',
    'a'
  ];
  const designation = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r'
  ];

  return (
    <Tags>
      <div className={styles.hero_section}>
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

          <h2>React JS / Next Js / Typescript JS / Node JS </h2>
        </div>
      </div>
    </Tags>
  );
};

export default HeroSection;