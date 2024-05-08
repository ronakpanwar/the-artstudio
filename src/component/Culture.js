import React from 'react'
import Card from './tools/Card'
import ObjectC from '../objects/ObjectC'

const Culture = () => {
  return (
    <>
        <div className='p-4 bg-white'>
                <div className=' p-8 flex justify-around items-center'>
                    <div className='basis-1/3 text-center'>
                        <h1 className='font-bold text-3xl'>Indian Culture Arts</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {ObjectC.map((e, index) => (
                        <Card key={index} img1={e.img1} img2={e.img2} p={e.p} price={e.price} />
                    ))}
                </div>
            </div>
    </>
  )
}

export default Culture
