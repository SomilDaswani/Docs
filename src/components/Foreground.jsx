import React, { useRef } from 'react';
import Card from './Card';

const Foreground = ({ cardsData = [] }) => { // Default to empty array
  const ref = useRef(null);

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {cardsData.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
