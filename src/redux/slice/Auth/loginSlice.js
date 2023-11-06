
import { createSlice } from "@reduxjs/toolkit";
// const user = JSON.parse(localStorage.getItem("user"));
export const LoginSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    logginUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logginUser } = LoginSlice.actions;

export default LoginSlice.reducer;
