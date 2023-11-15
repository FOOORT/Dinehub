// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define initial state
// const initialState = {
//   loading: false,
//   user: {},
//   error: "",
// };

// // Create an async thunk for create user
// export const createUser = createAsyncThunk(
//   "createUser",
//   async (userDetails) => {
//     const request = await axios.post(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/register`,
//       userDetails
//     );

//     // console.log("====================================");
//     // console.log("Request", request);
//     // console.log("User details", userDetails);
//     // console.log("====================================");

//     const response = await request.data;
//     // console.log("response: ", response);
//     return response;
//   }
// );

// // Create a slice for the adding user
// const createUserSlice = createSlice({
//   name: "createUser",
//   initialState,
//   reducers: {
//     createUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(createUser.pending, (state, action) => {
//       // console.log("pen>> ", action);
//       state.loading = true;
//     }),
//       builder.addCase(createUser.fulfilled, (state, action) => {
//         // console.log("succ>> ", action);
//         (state.loading = false),
//           (state.user = action.payload),
//           (state.error = "");
//       }),
//       builder.addCase(createUser.rejected, (state, action) => {
//         // console.log("error>> ", action);
//         (state.loading = false),
//           (state.user = {}),
//           (state.error = action.error.message);
//       });
//   },
// });

// export default createUserSlice.reducer;
