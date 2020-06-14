import ThemedLayout from '../components/ThemedLayout';
import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <ThemedLayout>
    <section className='error-page'>
      <div className='page-center'>
        <span>404</span>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
    </section>
  </ThemedLayout>
);

export default NotFoundPage;
