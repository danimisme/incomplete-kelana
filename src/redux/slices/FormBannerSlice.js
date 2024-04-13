import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isFormBannerOpen: false,
};

export const formBannerSlice = createSlice({
  name: "formBanner",
  initialState,
  reducers: {
    toggleFormBanner: (state) => {
      state.isFormBannerOpen = !state.isFormBannerOpen;
    },
  },
});

export const { toggleFormBanner } = formBannerSlice.actions;

export default formBannerSlice.reducer;
