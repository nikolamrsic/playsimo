import React, { Fragment, useEffect, useState, useRef } from 'react'
import { IoIosPlay, IoIosSkipBackward, IoIosSkipForward, IoIosPause,IoMdVolumeMute,IoMdShuffle,IoMdRepeat } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import store from '../Store/Store';
import { SET_PLAYING, GET_NEXT,INC_COUNTER,DEC_COUNTER,GET_RANDOM } from '../Store/SongsReducer';

export default function PlayerControl() {


  let [isPlaying, setPlaying] = useState(false)
  let dispatch = useDispatch()

  let[isLooping,setLooping]=useState(false)  


  let audio = useRef()
  let range = useRef()


  let songRewind = (e) => {
    
    audio.current.currentTime = e.target.value
    audio.current.play()
    setPlaying(true)
    dispatch(SET_PLAYING(true))
  }

 let[openSound,setOpenSaund]=useState(false)

  let playSong = () => {
    audio.current.play()
    setPlaying(true)
    dispatch(SET_PLAYING(isPlaying))
    range.current.max = audio.current.duration
  }

  let store = useSelector(store => store.SongsReducer)

  useEffect(()=>{
     if(store.counter !=0){
     
      dispatch(SET_PLAYING(true))
      document.querySelectorAll("input[type=radio]")[store.counter].checked=true;
     }
  },[store.counter])

  useEffect(() => {
    let interval = setInterval(() => {
      range.current.value = audio.current.currentTime
      if (audio.current.ended) {
        clearInterval(interval)
        
      }
    }, 1000)
  }, [store])


  return (
    <>
      <h1 className='text-xl text-violet-300'>{store.currentSong != null && store.currentSong[0].name}</h1>
   

      <audio loop={isLooping} ref={audio} autoPlay={store.isPlaying ? true : false} src={store.currentSong == null ? '' : store.currentSong[0].src} />
       
     

      <div className="flex flex-col   w-8/12 gap-6  px-2 py-3  translate-y-36">



      <div className=' w-full flex justify-between '>
         <div className='flex items-center'>
           <button onClick={()=>{
             setOpenSaund(!openSound)
           }}>  <IoMdVolumeMute size='2rem' className='fill-violet-100  hover:fill-violet-700 transition-all ' /></button>
           { openSound && <input onChange={(e)=>{
             audio.current.volume=e.target.value
           }} min='0' max='1' step='0.01' className='' type='range'></input>}
         </div>

         <div className='flex items-center gap-5'>
           <button onClick={()=>{
              if(store.songs.length!=0){
                dispatch(GET_RANDOM())
                dispatch(GET_NEXT())
                dispatch(SET_PLAYING(true))
              }
           }}
           
           ><IoMdShuffle size='2rem' className='fill-violet-100 hover:fill-violet-700 transition-all '  /></button>
           <button
           onClick={()=>{
            setLooping(!isLooping)
           }}
           ><IoMdRepeat size='2rem' className=' hover:fill-violet-700 transition-all  ' style={{fill: isLooping ? '#6D28D9' : '#F5F3FF'}}/></button>
         </div>
       </div>


        <div>

          <input  onChange={songRewind} ref={range} min='0' step='0.01' max={audio.current != undefined ? audio.current.duration : "0"} type="range" name="price" className="w-full h-2  rounded-full bg-violet-800 appearance-none" />
        </div>
        <div className="flex items-center gap-4 self-center">

          <button onClick={()=>{
            if(store.songs.length !=0){
              dispatch(DEC_COUNTER())
              dispatch(GET_NEXT())
              dispatch(SET_PLAYING(true))
            }
          
          }} className="bg-violet-700 border-none w-16 p-3 rounded-full h-16 flex items-center justify-center border active:scale-95 transition-all hover:bg-violet-900">
            <IoIosSkipBackward size='1.5rem' className='fill-violet-100' />
          </button>

          <button onClick={() => {

            setTimeout(() => {
              dispatch(SET_PLAYING(!store.isPlaying))
            }, 100)
            if (store.isPlaying) {
              audio.current.pause()
            } if (store.isPlaying == false) {
              audio.current.play()

            }
          }} className="bg-violet-700 border-none w-20 p-3 rounded-full h-20 flex items-center justify-center border active:scale-95 transition-all hover:bg-violet-900">

            {(store.isPlaying) ? <IoIosPause size='2rem' className='fill-violet-100' /> : <IoIosPlay size='2rem' className='fill-violet-100' />}
          </button>



          <button onClick={() => {
           
           if(store.songs.length !=0 ){
            dispatch(INC_COUNTER())
            dispatch(GET_NEXT())
            dispatch(SET_PLAYING(true))
           }
            
          }} className="bg-violet-700 border-none w-16 p-3 rounded-full h-16 flex items-center justify-center border active:scale-95 transition-all hover:bg-violet-900">
            <IoIosSkipForward size='2rem' className='fill-violet-100' />
          </button>

        </div>



      </div>
    </>
  )
}
