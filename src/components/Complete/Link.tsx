import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  href: string;
  dataHover?: string;
}

const Link = ({ children, href, dataHover }: Props) => {
  return (
    <Wrapper href={href} data-hover={dataHover}>
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.a`
  display: inline-block;
  text-decoration: none;
  position: relative;
  color: var(--clr-text-primary-alternate);

  &:visited,
  &:hover,
  &:active {
    color: var(--clr-text-primary-alternate);
  }

  &::after {
    width: 0%;
    height: 2px;
    display: block;
    content: ' ';
    transition: var(--transition);
  }

  &:hover {
    font-style: italic;
  }

  &:hover::after {
    width: 100%;
    height: 2px;
    display: block;
    position: absolute;
    content: ' ';
    background-color: var(--clr-background-alternate);
  }
`;
export default Link;
