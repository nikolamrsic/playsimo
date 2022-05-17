import React from 'react'
import { useState,useEffect } from 'react'
import { motion,AnimatePresence } from "framer-motion";
import {IoIosSearch } from "react-icons/io";
import { SEARCH_SONG } from '../Store/SongsReducer';
import { useSelector, useDispatch } from "react-redux";
import { Update } from '@reduxjs/toolkit';
import Song from '../Song/Song';



export default function Search() {

    
 
    let upadeCounter=()=>{
        dispatch()
    }

    let store = useSelector((store) => store.SongsReducer);

    let [openSearch,setSearch]=useState(false);
    let[textToSearch,setText]=useState('')
    let dispatch=useDispatch()
    useEffect(()=>{
      let timer=setTimeout(()=>{
        dispatch(SEARCH_SONG(textToSearch.toLocaleLowerCase()))
      },1000)
      return (()=>{
          clearTimeout(timer)
      })
    },[textToSearch])
  return (
    <div className="w-full flex  flex-col self-center absolute   top-3  left-0    mt-5 justify-center gap-4 py-2 px-3 items-center">
    <div className='flex items-center gap-5'>
    <AnimatePresence>
       <motion.input onChange={(e)=>{
           setText(e.target.value)
       }} initial={{opacity:0,marginRigth:'15px'}} animate={{opacity:1,marginRigth:'0px'}} exit={{opacity:0,marginRigth:'0px'}} type='text' className=" bg-violet-900/20 text-violet-50 rounded focus:outline-none  px-1 py-1"/>
       </AnimatePresence>
       
        <button onClick={()=>{
         setSearch(!openSearch)
        }}><IoIosSearch size='1.5rem' className="fill-violet-50"/></button>
    </div>
   {textToSearch!="" &&  <div className=' px-2 py-1 flex flex-col max-h-96 overflow-hidden overflow-y-auto py-1 px-3 gap-2 w-96 bg-violet-900 rounded'>
     {(store.searchedSong !=null )  && store.searchedSong.map((song,index)=>{
          return <Song songIndex={index} songName={song.name} num={index} />
        })}
  
    </div> }
     
      </div>
  )
}
