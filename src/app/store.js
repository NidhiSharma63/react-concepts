import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/Counter/CounterSlice';
import themeReducer from '../Redux/theme/themeSlice';
import todoReducer from '../TODO/todoListSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    todo: todoReducer,
  }
})
