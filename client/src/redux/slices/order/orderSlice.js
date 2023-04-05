import { createSlice } from "@reduxjs/toolkit";
import {
  addOrder,
  removeOrder,
  increaseOrderQuantity,
  decreaseOrderQuantity,
} from "./orderActions";

const initialState = {
  nTable: 0,
  order: [],
  offersUserSelected: [], // array de ids
  orderStatus: "",
  paymentMethod: false,
  cash: 0,
  tip: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrder, (state, action) => {
        const orderIndex = state.order.findIndex(
          (item) => item.id === action.payload.id
        );

        if (orderIndex === -1) {
          state.order.push({ ...action.payload, quantity: 1 });
        } else {
          state.order[orderIndex].quantity++;
        }
      })
      .addCase(removeOrder, (state, action) => {
        state.order = state.order.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(increaseOrderQuantity, (state, action) => {
        const orderIndex = state.order.findIndex(
          (item) => item.id === action.payload.id
        );
        if (orderIndex !== -1) {
          state.order[orderIndex].quantity++;
        }
      })
      .addCase(decreaseOrderQuantity, (state, action) => {
        const orderIndex = state.order.findIndex(
          (item) => item.id === action.payload.id
        );
        if (orderIndex !== -1) {
          if (state.order[orderIndex].quantity > 1) {
            state.order[orderIndex].quantity--;
          } else {
            state.order = state.order.filter(
              (item) => item.id !== action.payload.id
            );
          }
        }
      });
  },
});

export default orderSlice.reducer;
