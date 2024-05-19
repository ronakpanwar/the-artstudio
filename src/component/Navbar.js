const Navbar = () => {
  return (
      <div className=" py-4 bg-gradient-to-r from-blue-950 to-blue-700">
          <nav className=' flex justify-center items-center py-4 transition-all text-sky-300'>
              <div className='w-1/4 text-center'>
                  <h1 className='text-2xl'><a href="/">The ArtStudio</a></h1>
              </div>
              <div className='w-1/2  border-solid border-2 border-blue-950 mr-4 flex bg-white rounded-lg'>
                  <input className='w-full  m-1 p-1 border-transparent border-none focus:outline-none' type="text" name="search" id="search" placeholder='Search for product' />
                  <button className='px-2 bg-sky-950  '><i className="fas fa-search"></i></button>
              </div>
              <ul className='w-1/3 flex mx-4 ml-4 items-center'>
                  <li className='w-1/3 text-center text-lg'><a className='px-2 py-1 rounded-md hover:text-black' href="/">Give Order</a></li>
                  <li className='w-1/3 text-center text-lg'><a className='px-2 py-1 rounded-md hover:text-black  flex justify-center items-center ' href="/login-page"><i class="fa-solid fa-user" ></i> <h1 className="mx-2">Login</h1> </a></li>
                  <li className='w-1/3 text-center text-lg'><a className='px-2 py-1 rounded-md hover:text-black ' href="/"><i className="fas fa-shopping-cart"></i>Cart</a></li>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;