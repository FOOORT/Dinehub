import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "@/store/api";
import { createSelector } from "reselect";

const restaurant = createSlice({
  name: "restaurant",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    restaurantRequested: (restaurant) => {
      restaurant.loading = true;
    },
    restaurantRequestFailed: (restaurant) => {
      restaurant.loading = false;
    },
    restaurantReceived: (restaurant, actions) => {
      restaurant.list = actions.payload;
      restaurant.loading = false;
    },
  },
});

const {
  restaurantReceived,
  restaurantRequested,
  restaurantRequestFailed,
} = restaurant.actions;
export default restaurant.reducer;
// actions

export const loadRestaurant = (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/business",
      onStart: restaurantRequested.type,
      onError: restaurantRequestFailed.type,
      onSuccess: restaurantReceived.type,
    })
  );
};

export const getRestaurant = createSelector(
  (state) => state.restaurant,
  (restaurant) => restaurant.list
);
