import { createSlice } from '@reduxjs/toolkit'

// to do 
export const todoSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    Add: (state, action) => {
      return([...state, action.payload])
    }
  }
})

// Action creators are generated for each case reducer function
export const { Add } = todoSlice.actions

export default todoSlice.reducer