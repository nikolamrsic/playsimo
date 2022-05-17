import { configureStore } from '@reduxjs/toolkit'
import SongsReducer from './SongsReducer'

const store = configureStore({
  reducer: {
    SongsReducer
  }
})

export default store