import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nTable: 0,
  nDiners: 1,
  guests: [], // invitados que estan en la mesa
  host: {},
  orders: [], // todos los pedidos de la mesa
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addNewGuest: (state, action) => {
      state.guests = state.guests.concat(action.payload)
    },
    deleteGuest: (state, action) => {
      state.guests.filter(e => e.id !== action.payload)
      console.log('ID', action.payload)
      console.log(state.guests);
    }
  },
})

export const { addNewGuest, deleteGuest } = tableSlice.actions
export default tableSlice.reducer
