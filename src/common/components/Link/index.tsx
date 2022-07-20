import LinkNext, { LinkProps as LinkNextProps } from 'next/link';
import { ReactNode } from 'react';

import styles from './link.module.css';

export type LinkProps = {
  children: ReactNode;
  isUnstyled?: boolean;
} & LinkNextProps;

export const Link = ({ children, isUnstyled = false, ...linkNextProps }: LinkProps) => (
  <LinkNext {...linkNextProps}>
    <a className={isUnstyled ? styles.linkUnstyled : styles.link}>{children}</a>
  </LinkNext>
);
