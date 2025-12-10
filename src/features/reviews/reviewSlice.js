import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    list: {}, 
    // Example:
    //  list: {
    //     1: [ { name, rating, comment } ],
    //     2: [ { name, rating, comment } ]
    // }
  },
  reducers: {
    addReview(state, action) {
      const { productId, name, rating, comment } = action.payload;

      if (!state.list[productId]) {
        state.list[productId] = [];
      }

      state.list[productId].push({ name, rating, comment });
    },
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
