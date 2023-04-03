import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nTable: 0,
  nDiners: 1,
  guests: [],
  host: {},
  orders: [], // todos los pedidos de la mesa
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
})

export const {} = tableSlice.actions
export default tableSlice.reducer
