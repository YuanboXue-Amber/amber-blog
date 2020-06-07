// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import img from '../assets/still.jpg';
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
      background: url(${img}) center/cover fixed no-repeat;
      box-shadow: 0px -59px 95px 58px white inset;
    }
  }
`;
