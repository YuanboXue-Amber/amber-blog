/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { defaultTheme } from './ToggleTheme';
// @ts-ignore
import img from '../assets/still.jpg';
// @ts-ignore
import imgDark from '../assets/blue-flowers.jpg';
import styled from 'styled-components';

export default styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    & {
      display: block;
      height: 20rem;
      position: relative;
      z-index: -1;
      margin-top: -5rem;
      background: url(${(localStorage.getItem('theme') || defaultTheme) == 'dark' ? imgDark : img})
        center/cover fixed no-repeat;
      box-shadow: 0px -59px 95px 58px var(--clr-bg) inset;
    }
  }
`;
