import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarShow: false,
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
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
