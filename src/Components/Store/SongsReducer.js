import { createSlice } from "@reduxjs/toolkit";
import song1 from '../DEFAULT_SONGS/Arcando - In My Head (feat. Britt Lari) [NCS Release].mp3'
import song2 from '../DEFAULT_SONGS/Cajama - Retrophonic [NCS Release].mp3'
import song3 from '../DEFAULT_SONGS/Elektronomia x Lunaar x Donna Tella - Champions [NCS Release].mp3'


const initialState = {
  songs: [
    {name:'Arcando - In My Head (feat. Britt Lari) [NCS Release]',
     src:song1
  },
  {name:'Cajama - Retrophonic [NCS Release].mp3',
  src:song2
},
{
 name:'Elektronomia x Lunaar x Donna Tella - Champions [NCS Release].mp3',
 src:song3
}

  ],
  searchedSong: null,
  currentSong: null,
  isPlaying: false,
  counter: 0,
};

export const songs_Slice = createSlice({
  name: "korisnici",
  initialState,
  reducers: {
    ADD_SONG: (state, action) => {
      state.songs = [...state.songs, action.payload];
      return state;
    },
    SEARCH_SONG: (state, action) => {
      state.searchedSong = [];
      state.searchedSong = state.songs.filter((song) => {
        if (song.name.toLowerCase().includes(action.payload)) {
          return song;
        }
        if (action.payload == "") {
          state.searchedSong = [];
        }
      });
      return state;
    },
    GET_CURRENT: (state, action) => {
      console.log(state.songs);
    },
    SET_PLAYING: (state, action) => {
      state.isPlaying = action.payload;
      return state;
    },
    GET_NEXT: (state, action) => {
      state.currentSong = state.songs.filter((song, index) => {
        return index == state.counter;
      });
      return state;
    },
    INC_COUNTER: (state, action) => {
      if (state.counter >= state.songs.length - 1) {
        state.counter = 0;
      } else {
        state.counter++;
      }
      return state;
    },
    DEC_COUNTER: (state, action) => {
      if (state.counter <= 0) {
        state.counter = state.songs.length - 1;
      } else {
        state.counter--;
      }
      return state;
    },
    UPDATE_COUNTER: (state, action) => {
      state.counter = action.payload;
      return state;
    },
  
    GET_RANDOM: (state, action) => {
      state.counter = Math.floor(Math.random() * state.songs.length);
      return state;
    },
    DELETE_LIST: (state, action) => {
      state.songs = [];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ADD_SONG,
  GET_CURRENT,
  SET_PLAYING,
  GET_NEXT,
  INC_COUNTER,
  DEC_COUNTER,
  UPDATE_COUNTER,
  GET_RANDOM,
  DELETE_LIST,
  SEARCH_SONG,
  
} = songs_Slice.actions;

export default songs_Slice.reducer;
