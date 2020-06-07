import React from 'react';
import { Link } from 'gatsby';

interface Props {
  styleClass: string;
  children?: React.ReactNode;
}

const links = ({ styleClass, children }: Props) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to='/' className='page-link'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/posts' className='page-link'>
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to='/posts/about-me' className='page-link'>
          About me
        </Link>
      </li>
    </ul>
  );
};

export default links;
