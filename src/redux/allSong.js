import { createSlice } from "@reduxjs/toolkit";

const allSongsSlice = createSlice({
  name: "allSong",
  initialState: [],
  reducers: {
    setAllSongs: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAllSongs } = allSongsSlice.actions;

export default allSongsSlice.reducer;
