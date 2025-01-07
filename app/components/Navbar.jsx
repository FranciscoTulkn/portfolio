'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, []);

  return (
    <>
    <div className='fixed top-0 right-0  w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt='' className='w-full' priority={true} />
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}` }>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' width={50} height={50} alt="logo william" />
        </a>

        <ul className={`hidden md:flex lg:gap-8 items-center gap-6 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}  `}>
          <li><a className='font-ovo' href="#top" >Home</a></li>
          <li><a className='font-ovo' href="#about" >About me</a></li>
          <li><a className='font-ovo' href="#services" >Services</a></li>
          <li><a className='font-ovo' href="#work" >My work</a></li>
          <li><a className='font-ovo' href="#contact" >Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={ isDarkMode ? assets.sun_icon : assets.moon_icon} className='w-6' alt='dark mode' />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50'>
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='arrow contact' /></a>

          <button className='block md:hidden ml-3' onClick={openSideMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} className='w-6' alt='menu' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white '>

          <div className='absolute top-6 right-6' onClick={closeSideMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} className='w-5 cursor-pointer' alt='close menu' />
          </div>

          <li><a className='font-ovo' onClick={closeSideMenu} href="#top" >Home</a></li>
          <li><a className='font-ovo' onClick={closeSideMenu} href="#about" >About me</a></li>
          <li><a className='font-ovo' onClick={closeSideMenu} href="#services" >Services</a></li>
          <li><a className='font-ovo' onClick={closeSideMenu} href="#work" >My work</a></li>
          <li><a className='font-ovo' onClick={closeSideMenu} href="#contact" >Contact me</a></li>
        </ul>
      </nav>
      
    </>
  )
}
