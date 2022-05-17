import React, { useRef } from "react";
import { BeakerIcon } from "@heroicons/react/solid";
import { ADD_SONG } from "../Store/SongsReducer";
import { useDispatch } from "react-redux";

export default function LoadSongs() {
  let dispatch = useDispatch();
  let inputFiles = useRef();
  return (
    <div className=" bg-violet-700/30 hover:bg-violet-700/40 w-full flex justify-center absolute bottom-0 left-0 px-5 py-2 flex gap-3">
      <label className="flex gap-2" for="files">
        <div className="text-violet-50">Add files</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  stroke-violet-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </label>
      <input
        ref={inputFiles}
        type="file"
        id="files"
        multiple
        className=" hidden"
        onChange={() => {
          let index=0;
          console.log(  inputFiles.current.files.length )
          for (let i=0;i<=inputFiles.current.files.length;i++){
            
            let reader = new FileReader();
            
            reader.onload = () => {
              dispatch(ADD_SONG({ src: reader.result, name:inputFiles.current.files[i].name ,id:i}));
            };
            reader.readAsDataURL(inputFiles.current.files[i]);
          }}}
        
        accept=".mp3,.mp4"
      />
    </div>
  );
}
