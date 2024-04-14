import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormCategoryOpen: false,
};

export const formCategorySlice = createSlice({
  name: "formCategory",
  initialState,
  reducers: {
    toggleFormCategory: (state) => {
      state.isFormCategoryOpen = !state.isFormCategoryOpen;
    },
  },
});

export const { toggleFormCategory } = formCategorySlice.actions;

export default formCategorySlice.reducer;
