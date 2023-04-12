import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nTable: 0,
  preOrder: [],
  order: [],
  offersUserSelected: {},
  orderStatus: '',
  paymentMethod: false,
  cash: 0,
  tip: 0,
  preOrderPrice: 0,
  totalPrice: 0,
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
      if (orderIndex === -1) {
        state.preOrder.push({ ...action.payload, quantity: 1 })
      } else {
        state.preOrder[orderIndex].quantity++
      }
    },
    removeOrder: (state, action) => {
      state.preOrder = state.preOrder.filter(
        (item) => item.id !== action.payload
      )

      // saco el total del precio de los platos que quedan
      const totalPrice = state.preOrder.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity
      }, 0)

      state.preOrderPrice = totalPrice
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
    // Pre Order Price
    addPreOrderPrice: (state, action) => {
      state.preOrderPrice = action.payload
    },

    // Pasamos el estado de preOrder a order y le sumamos el precio del preOrder al total
    addAllOrder: (state, action) => {
      state.order = state.order.concat(state.preOrder)
      state.totalPrice += state.preOrderPrice
      state.preOrder = []
    },

    // Cuando queremos pagar el plato de otra persona se suma a nuestro total
    addToTotalPrice: (state, action) => {
      state.totalPrice = +(state.totalPrice + action.payload).toFixed(2)
    },
    removeToTotalPrice: (state, action) => {
      state.totalPrice = +(state.totalPrice - action.payload).toFixed(2)
    },
    addCoupon: (state, action) => {
      const discount =
        (action.payload.value[2] && '1.00') || '0.' + action.payload.value
      state.offersUserSelected = { ...action.payload, value: discount }
    },
    addTip: (state, action) => {
      state.tip = action.payload
    },
  },
})

export const {
  addOrder,
  removeOrder,
  decreaseOrderQuantity,
  addPreOrderPrice,
  addAllOrder,
  addToTotalPrice,
  removeToTotalPrice,
  addCoupon,
  addTip,
} = orderSlice.actions

export default orderSlice.reducer
