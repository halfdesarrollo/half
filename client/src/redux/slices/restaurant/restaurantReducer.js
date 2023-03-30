import { createSlice } from "@reduxjs/toolkit";
import restaurantMocks from "../../__mocks__/restaurant-mocks.json";

const initialState = {
  restaurants: restaurantMocks,
  loading: false,
  selectedRestaurant: null,
};

export const restaurantSlice = createSlice({
  name: "Restaurant",
  initialState,
  reducers: {
    selectedRestaurant: (state, action) => {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { selectedRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
