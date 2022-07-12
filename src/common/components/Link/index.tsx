import LinkNext, { LinkProps as LinkNextProps } from 'next/link';
import { ReactNode } from 'react';

export type LinkProps = {
  children: ReactNode;
  isUnstyled?: boolean;
} & LinkNextProps;

export const Link = ({ children, isUnstyled = false, ...linkNextProps }: LinkProps) => (
  <LinkNext {...linkNextProps}>
    <a style={isUnstyled ? { textDecoration: 'none', color: 'inherit' } : undefined}>{children}</a>
  </LinkNext>
);
