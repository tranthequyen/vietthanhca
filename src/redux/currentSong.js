import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
      name: 'song',
      initialState: {
            currentSong: null,
            isPlaying: false,
            isActive: true,
            currentTimeSong: null,
            listMySong: [],
            currentIndexSong: null,
            volume: null,
            isVolume: null
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
            setCurrentTimeSong: (state, action) => {
                  state.currentTimeSong = action.payload;
            },
            setListMySong: (state, action) => {
                  state.listMySong = action.payload;
            },
            setCurrentIndexSong: (state, action) => {
                  state.currentIndexSong = action.payload;
            },
            setVolumneSong: (state, action) => {
                  state.volume = action.payload;
            },
            setIsVolume: (state, action) => {
                  state.isVolume = action.payload;
            },


      },
});

export const { setCurrentSong, setSongState, setSongActive, setCurrentTimeSong, setListMySong, setCurrentIndexSong, setVolumneSong, setIsVolume } = songSlice.actions;

export default songSlice.reducer;
