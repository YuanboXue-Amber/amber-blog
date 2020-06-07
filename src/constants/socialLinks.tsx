import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

interface Props {
  styleClass: string;
}

const socialLinks = ({ styleClass }: Props) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href='https://www.linkedin.com/in/yuanboxue/'>
          <FaLinkedin className='social-icon linkedin-icon'></FaLinkedin>
        </a>
      </li>
      <li>
        <a href='https://github.com/YuanboXue-Amber'>
          <FaGithubSquare className='social-icon github-icon'></FaGithubSquare>
        </a>
      </li>
    </ul>
  );
};

export default socialLinks;
