import React from 'react';
import clsx from 'clsx';

import { convertSpecialString } from '@/utils/convertSpecialString';

import styles from './style.module.scss';

interface IProps {
  char: string;
  idx: number;
  // renderClass: string;
}

const AnimatedLetter = ({ char, idx }: IProps) => {
  const [mouseEntered, setMouseEntered] = React.useState(false);
  const [state, setState] = React.useState('initial_animate');

  return (
    <span
      className={clsx(styles.text_animate, `${styles['_' + idx]}`, styles[state], {
        text_animation: mouseEntered
      })}
      onMouseEnter={() => {
        setMouseEntered(true);
        setState('');
      }}
      onMouseLeave={() => setTimeout(() => setMouseEntered(false), 500)}>
      {convertSpecialString(char)}
    </span>
  );
};

export default AnimatedLetter;
