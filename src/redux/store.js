import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slices/SidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

export default store;
