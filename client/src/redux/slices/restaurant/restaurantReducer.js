import { createSlice } from "@reduxjs/toolkit";
import restaurantMocks from "../../../mocks/reataurants";

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
