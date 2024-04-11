import { createSlice } from '@reduxjs/toolkit';

const replaySlice = createSlice({
    name: 'replay',
    initialState: false,
    reducers: {
        setReplayState: (state, action) => {
            return action.payload;
        }
    },
});

export const { setReplayState } = replaySlice.actions;

export default replaySlice.reducer;

