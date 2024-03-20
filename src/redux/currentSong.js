import { createSlice } from '@reduxjs/toolkit';

const currentSongSlice = createSlice({
      name: 'currentSong',
      initialState: null,
      reducers: {
            setCurrentSong: (state, action) => action.payload,
      },
});

export const { setCurrentSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;