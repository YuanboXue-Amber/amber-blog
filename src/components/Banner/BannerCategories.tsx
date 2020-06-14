import Title from './Title';
import Categories from '../Categories';
import React from 'react';
import styled from 'styled-components';

const BannerCategories = () => {
  return (
    <Wrapper>
      <Title title='categories' />
      <Categories />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: var(--clr-text-secondary);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-text-primary-alternate);
    color: var(--clr-bg);
  }
`;

export default BannerCategories;
