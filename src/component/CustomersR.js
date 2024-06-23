import React, { useState , useEffect } from 'react';
import cr1 from '../img/culture/culture1.1.webp'
import cr2 from '../img/culture/culture2.webp'
import RigthArrow from '../img/pngImage/RightArrow.png'
import LeftArrow from '../img/pngImage/leftArrow.png'

const cards = [
    { comment: "Lorem ipsum dolor sit amet.", customer: "Ravi das", img: cr1 },
    { comment: "Lorem ipsum dolor sit amet.", customer: "Aman yadav", img: cr2 },
    { comment: "Lorem ipsum dolor sit amet.", customer: "Aman yadav", img: cr1 }
    // Add more cards as needed
];

const CustomersR = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [time , setTime] = useState(false);
    
   

    const nextCard = () => {
        
        if (startIndex < cards.length - 1) {
            setTime(false); // Reset animation
            setTimeout(() => {
              setStartIndex(startIndex + 1);
              setTime(true); // Trigger fadeIn animation
            }, 100);
        }

    };

    const prevCard = () => {
        
        if (startIndex > 0) {
            setTime(false); // Reset animation
            setTimeout(() => {
              setStartIndex(startIndex - 1);
              setTime(true); // Trigger fadeIn animation
            }, 100);
        }
    };
    
   


    return (
        <div className="relative w-full h-96 overflow-hidden font-Ubuntu">
            <div className="flex absolute transition-transform duration-500 mx-10" >
                {cards.slice(startIndex).map((card) => (
                    <div key={card.id} className="w-screen flex-shrink-0 flex px-4 flex justify-around">
                        <div className='my-10'>
                            <h1 className='my-6 mx-2 font-bold text-lg'>FROM THE CUSTOMERS </h1>
                            <div className='flex m-2'>
                                <p><i class="fa-solid fa-star"></i></p>
                                <p><i class="fa-solid fa-star"></i></p>
                                <p><i class="fa-solid fa-star"></i></p>
                                <p><i class="fa-solid fa-star"></i></p>
                                <p><i class="fa-solid fa-star"></i></p>
                            </div>
                            <p className={`text-4xl animate-${time ? 'fadeIn':''}`}>"{card.comment}"</p>
                            <h1 className={`text-xl animate-${time ? 'fadeIn':''}`}>- {card.customer}</h1>
                        </div>
                        <div className='w-96        '>
                            <img src={card.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
            <button className={`absolute top-3/4  left-[150px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={prevCard} disabled={startIndex === 0}>
                <img width={20} src={LeftArrow} alt="" />
            </button>
            <button className={`absolute top-3/4 left-[200px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${startIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={nextCard} disabled={startIndex === cards.length}>
                <img width={20} src={RigthArrow} alt="" />
            </button>
        </div>
    );
};

export default CustomersR;
