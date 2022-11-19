import { configureStore } from "@reduxjs/toolkit"
import todosReducers from "../reducers/todos"
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducers,
    // filters: filtersReducer,
  },
})
