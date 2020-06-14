/* eslint-disable no-undef */
import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  styleClass: string;
}

export const defaultTheme = 'light';

const ToggleTheme = ({ styleClass }: Props) => {
  // eslint-disable-next-line no-undef
  const [currTheme, setCurrTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  const onChange = () => {
    if (currTheme == 'dark') {
      setCurrTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setCurrTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <Wrapper className={styleClass}>
      <input type='checkbox' checked={currTheme == 'dark'} onChange={onChange} />
      <span className='switch__toggle'></span>
    </Wrapper>
  );
};

// This beautiful toggle botton is copied from https://codepen.io/garyb1/pen/WNQKZOr
const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  margin: 5px 0;
  position: relative;

  .switch__toggle {
    cursor: pointer;
  }

  [type='checkbox'] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .switch__toggle::before {
    border: 0.5rem solid #eef3f6;
  }

  /* default states */

  .switch__toggle::before,
  .switch__toggle::after {
    content: '';
    display: block;
    margin: 0 3px;
    transition: var(--transition);
  }

  .switch__toggle::before {
    height: 4em;
    width: 7em;
    border-radius: 999px;
    opacity: 0.6;
  }

  .switch__toggle::after {
    position: absolute;
    top: 50%;
    transform: translate(1rem, -50%);
    height: 2.5em;
    width: 2.5em;
    border-radius: 50%;
    background: #fff;
  }

  /* checked states */

  [type='checkbox'] + .switch__toggle::before {
    background: #9cecfb; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom right,
      #0052d4,
      #65c7f7,
      #9cecfb
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom right,
      #0052d4,
      #65c7f7,
      #9cecfb
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  [type='checkbox']:checked + .switch__toggle::before {
    background: #4b6cb7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to top left,
      #021b79,
      #9cecfb
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to top left,
      #021b79,
      #9cecfb
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  /* box shadows by Nathan Garthright on https://dribbble.com/shots/4581326-Night-Mode-Toggle */
  [type='checkbox'] + .switch__toggle::after {
    box-shadow: 0 0 0.25em 0.0625em #fbee8d, 0 0 2em 0 #ffeb3b, inset -0.25em -0.25em 0 0 #fbee8e,
      inset -0.3125em -0.3125em 0 0.625em #fff5b2;
  }

  [type='checkbox']:checked + .switch__toggle::after {
    background: transparent;
    box-shadow: inset -0.1875em -0.1875em 0 0 #fbe7ef, inset -0.5625em -0.5625em 0 0 #fffff7;
  }

  [type='checkbox']:checked + .switch__toggle::after {
    transform: translate(150%, -50%);
  }
`;

export default ToggleTheme;
