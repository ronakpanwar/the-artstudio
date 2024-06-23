import React from 'react'

const Header = () => {

    const shop = [
        { path: '/painting', name: 'Painting' },
        { path: '/wall-art', name: 'Wall Art' },
        { path: '/art-plate', name: 'Art Plate' },
        { path: '/hand-painting', name: 'Hand painting' },
        { path: '/culture', name: 'Culture' },
        { path: '/clocks', name: 'Clocks' },
        { path: '/rooms', name: 'Rooms' },
        { path: '/login-page', name: 'Login page' },
    ]

    const business = [
        { path: '/', name: 'Join As Artist' },
        { path: '/', name: 'Give Order to Create Arts' },
        { path: '/', name: 'For Architects & Designers' },
        { path: '/login-page', name: 'Contect Us' },

    ]

    const icons = [
        { name: '<i class="fa-brands fa-instagram"></i>' },
        { name: '<i class="fa-brands fa-instagram"></i>' },
        { name: '<i class="fa-brands fa-instagram"></i>' },
    ]

    return (
        <div className='p-2 bg-gradient-to-r text-sky-50 from-blue-950 via-sky-700 to-blue-950 font-Ubuntu'>
            <div className='flex justify-evenly m-6'>
                <div className='flex flex-col items-center '>
                    <p className=''><i class="fa-solid fa-box-open"></i></p>
                    <h1>Free delivery</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p><i class="fa-solid fa-truck"></i></p>
                    <h1>Cash on delivery</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p><i class="fa-solid fa-handshake"></i></p>
                    <h1>Premium Materials</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p><i class="fa-solid fa-check"></i></p>
                    <h1>Best Art Works</h1>
                </div>
            </div>

            <div className='p-px my-px w-full bg-white opacity-10'></div>

            <div className='m-6 flex '>
                <div className='flex  w-3/4'>
                    <div className='m-4 '>
                        <h1 className='font-bold font-sky-50 '>SHOP</h1>
                        {
                            shop.map((e, key) => (
                                <a className=' opacity-60  hover:underline hover:decoration-solid ' key={key} href={e.path}>
                                    <p>{e.name}</p>
                                </a>
                            ))
                        }

                    </div>
                    <div className='m-4'>
                        <h1 className='font-bold font-sky-50'>BUSINESS</h1>
                        {
                            business.map((e, key) => (
                                <a className=' opacity-60  hover:underline hover:decoration-solid ' key={key} href={e.path}>
                                    <p>{e.name}</p>
                                </a>
                            ))
                        }
                    </div>
                    <div className='m-4'>
                        <h1 className='font-bold font-sky-50'>CONTACT ADDRESS</h1>
                        <p className='opacity-50'>Lorem ipsum dolor sit.</p>
                        <p className='opacity-50'>Lorem ipsum dolor sit.</p>
                        <p className='opacity-50'>Call Us-91-6263715063</p>
                        <p className='opacity-50'>Email-ronakpanwar18@gmail.com</p>
                        <div className='flex justify-left my-5 '>

                            <a className='text-2xl hover:text-sky-300 mx-2' href=""><i class="fa-brands fa-instagram"></i></a>
                            <a className='text-2xl hover:text-sky-300 mx-2' href=""><i class="fa-brands fa-twitter"></i></a>
                            <a className='text-2xl hover:text-sky-300 mx-2' href=""><i class="fa-brands fa-facebook"></i></a>

                        </div>
                    </div>
                </div>
                <div className='m-4'>
                    <h1 className='text-xl font-bold'>JOIN OUR MAILING LIST</h1>
                    <p className='text-ms opacity-50'>Sign up for exclusive offers, original stories, events and more</p>
                    <input className='px-4 py-2 text-lg focus:outline-none text-black rounded-md w-80' type="text" name='takeEmail' placeholder='Enter Your Email' />
                    <button className='px-2 py-1 bg-sky-300 mx-1 my-1 rounded-md text-black hover:scale-105 hover:bg-sky-400' >Sign Up</button>
                    <div className='my-7'>
                        <h1 className='text-2xl font-Ubuntu '><a href="/"><i class="fa-solid fa-palette"></i>THE <span className="font-Great-Vibes text-5xl">ArtStudio</span></a></h1>
                        <p className='text-xs font-Ubuntu opacity-55' >Unleash Your Creativity. Shop Art, Decorate Homes.</p>
                    </div>
                </div>
            </div>
            <div className='p-px my-px w-full bg-white opacity-10'></div>
            <div className='flex justify-between my-6 '>
                <div>
                    <h1><i class="fa-regular fa-copyright"></i> The ArtStudio</h1>
                </div>
                <div className='flex text-sm opacity-85 '>
                    <a className='mx-2' href=""><h1>Privacy Policy</h1></a>
                    <a className='mx-2' href=""><h1>Track my order</h1></a>
                    <a className='mx-2' href=""><h1>Refund Policy</h1></a>
                    <a className='mx-2' href=""><h1>Shipping Policy </h1></a>
                </div>
            </div>
        </div>
    )
}

export default Header
