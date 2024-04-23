import React from 'react'

const SubNavbar = () => {
  return (
    <>
        <div className='sticky top-0 z-10'>
            <nav className=' p-2 bg-sky-100 '>
                <ul className='flex items-center justify-around text-lg '>
                    <li className=' '><a href="">Painting</a></li>
                    <li><a href="">Wall Art</a></li>
                    <li><a href="">Art Plates</a></li>
                    <li><a href="">Hand Painting</a></li>
                    <li><a href="">Culture</a></li>
                    <li><a href="">Clocks</a></li>
                    <li><a href="">By Rooms</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default SubNavbar
