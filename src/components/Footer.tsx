import SocialLinks from '../constants/socialLinks';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <SocialLinks styleClass='footer-icons' />
        <h4>&copy;{new Date().getFullYear()}. All rights reserved.</h4>
      </div>
    </footer>
  );
};

export default Footer;
