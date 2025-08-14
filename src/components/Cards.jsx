import React from 'react'
import { TbFileSmile } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import {motion} from 'framer-motion';

const Cards = ({data,ref}) => {
  return (
    <div>
        <motion.div drag dragConstraints={ref} whileDrag = {{scale:1.2}} className='relative h-70 w-55 rounded-[40px] bg-zinc-900 text-white p-5 overflow-hidden'>
            <TbFileSmile />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='absolute bottom-15 flex justify-center items-center gap-27 '>
                <p className='text-green-400'>{data.size}</p>
                <ImCross />
            </div>
            {data.tag.isOpen?(<div className={`absolute ${data.tag.color} bottom-0 w-full h-10 left-0 px-2 py-2 text-center`}>
                Download
            </div>): null}
        </motion.div>
    </div>
  )
}

export default Cards