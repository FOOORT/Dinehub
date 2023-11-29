import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  loading: false,
  resto: [],
  allrestos: [],
  error: "",
};

// Initialize token and localresto with default values
let token = null;
let localresto = null;

// Attempt to parse data from localStorage
try {
  const user = JSON.parse(localStorage.getItem("user"));
  const resto = JSON.parse(localStorage.getItem("restaurant"));

  // Check if user and token exist
  if (user && user.token) {
    token = user.token;
  }

  // Check if resto data exists
  if (resto && resto.data) {
    localresto = resto.data;
  }
} catch (error) {
  console.error("Error while parsing localStorage data", error);
}

console.log("token: " + token);
console.log("localresto: ", localresto);

// Create an async thunk for fetching restaurant
export const restosDetails = createAsyncThunk(
  "restosDetails",
  async (restoDetail) => {
    const request = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/business`,
      { params: restoDetail }
    );
    const response = await request.data;
    localStorage.setItem("restaurant", JSON.stringify(response));
    return response;
  }
);

// Create an async thunk for fetching data from the second API
export const allRestoDetails = createAsyncThunk("allRestoDetails", async () => {
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
  localStorage.setItem("allRestaurant", JSON.stringify(response));
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
      state.resto = [];
      state.error = "";
    });

    builder.addCase(restosDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.resto = action.payload;
      state.error = "";
    });

    builder.addCase(restosDetails.rejected, (state, action) => {
      state.loading = false;
      state.resto = [];
      console.log("Error: ", action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Access Denied ! Invalid credentials Url";
      } else {
        state.error = action.error.message;
      }
    });

    builder.addCase(allRestoDetails.pending, (state) => {
      state.loading = true;
      state.allrestos = [];
      state.error = "";
    });

    builder.addCase(allRestoDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.allrestos = action.payload;
      state.error = "";
    });

    builder.addCase(allRestoDetails.rejected, (state, action) => {
      state.loading = false;
      state.allrestos = [];
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
