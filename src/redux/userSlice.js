// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      userInfo: null,
      token: null,
      isLoggedIn: false,
};

const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {
            loginSuccess: (state, action) => {
                  state.userInfo = action.payload.userInfo;
                  state.token = action.payload.token;
                  state.isLoggedIn = true;
            }
            ,
            logout: (state) => {
                  state.userInfo = null;
                  state.token = null;
                  state.isLoggedIn = false;
            },
      },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
