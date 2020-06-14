import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const UnorderedList = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.ul`
  margin-left: 1rem;
  list-style: none;
  li:before {
    display: inline-block;
    content: '\u25cf';
    color: var(--clr-text-primary-alternate);
    font-weight: bolder;
    width: 1rem;
    margin-left: -1rem;
  }
  li p {
    display: inline;
  }
`;
export default UnorderedList;
