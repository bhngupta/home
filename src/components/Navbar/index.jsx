import React, { useState } from 'react';
import BGText from '../../assets/BhanuGupta_text.png';

import { Link } from 'react-scroll';
import { IconMailForward } from '@tabler/icons-react';

const Navbar = () => {
  const [mm, setMm] = useState(false);

  const handleClick = () => {
    setMm(!mm);
  };

  return (
    <div className="bg-transparent fixed w-full h-[60px] flex justify-between items-center px-0 pt-5 pr-6 text--navy-blue z-10">
      <Link to="home" smooth={true}>
        <img
          className="cursor-pointer"
          src={BGText}
          alt="logo image"
          style={{ width: '150px', height: '80px', marginBottom: '5px' }}
        />
      </Link>

      {/* menu */}
      <ul className="hidden md:flex space-x-2">
        <li>
          <a href="mailto:bhanuvkgupta@gmail.com?subject=%F0%9F%A4%98Hi%20Bhanu,%20I%20would%20like%20to%20hire%20you">
            <div className="flex text-my-blue items-center group transition-colors duration-300 hover:text-[#B08D57]">
              <IconMailForward
                stroke={2}
                className="m-2 text-my-blue text-xl transition-colors duration-300 group-hover:text-[#B08D57] font-bitter"
              />{' '}
              Hire Me
            </div>
          </a>
        </li>
      </ul>

      {/* mobile menu */}
      <ul
        className={
          mm
            ? 'fixed top-10 right-0 w-[40vw] h-[40vh] bg-[#F2EDE4] flex flex-col justify-center items-center shadow-lg transition-all duration-300'
            : 'hidden'
        }
      >
        <li className="py-4 text-xl md:text-2xl transition-colors duration-300 hover:text-[#B08D57]">
          <Link to="about" smooth={true} onClick={handleClick}>
            <div className="flex">
              <IconMailForward stroke={2} className="mr-1" /> About
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
