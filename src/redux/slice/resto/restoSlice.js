import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

// Define initial state
const initialState = {
  loading: false,
  resto: null,
  // resto:
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("restaurant")) || null
  //     : null,
  error: "",
};

// Create an async thunk for fetching restaurant
export const restosDetails = createAsyncThunk(
  "restosDetails",
  async (restoDetail) => {
    const request = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/business`,
      { params: restoDetail }
    );
    const response = await request.data;
    console.log("response: ", response);
    localStorage.setItem("restaurant", JSON.stringify(response));
    return response;
  }
);

// Create a slice for the restaurant fetch
const restoSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    restosDetails: (state, action) => {
      state.resto = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(restosDetails.pending, (state) => {
      state.loading = true;
      state.resto = null;
      state.error = "";
    });

    builder.addCase(restosDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.resto = action.payload;
      state.error = "";
    });

    builder.addCase(restosDetails.rejected, (state, action) => {
      state.loading = false;
      state.resto = null;
      console.log("Error: ", action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Access Denied ! Invalid credentials Url";
      } else {
        state.error = action.error.message;
      }
    });
  },
});

export default restoSlice.reducer;
