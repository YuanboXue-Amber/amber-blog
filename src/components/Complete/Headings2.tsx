import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Headings2 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  letter-spacing: var(--spacing);
  font-weight: 700;
  font-family: var(--ff-secondary);
`;
export default Headings2;
