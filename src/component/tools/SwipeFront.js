import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Autoplay,  } from 'swiper/modules';

export default function SwipeFront(props) {
  return (
    <>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='transition-all ease-in-out duration-150'><img className='p-4  ' src={props.fentastic2} alt="" /></SwiperSlide>
        <SwiperSlide className='transition-all ease-in-out duration-150'><img className='p-4' src={props.plateImg} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}