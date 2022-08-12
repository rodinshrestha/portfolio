import React from 'react';
import clsx from 'clsx';

import { convertSpecialString } from '@/utils/convertSpecialString';

import styles from './style.module.scss';

interface IProps {
  char: string;
  idx: number;
  renderClass: string;
}

const AnimatedLetter = ({ char, idx, renderClass }: IProps) => {
  const [mouseEntered, setMouseEntered] = React.useState(false);

  return (
    <span
      className={clsx(styles.text_animate, `${styles['_' + idx]}`, styles[renderClass], {
        text_animation: mouseEntered
      })}
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setTimeout(() => setMouseEntered(false), 500)}>
      {convertSpecialString(char)}
    </span>
  );
};

export default AnimatedLetter;
