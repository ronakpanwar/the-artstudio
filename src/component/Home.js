
import React ,{useState} from 'react'
import plateImg from '../img/painting/fentastic.png';
import fentastic2 from '../img/painting/fentastic2.png';

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
   </>
  )
}

export default Home
