
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import toastSlice from './toast';
import currentSong from './currentSong';
import songs from './songs';
export default configureStore({
      reducer: {
            user: userReducer,
            toast: toastSlice,
            currentSong: currentSong,
            songs: songs,
      },
});
