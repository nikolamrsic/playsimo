import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { IoIosClose,IoIosInformationCircleOutline } from "react-icons/io";
import { useState } from 'react';
export default function About() {
 let[isOpen,setOpen]=useState(false)
  return (
<div className=' h-fit absolute right-3 top-3 z-10 '>
    <button onClick={()=>{
        setOpen(true)
    }}><IoIosInformationCircleOutline size='2rem' className='fill-white pointer-events-none' /></button>
    <AnimatePresence>

    
{isOpen && <motion.div animate={{x:0,}} initial={{x:999,}} exit={{x:999}}  transition={{ type: "spring", duration:1.5,stiffness: 100 }} class=" bg-slate-50  text-black text-left z-20 absolute top-0  right-0 drop-shadow-2xl px-2 py-2 w-96 rounded-lg px-4">
         
         <button className='absolute  right-3 top-3 px-1 py-1 rounded-full border-transparent hover:bg-red-700 hover:border-purple-500  border'><IoIosClose className=' pointer-events-none' size='1.8rem'/></button>
       <button onClick={()=>{
           setOpen(false)
       }} className='absolute  right-3 top-3 px-1 py-1 rounded-full border-transparent  hover:border-purple-500  border'><IoIosClose className=' pointer-events-none' size='1.8rem'/></button>
      <h1 class="font-bold text-2xl">About Project</h1>
     
      <h2 class=" font-semibold text-xl">Technologies used:</h2>
      <ul class=" list-disc px-5">
        <li>Html</li>
        <li>Tailiwnd</li>
        <li>Sass</li>
        <li>React</li>
        <li>REACT REDUX/Toolkit</li>
        <li>Framer Motion</li>
      </ul>
      <p className="ml-0 mt-1">Tracks downloaded from : NCS Label</p>
  
      <p className="ml-0 mt-1">Made from scratch</p>
      <div>
        <h3></h3>
        </div>
     </motion.div>}
     </AnimatePresence>
</div>
  )
}
