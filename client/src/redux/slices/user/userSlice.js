import { createSlice } from '@reduxjs/toolkit';
import contacts from '../../../mocks/contactos';

const initialState = {
  user: {},
  token: null,
  contacts: contacts,
  creditCard: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user;
    },

    logoutUser: (state, action) => {
      state.user = {};
    },
    registerUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    addCreditCardToPay: (state, action) => {
      state.creditCard = action.payload
    }
  },
});

export const {
  loginUser,
  logoutUser,
  registerUser,
  addCreditCardToPay
} = userSlice.actions;
export default userSlice.reducer;
