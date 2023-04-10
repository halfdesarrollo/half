import { createSlice } from '@reduxjs/toolkit';
import contacts from '../../../mocks/contactos';

const initialState = {
  user: {},
  token: null,
  contacts: contacts,
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
  },
});

export const { loginUser, logoutUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
