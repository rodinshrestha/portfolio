import React from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';

const SkillShowCase = () => {
  return (
    <>
      <div className={styles.cube_container}>
        <div className={clsx(styles.cube_skill_face, styles.cube_skill_face_1)}>
          <img src="/assets/images/skills/next.png" alt="asd" />
        </div>

        <div className={clsx(styles.cube_skill_face, styles.cube_skill_face_2)}>
          <img src="/assets/images/skills/react.png" alt="asd" />
        </div>

        <div className={clsx(styles.cube_skill_face, styles.cube_skill_face_3)}>
          <img src="/assets/images/skills/node.png" alt="asd" />
        </div>

        <div className={clsx(styles.cube_skill_face, styles.cube_skill_face_4)}>
          <img src="/assets/images/skills/typescript.png" alt="asd" />
        </div>

        <div className={clsx(styles.cube_skill_face, styles.cube_skill_face_5)}>
          <img src="/assets/images/skills/mongoDB.png" alt="asd" />
        </div>

        <div className={clsx(styles.cube_skill_face, styles.cube_skill_face_6)}>
          <img src="/assets/images/skills/css.png" alt="asd" />
        </div>
      </div>

      <div className={clsx(styles.cube_shadow)} />
    </>
  );
};

export default SkillShowCase;
