import { createSlice } from '@reduxjs/toolkit'
import restaurantMocks from '../../../mocks/restaurants'

const initialState = {
  restaurants: restaurantMocks,
  loading: false,
  selectedRestaurant: null,
  offers: [], // aca se agrega el mock
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    selectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload
    },
  },
})

export const { selectedRestaurant } = restaurantSlice.actions
export default restaurantSlice.reducer
