import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "@/store/api";
import { createSelector } from "reselect";

const menu = createSlice({
  name: "menu",
  initialState: {
    list: [],
    loading: false,
    selectedMenu: 0,
  },
  reducers: {
    menuRequested: (menu) => {
      menu.loading = true;
    },
    menuRequestFailed: (menu) => {
      menu.loading = false;
    },
    menuReceived: (menu, actions) => {
      menu.list = actions.payload;
      menu.loading = false;
    },
    menuAdded: (menu, actions) => {
      menu.list = [actions.payload, ...menu.list];
      menu.loading = false;
      alert("Menu Added");
    },
    menuUpdated: (menu, actions) => {
      const newMenu = actions.payload;
      const index = menu.list.findIndex((item) => item._id === newMenu._id);
      if (index !== -1) {
        menu.list[index] = newMenu;
      }
    },
    menuDeleted: (menu, actions) => {
      const index = menu.list.findIndex((item) => item._id === actions.payload);
      if (index !== -1) {
        menu.list.splice(index, 1);
      }
    },
  },
});

const {
  menuReceived,
  menuAdded,
  menuRequested,
  menuRequestFailed,
  menuUpdated,
  menuDeleted,
} = menu.actions;
export default menu.reducer;
// actions
export const addMenu = (data) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/manager/menu",
      method: "POST",
      onStart: menuRequested.type,
      onError: menuRequestFailed.type,
      onSuccess: menuAdded.type,
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};

export const updateMenu = (id, updatedMenu) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: `/manager/menu/${id}`,
      method: "PUT",
      onStart: menuRequested.type,
      onError: menuRequestFailed.type,
      onSuccess: menuUpdated.type,
      data: updatedMenu,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};

export const loadMenu = (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/manager/menu/business",
      onStart: menuRequested.type,
      onError: menuRequestFailed.type,
      onSuccess: menuReceived.type,
    })
  );
};

export const activateOrDeactivateMenu = (id) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: `manager/menu/activateOrDeactivate/${id}`,
      method: "PUT",
      onStart: menuRequested.type,
      onError: menuRequestFailed.type,
      onSuccess: menuUpdated.type,
    })
  );
};

export const deleteMenu = (id) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: `/manager/menu/${id}`,
      method: "DELETE",
      onStart: menuRequested.type,
      onError: menuRequestFailed.type,
      onSuccess: menuDeleted.type,
    })
  );
};

export const getMenu = createSelector(
  (state) => state.menu,
  (menu) => menu.list
);
