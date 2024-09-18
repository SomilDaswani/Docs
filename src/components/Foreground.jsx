import React, { useRef } from 'react';
import Card from './Card';

const Foreground = ({ cardsData = [], handleRemoveCard }) => {

  const ref = useRef(null);

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {cardsData.map((item) => (
        <Card key={item.id} data={item} reference={ref} onRemove={() => handleRemoveCard(item.id)} />
      ))}
    </div>
  );
};

export default Foreground;
