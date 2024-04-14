import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./slices/SidebarSlice";
import { formUserSlice } from "./slices/FormUserSlice";
import { formBannerSlice } from "./slices/FormBannerSlice";
import { userLoggedSlice } from "./slices/UserLoggedSlice";
import { formCategorySlice } from "./slices/FormCategorySlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    formUser: formUserSlice.reducer,
    formBanner: formBannerSlice.reducer,
    userLogged: userLoggedSlice.reducer,
    formCategory: formCategorySlice.reducer,
  },
});

export default store;
