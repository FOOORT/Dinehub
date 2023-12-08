import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "@/store/api";

const initialState = {
  user: {},
  loading: false,
};

const slice = createSlice({
  name: "client",
  initialState,
  reducers: {
    clientRequested: (client) => {
      client.loading = true;
    },
    clientRequestFailed: (client) => {
      client.loading = false;
    },
    clientReceived: (client, actions) => {
      //   console.log("Payload:", actions.payload);
      client.user = actions.payload;
      client.loading = false;
    },
  },
});

const { clientRequested, clientRequestFailed, clientReceived } = slice.actions;

export default slice.reducer;

export const addClient = (user) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/user/register",
      onStart: clientRequested.type,
      onSuccess: clientReceived.type,
      data: user,
      onError: clientRequestFailed.type,
      method: "POST",
    })
  );
};
