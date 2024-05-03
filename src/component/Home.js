
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
import wall1 from '../img/wall/wall5.webp'
import p21 from '../img/HandPainting/painting2.1.webp'
import card1 from '../img/card1.webp'


const Home = () => {


    return (
        <>
            {/* sliding image */}
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
            {/* second conatainer */}
            <div className='flex justify-evenly bg-sky-50  p-10 '>
                <div className="p-4">
                    <a href=""> <img src={p1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
                <div className=" p-4">
                    <a href=""> <img src={w1} alt="" className=' shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
                <div className="p-4">
                    <a href=""> <img src={plate1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
                <div className="p-4">
                    <a href=""> <img src={h1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
                <div className="p-4">
                    <a href=""> <img src={c1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
                <div className="p-4">
                    <a href=""> <img src={cl1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
                <div className="p-4">
                    <a href=""> <img src={r1} alt="" className='shadow-lg transition-all ease-in-out duration-200 rounded-full hover:scale-105 ' width={130} /></a>
                </div>
            </div>

            {/* thired container */}
            <div className='bg-sky-50 flex-col justify-center'>

                <div className='flex p-8 justify-around items-center'>
                    <div className='basis-1/3 bg-blue-950 h-1 P-0 '></div>
                    <div className='basis-1/3 text-center'>
                        <h1 className='font-bold text-4xl'>Best Arts</h1>
                    </div>
                    <div className='basis-1/3 bg-blue-950 h-1 P-0 '></div>

                </div>
                <div className='bg-sky-50 flex py-10 justify-around '>

                    <div className=' flex-col items-center'>
                        <div className='flex p-2'>
                            <div className='mx-2 border-solid border-black border-2 rounded-lg '>
                                <a className='' href=""> <img className='  transition-all ease-in duration-150 hover:scale-95 ' src={p1} alt="" width={200} /></a>
                                <h1 className='text-center font-bold'>-Painting-</h1>
                            </div>
                            <div className='mx-2 border-solid border-black border-2 rounded-lg'>
                                <a className='' href=""><img className=' transition-all ease-in duration-150 hover:scale-95' src={w1} alt="" width={200} /></a>
                                <h1 className='text-center font-bold'>-Wall Art-</h1>
                            </div>
                        </div>
                        <div className='flex p-2'>
                            <div className=' mx-2 border-solid border-black border-2 rounded-lg'>
                                <a className='' href=""><img className=' transition-all ease-in duration-150 hover:scale-95' src={cl1} alt="" width={200} /></a>
                                <h1 className='text-center font-bold'>-Clocks-</h1></div>
                            <div className='mx-2 border-solid border-black border-2 rounded-lg'>
                                <a className='' href=""><img className=' transition-all ease-in duration-150 hover:scale-95' src={plate1} alt="" width={200} /></a>
                                <h1 className='text-center font-bold'>-Plate Art-</h1>
                            </div>
                        </div>
                        <div className=' p-2'>
                            <div className='border-solid border-2 border-black mx-2 h-full flex justify-center rounded-lg'>
                                <img className='w-80  ' src={p21} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=' border-solid border-black border-2 rounded-lg m-2 flex items-center '>
                        <a className='' href=""> <img className=' w-auto transition-all ease-in duration-150 hover:scale-95 ' src={wall1} alt="" /></a>

                    </div>
                </div>
            </div>

            {/* four container */}
            <div className='bg-blue-200 mx-2 rounded-2xl shadow-inner relative shadow-blue-400'>
                <div className=' p-8 flex justify-around items-center'>
                    <div className='basis-1/3 bg-blue-950 h-1 P-0 '></div>
                    <div className='basis-1/3 text-center'>
                        <h1 className='font-bold text-4xl'>Customer favourites</h1>
                    </div>
                    <div className='basis-1/3 bg-blue-950 h-1 P-0 '></div>

                </div>

                <div className='p-10 flex flex-nowrap justify-between '>
                    <div className='flex-col w-svm border-solid  border-black border-2 rounded-lg  bg-white shadow-2xl mx-2'>
                        <a href=""><img className='w-full ' src={card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4'>6x8 custmized clocks </h1>
                        <h1 className='px-4  '>From-  <b>Rs 499</b> </h1>
                        <button className='w-full items-center mt-2  p-2 text-lg font-bold bg-blue-200 transition-all ease-in-out duration-200 hover:bg-blue-950 hover:text-white ' >Give Order</button>
                    </div>
                    <div className='flex-col w-svm border-solid  border-black border-2 rounded-lg  bg-white shadow-2xl mx-2'>
                        <a href=""><img className='w-full ' src={card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4'>6x8 custmized clocks </h1>
                        <h1 className='px-4  '>From-  <b>Rs 499</b> </h1>
                        <button className='w-full items-center mt-2  p-2 text-lg font-bold bg-blue-200 transition-all ease-in-out duration-200 hover:bg-blue-950 hover:text-white ' >Give Order</button>
                    </div>
                    <div className='flex-col w-svm border-solid border-black border-2 rounded-lg  bg-white shadow-2xl mx-2'>
                        <a href=""><img className='w-full ' src={card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4'>6x8 custmized clocks </h1>
                        <h1 className='px-4  '>From-  <b>Rs 499</b> </h1>
                        <button className='w-full items-center mt-2  p-2 text-lg font-bold bg-blue-200 transition-all ease-in-out duration-200 hover:bg-blue-950 hover:text-white ' >Give Order</button>
                    </div>
                  
                
                </div>
                <div className='absolute bottom-64 left-4 z-20 bg-white p-4 rounded-lg cursor-pointer  '>
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div className='absolute bottom-64 right-4 z-20 bg-white p-4 rounded-lg cursor-pointer  '>
                <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>

        </>
    )
}

export default Home
