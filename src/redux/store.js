import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/Auth/loginSlice";
import restaurantReducer from "./slice/resto/restoSlice";
import menusReducer from "./slice/resto/menuSlice";

export const reducers = {
  auth: authReducer,
  restaurant: restaurantReducer,
  menus: menusReducer,
};

const store = configureStore({
  reducer: {
    ...reducers,
  },

  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
});

export default store;
