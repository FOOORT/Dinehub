import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  isLoggedIn: false,
  loading: false,
  user: null,
  userRole: null,
  error: "",
};

// Create an async thunk for fetching users
export const loginUser = createAsyncThunk(
  "loginUser",
  async (userCredentials) => {
    const request = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`,
      userCredentials
    );
    const response = await request.data;
    console.log("response: ", response);
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

// Create a slice for the user login
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoggedIn = false;
      state.loading = true;
      state.user = null;
      state.userRole = null;
      state.error = "";
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      // state.userRole = action.payload.user.role;
      state.isLoggedIn = true;
      state.error = "";
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.user = null;
      state.userRole = null;
      console.log("Error: ", action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Access Denied ! Invalid credentials";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default authSlice.reducer;
