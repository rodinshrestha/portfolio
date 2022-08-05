import React from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';
import Tags from '../Tags';
import AnimatedLetter from '../AnimatedLetters';

const HeroSection = () => {
  const [letterClass, setLetterClass] = React.useState('text_animate');

  const nameArray = ['R', 'o', 'd', 'i', 'n', ' ', 'S', 'h', 'r', 'e', 's', 't', 'h', 'a'];
  const designation = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       setLetterClass('text-animate-hover');
  //     });
  //   }, []);

  return (
    <Tags>
      <div className={styles.hero_section}>
        <div className={styles.text_zone}>
          <h1>
            Hi,
            <br />
            I'm <AnimatedLetter letterClass={letterClass} strArray={nameArray} idx={15} />
            {/* I'm Rodin Shrestha */}
            <br />
            <AnimatedLetter letterClass={letterClass} strArray={designation} idx={15} />
          </h1>

          <h2>Frontend Developer / React JS / Next Js</h2>
        </div>
      </div>
    </Tags>
  );
};

export default HeroSection;
