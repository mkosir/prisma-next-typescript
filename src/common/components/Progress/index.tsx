import { CSSProperties } from 'react';

import styles from './styles.module.css';

type ProgressProps = {
  size?: 'sm' | 'lg';
  style?: CSSProperties;
};

export const Progress = ({ size = 'sm', style }: ProgressProps) => (
  <div
    className={styles.progress}
    style={{ width: size === 'sm' ? '15px' : '20px', height: size === 'sm' ? '15px' : '20px', ...style }}
  ></div>
);
