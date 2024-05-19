import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Blockslider(props) {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

   



    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='p-2'>   <div className='flex-col  border-solid   border-2 rounded-lg  bg-white shadow-xl mx-2'>
                        <a href=""><img className='w-full ' src={props.card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4'>6x8 custmized clocks </h1>
                        <h1 className='px-4  py-2'>From-  <b>Rs 499</b> </h1>
                      
                    </div></SwiperSlide>
               
                    <SwiperSlide className='p-2'>   <div className='flex-col w-svm border-solid  border-2 rounded-lg  bg-white shadow-xl mx-2'>
                        <a href=""><img className='w-full ' src={props.card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4'>6x8 custmized clocks </h1>
                        <h1 className='px-4 py-2 '>From-  <b>Rs 499</b> </h1>
                       
                    </div></SwiperSlide>
                    
                <SwiperSlide className='p-2'>   <div className='flex-col w-svm border-solid  border-2 rounded-lg  bg-white shadow-xl mx-2'>
                        <a href=""><img className='w-full ' src={props.card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4'>6x8 custmized clocks </h1>
                        <h1 className='px-4 py-2 '>From-  <b>Rs 499</b> </h1>
                       
                    </div></SwiperSlide>
                    
                <SwiperSlide className='p-2'>   <div className='flex-col w-svm border-solid   border-2 rounded-lg  bg-white shadow-xl mx-2'>
                        <a href=""><img className='w-full ' src={props.card1} alt="" /></a>
                        <h3 className='font-bold text-xl px-4 '>Clock</h3>
                        <h1 className=' text-2xl px-4 '>6x8 custmized clocks </h1>
                        <h1 className='px-4 py-2 '>From-  <b>Rs 499</b> </h1>
           
                    </div></SwiperSlide>
                

            </Swiper>

            
        </>
    );
}
