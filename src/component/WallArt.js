import React from 'react'
import ObjectW from '../objects/ObjectW'
import Card from './tools/Card'

const WallArt = () => {
  return (
    <>
      
      <div className='p-4 bg-white'>
                <div className=' p-8 flex justify-around items-center'>
                    <div className='basis-1/3 text-center'>
                        <h1 className='font-bold text-3xl'>wall Arts</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {ObjectW.map((e, index) => (
                        <Card key={index} img1={e.img1} img2={e.img2} p={e.p} price={e.price} />
                    ))}
                </div>
            </div>
    </>
  )
}

export default WallArt
