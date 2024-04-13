const initialState = {
  user: null,
};

export const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
