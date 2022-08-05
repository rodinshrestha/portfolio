import clsx from 'clsx';
import React from 'react';

import styles from './style.module.scss';
// import './style.scss';

const AnimatedLetter = ({ letterClass, strArray, idx }: any) => {
  return (
    <span>
      {strArray.map((char: any, i: number) => (
        <span key={i} className={`${styles[letterClass]} _${i + idx} text-animate-hover`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetter;
