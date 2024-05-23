import React from 'react';
import './css/styles.css'

const SubNavbar = () => {
  return (
    <div className='sticky top-0 z-10'>
      <nav className='p-1 bg-sky-100'>
        <ul className='flex items-center justify-around text-lg'>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/">Home</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950 ' ></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/painting">Painting</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950 '></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/wall-art">Wall Art</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950'></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/art-plate">Art Plates</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950'></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/hand-painting">Hand Painting</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950'></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/culture">Culture</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950'></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/clocks">Clocks</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950'></div>
          </li>
          <li className='group transition-all duration-150 ease-in-out hover:text-blue-950  font-bold'>
            <a href="/rooms">By Rooms</a>
            <div className='w-full rounded-2xl p-0.5  group-hover:animate-widthAni group-hover:bg-blue-950'></div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubNavbar;