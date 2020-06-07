import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import React from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';

interface Props {
  toggle: () => void;
}

const Navbar = ({ toggle }: Props) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            Amber Blog
          </Link>
          <button className='toggle-btn' onClick={toggle}>
            <FaBars></FaBars>
          </button>
        </div>
        <Links styleClass='nav-links' />
        <SocialLinks styleClass='nav-icons' />
      </div>
    </nav>
  );
};

export default Navbar;
