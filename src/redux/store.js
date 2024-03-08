import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import toastSlice from "./toast";

export default configureStore({
  reducer: {
    user: userReducer,
    toast: toastSlice,
  },
});
