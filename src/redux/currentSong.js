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
            isVolume: null,
            isReplay: false,
            isRandom: false

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
            setIsReplay: (state, action) => {
                  state.isReplay = action.payload;
            },
            setIsRandom: (state, action) => {
                  state.isRandom = action.payload;
            },


      },
});

export const { setCurrentSong, setSongState, setSongActive, setCurrentTimeSong, setListMySong, setCurrentIndexSong, setVolumneSong, setIsVolume, setIsReplay, setIsRandom } = songSlice.actions;

export default songSlice.reducer;
