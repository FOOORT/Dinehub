import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  loading: false,
  user: {},
  error: "",
};

// Create an async thunk for create user
export const createManagerAsync = createAsyncThunk(
  "createManager",
  async (managerDetails) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/business/register`,
        managerDetails
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Create a slice for managing user creation
const createManagerSlice = createSlice({
  name: "createManager",
  initialState,
  reducers: {
    createManager: (state, action) => {
      state.user = action.payload;
    },
    createManagerAndBusiness: (state, action) => {
      return { ...state, user: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createManagerAsync.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(createManagerAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      })
      .addCase(createManagerAsync.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action.error.message;
      });
  },
});

export const { createManager, createManagerAndBusiness } =
  createManagerSlice.actions;

export default createManagerSlice.reducer;
