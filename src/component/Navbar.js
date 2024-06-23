

const Navbar = () => {
  return (
      <div className="flex flex-col  py-4 bg-gradient-to-r from-blue-950 via-sky-700 to-blue-950">

         <div className='text-center m-4 py-4 text-sky-50'>
            <h1 className='text-4xl font-Ubuntu'><a href="/"><i class="fa-solid fa-palette"></i>THE <span className="font-Great-Vibes text-7xl">ArtStudio</span></a></h1>
            <p className='text-xs font-Ubuntu' >Unleash Your Creativity. Shop Art, Decorate Homes.</p>
         </div>

          <nav className='my-2 flex justify-between items-center  transition-all text-sky-100 font-Ubuntu  '>
            
              <div className='w-1/2 mx-6  border-solid border-2 border-blue-950 mr-4 flex bg-white rounded-lg  '>
                  <input className='w-full mx-2 bg-blue-50 my-1 p-1 border-transparent border-none focus:outline-none text-blue-950' type="text" name="search" id="search" placeholder='Search for product' />
                  <button className='px-2 bg-sky-950  '><i className="fas fa-search"></i></button>
              </div>
              <ul className='w-1/3 flex mx-4 ml-4 items-center font-bold'>
                  <li className='w-1/3 text-center text-lg'><a className=' py-1 rounded-md hover:text-sky-300 ' href="/">Give Order</a></li>
                  <li className='w-1/3 text-center text-lg'><a className=' py-1 rounded-md hover:text-sky-300  flex justify-center items-center ' href="/login-page"><i class="fa-solid fa-user" ></i> <h1 className="mx-2">Login</h1> </a></li>
                  <li className='w-1/3 text-center text-lg'><a className=' py-1 rounded-md hover:text-sky-300 ' href="/"><i className="fas fa-shopping-cart"></i>Cart</a></li>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;