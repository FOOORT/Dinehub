import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
// Define initial state
const initialState = {
  loading: false,
  resto:  null,
  allrestos: null,
  error: "",
};
let token;
try {
  token = localStorage.getItem("token");
} catch (error) {
  console.error("error", error);
}

export const restosDetails = createAsyncThunk(
  "restosDetails",
  async (restoDetail) => {
    const request = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/business`,
      { params: restoDetail }
    );
    const response = await request.data;
    // console.log("response from API 1: ", response);
    localStorage.setItem("restaurant", JSON.stringify(response.data));
    return response;
  }
);

// Create an async thunk for fetching data from the second API
export const allRestoDetails = createAsyncThunk("allRestoDetails", async () => {
  // console.log("Token taken", token);
  const request = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/business/all`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const response = await request.data;
  localStorage.setItem("allRestaurant", JSON.stringify(response.data));
  // console.log("second API response: ", response);
  return response;
});

// Create a slice for the restaurant fetch
const restoSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    restosDetails: (state, action) => {
      state.resto = action.payload;
    },
    allRestoDetails: (state, action) => {
      state.allrestos = action.payload;
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

    builder.addCase(allRestoDetails.pending, (state) => {
      state.loading = true;
      state.allrestos = null;
      state.error = "";
    });

    builder.addCase(allRestoDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.allrestos = action.payload;
      state.error = "";
    });

    builder.addCase(allRestoDetails.rejected, (state, action) => {
      state.loading = false;
      state.allrestos = null;
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
