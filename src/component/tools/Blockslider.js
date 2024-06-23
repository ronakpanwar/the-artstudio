import React, { useState } from 'react';
import card1 from '../../img/card1.webp'


const cards = [
  { id: 1, img: card1 , title: 'card1', content: 'This is the content of card 1' },
  { id: 2, img: card1 , title: 'Card 2', content: 'This is the content of card 1' },
  { id: 3, img: card1 , title: 'Card 3', content: 'This is the content of card 1' },
  { id: 4, img: card1 , title: 'Card 4', content: 'This is the content of card 1' },
  { id: 5, img: card1 , title: 'Card 5', content: 'This is the content of card 1' },
  { id: 6, img: card1 , title: 'Card 6', content: 'This is the content of card 1' },
  // Add more cards as needed
];

const CardSwiper = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextCard = () => {
     if(startIndex < cards.length-3){
        setStartIndex(startIndex + 1);
     }
     
      
  };

  const prevCard = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full h-96 overflow-hidden font-Ubuntu">
      <div className="flex absolute transition-transform duration-500 mx-10" >
        {cards.slice(startIndex, startIndex + 3).map((card)=> (
          <div key={card.id} className="w-1/3  px-4">
            <div className="bg-sky-50 p-4 rounded-lg shadow-md ">
            <img src={card.img} alt="" className='w-full rounded-lg ' />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className={`absolute top-1/2  left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={prevCard} disabled={startIndex === 0}>
      <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${startIndex === cards.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={nextCard} disabled={startIndex === cards.length - 3}>
      <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default CardSwiper;