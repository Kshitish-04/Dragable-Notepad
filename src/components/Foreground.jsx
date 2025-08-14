import React, { useRef } from 'react';

import Cards from './Cards'

const Foreground = () => {

    const ref = useRef(null);
    const data = [
        {
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui laudantium odio fuga sapiente in ex",
            size: "0.7 Mb",
            close: true,
            tag: {
                isOpen: true,
                text: "Download",
                color: "bg-green-400",
                textColor: "green"
            }
        },
         {
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui laudantium odio fuga sapiente in ex",
            size: "1.2 Mb",
            close: true,
            tag: {
                isOpen: false,
                text: "Download",
                color: "bg-green-400",
                textColor: "green"
            }
        },
         {
            desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui laudantium odio fuga sapiente in ex",
            size: "0.5 Mb",
            close: true,
            tag: {
                isOpen: true,
                text: "Download",
                color: "bg-blue-800",
                textColor: "green"
            }
        }
    ]
    return (
        <div>
            <div ref={ref} className='flex p-5 gap-10 flex-wrap h-full w-full fixed top-0 left-0 z-[3]'>
                {data.map((item, index) => (
                    <Cards data={item} ref={ref}/>
                ))}
            </div>
        </div>
    )
}

export default Foreground