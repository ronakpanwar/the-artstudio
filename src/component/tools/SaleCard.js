import React from 'react'

const SaleCard = (props) => {
    return (
        <>
            <div className='flex-col  text-center  w-full p-4 bg-sky-50' >

                <div className='flex relative justify-center group overflow-hidden '>

                    <img className='transition-all ease-in duration-150 group-hover:scale-105  w-full ' src={props.img} alt="" />
                    <button className='hidden absolute h-12 w-4/5 backdrop-blur-10 bg-white/50 bottom-2  group-hover:block  '>Quick Buy</button>
                    <span className='absolute top-0 left-0 bg-red-700 text-white px-2 py-1'>10% off</span>
                </div>

                <p className='py-2 w-full'>{props.p}</p>
                <div className='flex justify-center' ><h1 className='flex' >From Rs - <p className='line-through text-slate-700 '>{props.oldP}</p>  <p className='font-bold mx-2'>{props.sP}</p></h1></div>
            </div>
        </>
    )
}

export default SaleCard
