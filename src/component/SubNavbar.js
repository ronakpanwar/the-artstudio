import React from 'react'

const SubNavbar = () => {
  return (
    <>
        <div className='sticky top-0 z-10'>
            <nav className=' p-1 bg-sky-100 '>
                <ul className='flex items-center justify-around text-lg '>
                <li className='justify-between group transition-all duration-150 ease-in-out  hover:text-blue-950 '><a href="/">Home</a>
                    <div className='w-full rounded-2xl p-0.5 group-hover:bg-blue-950 transition ease-in-out duration-300 '></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out  hover:text-blue-950 '><a href="/painting">Painting</a>
                    <div className='w-full rounded-2xl p-0.5 group-hover:bg-blue-950 transition ease-in-out duration-300 '></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out hover:text-blue-950'><a href="/wall-art">Wall Art</a>
                    <div className='w-full rounded-2xl py-0.5 group-hover:bg-blue-950 transition-all duration-300 ease-in-out'></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out hover:text-blue-950'><a href="/art-plate">Art Plates</a>
                    <div className='w-full rounded-2xl py-0.5 group-hover:bg-blue-950 transition-all duration-300 ease-in-out'></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out hover:text-blue-950 '><a href="/hand-painting">Hand Painting</a>
                    <div className='w-full rounded-2xl py-0.5 group-hover:bg-blue-950 transition-all duration-300 ease-in-out'></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out hover:text-blue-950'><a href="/culture">Culture</a>
                    <div className='w-full rounded-2xl py-0.5 group-hover:bg-blue-950 transition-all duration-300 ease-in-out'></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out hover:text-blue-950'><a href="/clocks">Clocks</a>
                    <div className='w-full rounded-2xl py-0.5 group-hover:bg-blue-950 transition-all duration-300 ease-in-out'></div></li>
                    <li className='justify-between group transition-all duration-150 ease-in-out hover:text-blue-950'><a href="/rooms">By Rooms</a>
                    <div className='w-full rounded-2xl py-0.5 group-hover:bg-blue-950 transition-all duration-300 ease-in-out'></div></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default SubNavbar
