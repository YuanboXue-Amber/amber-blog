import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Code = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.code`
  font-family: var(--ff-code);
  color: var(--clr-text-code);
`;
export default Code;
