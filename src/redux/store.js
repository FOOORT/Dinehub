import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/Auth/loginSlice";
import restaurantReducer from "./slice/resto/restoSlice";
import createUser from "./slice/Auth/userSlice";

export const reducers = {
  auth: authReducer,
  restaurant: restaurantReducer,
  createUser,
};

const store = configureStore({
  reducer: {
    ...reducers,
  },

  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

export default store;
