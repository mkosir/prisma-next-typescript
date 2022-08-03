import { CSSProperties } from 'react';

import styles from './styles.module.css';

type ProgressProps = {
  size?: 'sm' | 'lg';
  style?: CSSProperties;
};

export const Progress = ({ size = 'sm', style }: ProgressProps) => (
  <div
    className={styles.progress}
    style={{ width: size === 'sm' ? '20px' : '30px', height: size === 'sm' ? '20px' : '30px', ...style }}
  ></div>
);
