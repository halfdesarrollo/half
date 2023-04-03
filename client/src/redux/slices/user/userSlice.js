import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  token: null,
  contacts: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.user
    },

    logoutUser: (state, action) => {
      state.user = {}
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
