import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todos"
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    // filters: filtersReducer,
  },
})
