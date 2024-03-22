import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
      name: 'song',
      initialState: {
            currentSong: null,
            isPlaying: false,
            isActive: true
      },
      reducers: {
            setCurrentSong: (state, action) => {
                  state.currentSong = action.payload;
            },
            setSongState: (state, action) => {
                  state.isPlaying = action.payload;
            },
            setSongActive: (state, action) => {
                  state.isActive = action.payload;
            },
      },
});

export const { setCurrentSong, setSongState, setSongActive } = songSlice.actions;

export default songSlice.reducer;
