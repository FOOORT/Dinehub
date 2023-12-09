import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "@/store/api";

const initialState = {
  user: undefined,
  loading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authRequested: (auth) => {
      auth.loading = true;
    },
    authRequestFailed: (auth) => {
      auth.loading = false;
    },
    authReceived: (auth, actions) => {
      // console.log("Payload:", actions.payload)
      auth.user = actions.payload;
      auth.loading = false;
    },
    
    // Logout Reducer
    authLogout: (auth) => {
      auth.user = undefined;
      auth.loading = false;
    },

    // Reducers for forgot password
    forgotPasswordRequested: (auth) => {
      auth.loading = true;
    },
    forgotPasswordFailed: (auth) => {
      auth.loading = false;
    },
    forgotPasswordSuccess: (auth) => {
      auth.loading = false;
    },

    
  },
});

const { authReceived, authRequested, authRequestFailed, authLogout, forgotPasswordRequested, forgotPasswordFailed, forgotPasswordSuccess } = slice.actions;

export default slice.reducer;
// actions
export const addAuth = (user) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/user/login",
      onStart: authRequested.type,
      onSuccess: authReceived.type,
      data: user,
      onError: authRequestFailed.type,
      method: "POST",
    })
  );
};

// fogrot password actions 
export const forgotPassword = (email) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/user/forgot-password",
      onStart: forgotPasswordRequested.type,
      onSuccess: forgotPasswordSuccess.type,
      onError: forgotPasswordFailed.type,
      data: { email },
      method: "POST",
    })
  );
};

export const logoutUser = () => (dispatch) => {
  dispatch(authLogout());
};

// selectors
// get auth
export const getAuth = createSelector(
  (state) => state.auth,
  (auth) => auth.user
);

// is auth
export const isAuth = createSelector(
  (state) => state.auth,
  (auth) => !!auth.user
);

// get auth loading
export const isAuthLoading = createSelector(
  (state) => state.auth.loading,
  (loading) => loading
);
