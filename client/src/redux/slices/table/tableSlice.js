import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nTable: 0,
  nDiners: 1,
  guests: [], // invitados que estan en la mesa
  host: {},
  orders: [
    { user: { name: 'Anibal López', id: 1 }, name: 'Caldo de gallina', price: '22.90' },
    { user: { name: 'Ana Suárez', id: 2 }, name: 'Caldo de gallina', price: '22.90' }], // todos los pedidos de la mesa, agreguen el nombre de los usuarios y el id
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addNewGuest: (state, action) => {
      state.guests = state.guests.concat(action.payload)
    },
    deleteGuest: (state, action) => {
      state.guests = state.guests.filter(e => e.id !== action.payload)
    }
  },
})

export const { addNewGuest, deleteGuest } = tableSlice.actions
export default tableSlice.reducer
