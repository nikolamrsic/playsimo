import React from 'react';
import AudioSpectrum from 'react-audio-spectrum'
import Search from '../Search/Search';
export default function Main(props) {
  return (
    <div className='w-full flex flex-col items-center  justify-center h-full relative '>
  
     {props.children}
    </div>
  )
}
