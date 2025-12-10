import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    list: [],
  },

  reducers: {
    addOrder(state, action) {
      state.list.push({
        ...action.payload,
        status: "Processing", // Default tracking status
        history: [
          { status: "Order Placed", date: new Date().toLocaleString() },
        ],
      });
    },

    updateOrderStatus(state, action) {
      const { id, status } = action.payload;
      const order = state.list.find((o) => o.id === id);

      if (order) {
        order.status = status;
        order.history.push({
          status,
          date: new Date().toLocaleString(),
        });
      }
    },
  },
});

export const { addOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;
