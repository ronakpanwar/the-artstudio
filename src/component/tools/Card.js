import React from 'react'

const Card = (props) => {
  return (
  <>
    <div className='flex-col  text-center  w-full p-6 bg-white' >
      
      <div className='flex relative justify-center group overflow-hidden '>
        <img className='hidden transition-all ease-in duration-250 delay-200 group-hover:block hover:scale-105  w-full' src={props.img2} alt="" />
        <img className='transition-all ease-in duration-150 group-hover:hidden  w-full ' src={props.img1} alt="" />
        <button className='hidden absolute h-12 w-4/5  bg-white bottom-2 border-solid border-slate-400 border-2  group-hover:block  '>Quick Buy</button>
      </div>

      <p className='py-2'>{props.p}</p>
      <h1 >From Rs - {props.price}</h1>
    </div>
  </>
  )
}

export default Card
