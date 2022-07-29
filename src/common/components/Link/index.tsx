import LinkNext, { LinkProps as LinkNextProps } from 'next/link';
import { CSSProperties, ReactNode } from 'react';

import styles from './styles.module.css';

type LinkProps = {
  children: ReactNode;
  isUnstyled?: boolean;
  style?: CSSProperties;
} & LinkNextProps;

export const Link = ({ children, isUnstyled = false, style, ...linkNextProps }: LinkProps) => (
  <LinkNext {...linkNextProps}>
    <a className={isUnstyled ? styles.linkUnstyled : styles.link} style={style}>
      {children}
    </a>
  </LinkNext>
);
