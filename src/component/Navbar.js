const Navbar = () => {
  return (
      <div className=" py-4 bg-sky-950">
          <nav className=' flex justify-center items-center py-4 transition-all text-sky-300'>
              <div className='w-1/4 text-center'>
                  <h1 className='text-2xl'><a href="/">The ArtStudio</a></h1>
              </div>
              <div className='w-1/2 border-solid border-white mr-4 flex bg-white rounded-md'>
                  <input className='w-full m-1 p-1 border-transparent' type="text" name="search" id="search" placeholder='Search for product' />
                  <button className='px-2 bg-sky-950'><i className="fas fa-search"></i></button>
              </div>
              <ul className='w-1/3 flex mx-4 ml-4'>
                  <li className='w-1/3 text-center text-lg'><a className='px-2 py-1 rounded-md hover:bg-white' href="/">Give Order</a></li>
                  <li className='w-1/3 text-center text-lg'><a className='px-2 py-1 rounded-md hover:bg-white' href="/">Login</a></li>
                  <li className='w-1/3 text-center text-lg'><a className='px-2 py-1 rounded-md hover:bg-white' href="/"><i className="fas fa-shopping-cart"></i>Cart</a></li>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;