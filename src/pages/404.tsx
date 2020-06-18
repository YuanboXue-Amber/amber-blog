import ThemedLayout from '../components/ThemedLayout';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NotFoundPage = () => (
  <ThemedLayout>
    <Wrapper>
      <div className='page-center'>
        <span>404</span>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link to='/' className='btn center-btn'>
          back home
        </Link>
      </div>
    </Wrapper>
  </ThemedLayout>
);

const Wrapper = styled.section`
  span {
    font-family: var(--ff-logo);
    color: var(--clr-text-primary-alternate);
    font-size: 8rem;
  }
  span,
  h3 {
    display: block;
    width: 60vw;
    text-align: center;
    margin: 4rem auto 2rem auto;
  }
  .btn {
    padding: 0.375rem 0.75rem;
    text-transform: uppercase;
    background: var(--clr-bg);
    color: var(--clr-text-secondary-alternate);
    letter-spacing: var(--spacing);
    font-weight: 400;
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .btn:hover {
    color: var(--clr-bg);
    background: var(--clr-text-primary-alternate);
  }
  .center-btn {
    display: block;
    width: 12rem;
    text-align: center;
    margin: 4rem auto 2rem auto;
  }
`;

export default NotFoundPage;
