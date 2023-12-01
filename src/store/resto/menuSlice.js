// menusSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getStoredUser = () => JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  menus: [],
  status: "idle",
  error: null,
  user: getStoredUser(), // Set initial user state from localStorage
};

const checkManagerAccess = (user) => {
  if (!user || user.role !== "Manager") {
    throw new Error("Unauthorized access");
  }
  console.log("checkManagerAccess: ", user.role);
};

// Thunk to fetch a menu from backend
export const fetchMenus = createAsyncThunk(
  "menus/fetchMenus",
  async (_, { getState }) => {
    const user = getState().menus.user;
    checkManagerAccess(user);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/manager/menu`
    );
    const data = await response.json();
    return data;
  }
);

// Thunk to add a menu to the backend and update local storage
export const addMenu = createAsyncThunk(
  "menus/addMenu",
  async (menu, { getState }) => {
    const user = getState().menus.user;
    checkManagerAccess(user);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/manager/menu`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menu),
      }
    );

    const data = await response.json();

    // Update local storage with the new menu
    const storedMenus = JSON.parse(localStorage.getItem("menus")) || [];
    localStorage.setItem("menus", JSON.stringify([...storedMenus, data]));

    return data;
  }
);

// Thunk to edit a menu on the backend and update local storage
export const editMenu = createAsyncThunk(
  "menus/editMenu",
  async ({ id, updatedMenu }, { getState }) => {
    const user = getState().menus.user;
    checkManagerAccess(user);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/manager/menu/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMenu),
      }
    );

    const data = await response.json();

    // Update local storage with the edited menu
    const storedMenus = JSON.parse(localStorage.getItem("menus")) || [];
    const updatedMenus = storedMenus.map((menu) =>
      menu.id === id ? data : menu
    );
    localStorage.setItem("menus", JSON.stringify(updatedMenus));

    return data;
  }
);

// Thunk to delete a menu on the backend and update local storage
export const deleteMenu = createAsyncThunk(
  "menus/deleteMenu",
  async (id, { getState }) => {
    const user = getState().menus.user;
    checkManagerAccess(user);

    // Assuming you are sending a DELETE request to delete a menu
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/manager/menu/${id}`, {
      method: "DELETE",
    });

    // Remove the deleted menu from local storage
    const storedMenus = JSON.parse(localStorage.getItem("menus")) || [];
    const updatedMenus = storedMenus.filter((menu) => menu.id !== id);
    localStorage.setItem("menus", JSON.stringify(updatedMenus));

    return id;
  }
);

const menusSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.menus = action.payload;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addMenu.fulfilled, (state, action) => {
        state.menus.push(action.payload);
      })
      .addCase(editMenu.fulfilled, (state, action) => {
        const index = state.menus.findIndex(
          (menu) => menu.id === action.payload.id
        );
        if (index !== -1) {
          state.menus[index] = action.payload;
        }
      })
      .addCase(deleteMenu.fulfilled, (state, action) => {
        state.menus = state.menus.filter((menu) => menu.id !== action.payload);
      });
  },
});

export const { setUser } = menusSlice.actions;

export default menusSlice.reducer;
