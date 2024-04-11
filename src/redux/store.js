import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import toastSlice from './toast';
import currentSong from './currentSong';
import songs from './songs';
import allSong from './allSong';
import replay from './replayState'

// import allSongReducer from './allSong'; // Import reducer từ slice allSong

export default configureStore({
      reducer: {
            user: userReducer,
            toast: toastSlice,
            currentSong: currentSong,
            songs: songs,
            allSong: allSong, // Sử dụng reducer từ slice allSong
            replay
      },
});