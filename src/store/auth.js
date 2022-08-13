import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  username: null
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.isLoggedIn = true
      state.username = action.payload.username
    },
    loggedOut: state => {
      state.isLoggedIn = false
      state.username = null
    },
  },
})

export const authActions = auth.actions

export default auth.reducer
