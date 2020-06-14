/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { ThemeContext } from './ThemedLayout';
// @ts-ignore
import img from '../assets/still.jpg';
// @ts-ignore
import imgDark from '../assets/blue-flowers.jpg';
import React, { useContext } from 'react';
import styled from 'styled-components';

const Hero = () => {
  const theme = useContext(ThemeContext);
  return <Wrapper theme={theme} />;
};

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    & {
      display: block;
      height: 20rem;
      position: relative;
      z-index: -1;
      margin-top: -5rem;
      background: url(${(props) => (props.theme == 'dark' ? imgDark : img)}) center/cover fixed
        no-repeat;
      box-shadow: 0px -59px 95px 58px var(--clr-bg) inset;
    }
  }
`;
export default Hero;
