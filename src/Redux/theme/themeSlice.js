import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'counter',
  initialState: {
    color: ''
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {changeColor } = themeSlice.actions

export default themeSlice.reducer