// 'use client';
// import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/Auth/loginSlice";

export const reducers = {
  // Add your reducers here
  auth: loginReducer,
};
// export const store = configureStore({
//   reducer: {
//     ...reducers,
// },
// devTools: process.env.NODE_ENV !== "production",
// });

// // export default store;


import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        ...reducers,
    },
  devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({}).concat([userApi.middleware]),
});

