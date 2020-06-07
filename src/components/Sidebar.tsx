import Categories from './Categories';
import Links from '../constants/links';
import React from 'react';
import { IoMdClose } from 'react-icons/io';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar = ({ isOpen, toggle }: Props) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
      <button className='close-btn' onClick={toggle}>
        <IoMdClose />
      </button>
      <div className='sidebar-container'>
        <Links styleClass='sidebar-links'>
          <Categories />
        </Links>
      </div>
    </aside>
  );
};

export default Sidebar;
