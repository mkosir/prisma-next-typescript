import LinkNext, { LinkProps as LinkNextProps } from 'next/link';
import { ReactNode } from 'react';

export type LinkProps = {
  children: ReactNode;
  linkNextProps: LinkNextProps;
  isUnStyled?: boolean;
};

export const Link = ({ children, linkNextProps, isUnStyled = false }: LinkProps) => (
  <LinkNext {...linkNextProps}>
    <a style={isUnStyled ? { textDecoration: 'none', color: 'inherit' } : undefined}>{children}</a>
  </LinkNext>
);
