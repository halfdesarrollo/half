import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nTable: 0,
  preOrder: [],
  order: [],
  offersUserSelected: [], // array de ids
  orderStatus: '',
  paymentMethod: false,
  cash: 0,
  tip: 0,
  totalPrice:0,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Pre Order
    addOrder: (state, action) => {
      const orderIndex = state.preOrder.findIndex(
        (item) => item?.id === action.payload.id
      )
      if(orderIndex === -1){
        state.preOrder.push({ ...action.payload, quantity: 1 })
      }else{
        state.preOrder[orderIndex].quantity++
      }
    },
    removeOrder: (state, action) => {
      state.preOrder = state.preOrder.filter(
        (item) => item.id !== action.payload
      )
    },
    decreaseOrderQuantity: (state, action) => {
      const orderIndex = state.preOrder.findIndex(
        (item) => item.id === action.payload.id
      )
      if (orderIndex !== -1) {
        if (state.preOrder[orderIndex].quantity > 1) {
          state.preOrder[orderIndex].quantity--
        } else {
          state.preOrder = state.preOrder.filter(
            (item) => item.id !== action.payload.id
          )
        }
      }
    },
    addAllOrder: (state, action) => {
      state.order = state.preOrder
      state.totalPrice = action.payload
    },
    addToTotalPrice: (state, action) => {
      state.totalPrice = +(state.totalPrice + action.payload).toFixed(2)
    },
    removeToTotalPrice: (state, action) => {
      state.totalPrice = +(state.totalPrice - action.payload).toFixed(2)
    }
  },
})

export const {
  addOrder, 
  removeOrder, 
  decreaseOrderQuantity, 
  addAllOrder, 
  addToTotalPrice, 
  removeToTotalPrice } =
  orderSlice.actions

export default orderSlice.reducer
