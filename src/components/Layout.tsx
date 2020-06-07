import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='content'>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
