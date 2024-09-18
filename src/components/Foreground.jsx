import React, { useRef, useState } from 'react';
import Card from './Card';


const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "The description will be placed here, cool isn't it?",
            filesize: ".4mb",
            close: true,
            tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
        },
        {
            desc: "The description will be placed here, cool isn't it?",
            filesize: ".4mb",
            close: true,
            tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "The description will be placed here, cool isn't it?",
            filesize: ".4mb",
            close: true,
            tagDetails: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
        },
    ];


  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground
