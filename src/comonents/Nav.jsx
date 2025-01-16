import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi';

function Nav() {


  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }
  function closeMenu() {
    setToggle(false);
  }
  return (
    <>
      <div className='flex itms-center justify-between p-10 lg:flex-row'>
        <div>
          <a href="#" className='text-white fonst-mono text-3xl tracking-wider flex items-center'> <CgNametag />AUCODE</a>
        </div>
        <div className='space-x-4 '>
          <div className='ssm:hidden lg:block space-x-2'>
            <a href="#" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>Skills</a>
            <a href="#" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>Projects</a>
            <a href="#" className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>About Me</a>
          </div>
        </div>
        <div className='ssm:block lg:hidden'>
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer' />
          )
          }

        </div>
      </div>


      <div>
        {toggle ? (<div className='flex justify-between text-white '>
          <ul>
            <li className='test-white hover:bg-indigo-800 text-xl rounded-full px-5 py-2 mb-2 cursor-pointer'>
              Skills
            </li>
            <li className='test-white hover:bg-indigo-800 text-xl rounded-full px-5 py-2 mb-2 cursor-pointer'>
              Projects
            </li>
            <li className='test-white hover:bg-indigo-800 text-xl rounded-full px-5 py-2 mb-2 cursor-pointer'>
              About Me
            </li>
          </ul>
        </div>):(
          <div></div>
        )}
        
      </div>
    </>
  )
}

export default Nav
