import clsx from 'clsx';
import React from 'react';

import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
}

const Tags = ({ children }: Props) => {
  return (
    <div className={styles.tag_container}>
      <span className={clsx(styles.tags, styles.top_tags)}>
        <span>&lt;html&gt;</span>
        <br />
        <span>
          &lt;head \&gt;
          <br />
        </span>
        &lt;body&gt;
      </span>

      {children}

      <span className={clsx(styles.tags, styles.bottom_tags)}>
        &lt;/ body&gt;
        <br />
        <span className={clsx(styles.bottom_tag_html)}>&lt;/html&gt;</span>
      </span>
    </div>
  );
};

export default Tags;
