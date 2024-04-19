import React from 'react'

function Navbar() {
  return (
   <>
    <nav className=' flex p-4 bg-orange-600 '>
    <div className='basis-1/4'>
        <h1><a href="">
            The ArtStudio
        </a></h1>
    </div>
    <div className='basis-1/2 border-solid w-20 mr-4 flex'>
        <input className='w-4/5 p-1 border-none' type="search" name="search" id="search" placeholder='Search for product'  />
        <button>search</button>
    </div>
        <ul className='flex basis-1/2 ml-4 '>
          <li className='basis-1/3 '><a href="">Give Order</a></li>
          <li className='basis-1/3'><a href="">Login</a></li>
          <li className='basis-1/3'><a href="">Cart</a></li>
          
        </ul>
    </nav>
   </>
  )
}

export default Navbar
