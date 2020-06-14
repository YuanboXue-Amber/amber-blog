import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Code = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.code`
  font-family: 'Courier New', Courier, monospace;
  color: var(--clr-bright-pumpkin);
`;
export default Code;
