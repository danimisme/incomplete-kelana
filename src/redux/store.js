import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slices/SidebarSlice";
import { formUserSlice } from "./slices/FormUserSlice";
import { formBannerSlice } from "./slices/FormBannerSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    formUser: formUserSlice.reducer,
    formBanner: formBannerSlice.reducer,
  },
});

export default store;
