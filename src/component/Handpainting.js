import React from 'react'
import Card from './tools/Card'
import ObjectH from '../objects/ObjectH'

const Handpainting = () => {
  return (
    <>
         <div className='p-4 bg-white'>
                <div className=' p-8 flex justify-around items-center'>
                    <div className='basis-1/3 text-center'>
                        <h1 className='font-bold text-3xl'>Hand Made Painting</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {ObjectH.map((e, index) => (
                        <Card key={index} img1={e.img1} img2={e.img2} p={e.p} price={e.price} />
                    ))}
                </div>
            </div>
    </>
  )
}

export default Handpainting
