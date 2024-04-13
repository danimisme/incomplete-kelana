import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    showSidebar: (state) => {
      state.sidebarShow = true;
    },
    hideSidebar: (state) => {
      state.sidebarShow = false;
    },
    toggleSidebar: (state) => {
      return {
        ...state,
        sidebarShow: !state.sidebarShow,
      };
    },
  },
});

export const { showSidebar, hideSidebar, toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
