import { createSlice } from "@reduxjs/toolkit";


const storedUser = JSON.parse(localStorage.getItem("currentUser"));

const initialState = {
  currentUser: storedUser ? storedUser : null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser(state, action) {
      const user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(user));
      state.currentUser = user;
    },
    loginUser(state, action) {
      const user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(user));
      state.currentUser = user;
    },
    logoutUser(state) {
      localStorage.removeItem("currentUser");
      state.currentUser = null;
    }
  }
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
