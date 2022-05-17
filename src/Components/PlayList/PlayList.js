import React from 'react'
import Song from '../Song/Song'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
export default function PlayList() {
  let store=useSelector(store=>store.SongsReducer)

  
  const PlaySong=()=>{

  }

  return (
    <section className="px-1  overflow-y-auto  h-4/6 mt-5 overflow-hidden  ">
        {store.songs.length==0 ? <h1 className='text-violet-100/60'>No added songs</h1> : 
        store.songs.map((song,index)=>{
          return <Song songIndex={index} songName={song.name} num={index} id={song.id} playCurrentSong_F={PlaySong}/>
        })
        }
        </section>
  )
}
