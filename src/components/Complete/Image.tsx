import React from 'react';
import styled from 'styled-components';

interface Props {
  src: any;
  alt: string;
}

const Image = ({ src, alt }: Props) => {
  return <Wrapper src={src} alt={alt} />;
};
const Wrapper = styled.img`
  border-radius: 10px;
  height: 20rem;
  max-width: 100%;
`;
export default Image;
