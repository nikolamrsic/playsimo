import React from "react";
import { nanoid } from "nanoid";
import { useState, useRef } from "react";
import CSS from "./Song.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_CURRENT } from "../Store/SongsReducer";
import { SET_PLAYING } from "../Store/SongsReducer";
import { GET_NEXT } from "../Store/SongsReducer";
import { UPDATE_COUNTER } from "../Store/SongsReducer";
export default function Song({ songName, num, playCurrentSong_F, songIndex }) {
  let id = nanoid();
  let check = useRef();
  let dispatch = useDispatch();
  let store = useSelector((store) => store.SongsReducer);

  async function SharedWorker() {
    let song = await store.currentSong;
    console.log(song)
  }
  return (
    <article
      id={id}
      data-id={songIndex}
      className="mt-3 hover:bg-gray-800 hover:text-gray-100"
      onClick={(e) => {
        e.preventDefault();
     
        check.current.checked = true;
        
        dispatch(UPDATE_COUNTER(e.target.parentNode.getAttribute("data-id")));
        dispatch(GET_NEXT());
        dispatch(SET_PLAYING(true));
      }}
    >
      <input
        ref={check}
        type="radio"
        id={id}
        className=" hidden"
        name="song-check"
      />
      <label htmlFor={id} id={id} className="text-violet-400 ">
        <div className="text-left  text-ellipsis  pointer-events-none flex gap-2 py-3 px-2 border-violet-800 hover:bg-violet-600 hover:text-violet-50">
          <span>{num + 1}.</span>
          <h2 className="text-ellipsis">{songName}</h2>
        </div>
      </label>
    </article>
  );
}
