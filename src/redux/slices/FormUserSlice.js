import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormUserOpen: false,
};

export const formUserSlice = createSlice({
  name: "formUser",
  initialState,
  reducers: {
    toggleFormUser: (state) => {
      state.isFormUserOpen = !state.isFormUserOpen;
    },
  },
});

export const { toggleFormUser } = formUserSlice.actions;

export default formUserSlice.reducer;
