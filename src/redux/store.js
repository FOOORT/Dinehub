import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/Auth/loginSlice";

export const reducers = {
  auth: authReducer,
};

const store = configureStore({
  reducer: {
    ...reducers,
  },

  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

export default store;
