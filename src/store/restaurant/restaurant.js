import { toast } from "react-toastify";
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
      toast.error(error.response.data.message);
    },
    restaurantReceived: (restaurant, actions) => {
      restaurant.list = actions.payload;
      restaurant.loading = false;
      toast.success(response.data.message);
    },
    restaurantAdded: (restaurant, actions) => {
      restaurant.list = [actions.payload, ...menu.list];
      restaurant.loading = false;
    },
  },
});

const {
  restaurantReceived,
  restaurantRequested,
  restaurantRequestFailed,
  restaurantAdded,
} = restaurant.actions;
export default restaurant.reducer;
// actions

export const addRestaurant = (data) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/user/register",
      method: "POST",
      onStart: restaurantRequested.type,
      onError: restaurantRequestFailed.type,
      onSuccess: restaurantAdded.type,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};

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
