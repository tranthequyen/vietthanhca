import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
      name: 'songs',
      initialState: [],
      reducers: {
            setSongs: (state, action) => action.payload,
      },
});

export const { setSongs } = songsSlice.actions;

export default songsSlice.reducer;