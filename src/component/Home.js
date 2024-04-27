
import React, { useState } from 'react'
import plateImg from '../img/painting/fentastic.png';
import fentastic2 from '../img/painting/fentastic2.png';
import p1 from '../img/painting/p1.webp';
import w1 from '../img/wall/wall2.webp'
import plate1 from '../img/plateArt/plateart2.webp'
import h1 from '../img/HandPainting/painting1.webp'
import c1 from '../img/culture/culture1.webp'
import cl1 from '../img/clock/clock1.webp'
import r1 from '../img/room/room1.webp'



const Home = () => {


    return (
        <>
            <div className="container">
                <div className="p-2 flex " >
                    <div className=''>
                        <img src={plateImg} alt="" />
                    </div>
                    <div>
                        <img src={fentastic2} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly bg-sky-50  p-4 m-2'>
                <div className="p-4">
                   <a href=""> <img src={p1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100' width={130}/></a>
                </div>
                <div className=" p-4">
                <a href=""> <img src={w1} alt="" className=' shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100 ' width={130} /></a>
                </div>
                <div className="p-4">
                <a href=""> <img src={plate1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100' width={130}/></a>
                </div>
                <div className="p-4">
                <a href=""> <img src={h1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100' width={130}/></a>
                </div>
                <div className="p-4">
                <a href=""> <img src={c1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100' width={130}/></a>
                </div>
                <div className="p-4">
                <a href=""> <img src={cl1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100' width={130}/></a>
                </div>
                <div className="p-4">
                <a href=""> <img src={r1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-125 hover:shadow-blue-500/100' width={130}/></a>
                </div>
            </div>
        </>
    )
}

export default Home
