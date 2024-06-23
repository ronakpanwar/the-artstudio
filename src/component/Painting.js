import React from 'react'
import Card from './tools/Card'
import h1 from '../img/HandPainting/painting1.webp'

import ObjectP from '../objects/ObjectP'

const Painting = () => {
    return (
        <>
            <div className='p-4 bg-white font-Ubuntu'>
                <div className=' p-8 flex justify-around items-center'>
                    <div className='basis-1/3 text-center'>
                        <h1 className='font-bold text-3xl'>Paintings</h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 '>
                    {ObjectP.map((e, index) => (
                        <Card key={index} img1={e.img2} img2={e.img1} p={e.p} price={e.price} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Painting
