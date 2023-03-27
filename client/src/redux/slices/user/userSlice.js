import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = { ...action.payload }
    },

    logoutUser: (state, action) => {
      state.user = {}
    },
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer
