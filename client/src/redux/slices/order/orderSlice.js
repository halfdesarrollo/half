import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nTable: 0,
  order: [],
  offersUserSelected: [], // array de ids
  orderStatus: '',
  paymentMethod: false,
  cash: 0,
  tip: 0,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
})

export const {} = orderSlice.actions
export default orderSlice.reducer
