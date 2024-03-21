import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
      name: 'song',
      initialState: {
            currentSong: null,
            isPlaying: false,
      },
      reducers: {
            setCurrentSong: (state, action) => {
                  state.currentSong = action.payload;
            },
            setSongState: (state, action) => {
                  state.isPlaying = action.payload;
            },
      },
});

export const { setCurrentSong, setSongState } = songSlice.actions;

export default songSlice.reducer;
