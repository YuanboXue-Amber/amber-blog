import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div className='line'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.25rem;
  h4 {
    color: var(--clr-text-secondary-alternate);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 500;
    background: var(--clr-bg);
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
  .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1.5px;
    transform: translateY(-50%);
    background: var(--clr-text-secondary-alternate);
    z-index: -1;
  }
`;
export default Title;
