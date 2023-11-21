import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { FaDev } from 'react-icons/fa';
import { MdCastForEducation } from 'react-icons/md';
import { BsClipboardData, BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full items-center bg-black h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white'>

        <Link to='home' offset={-200} activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <MdCastForEducation />
        </Link>

        <Link to='skills' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <FaDev />
        </Link>

        <Link to='projects' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BsClipboardData />
        </Link>
       
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] flex items-center justify-center'>
          <BsChatSquare/>
        </Link>

      </div>
    </div>
  </nav>
};

export default Nav;
