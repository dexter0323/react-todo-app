import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    add(state, action) {
      state.data = [
        ...state.data,
        {
          id: action.payload.id,
          name: action.payload.name,
          completed: false,
        },
      ]
    },
    remove(state, action) {
      state.data = state.data.filter((t) => t.id !== action.payload.id)
    },
    toggle(state, action) {
      const todo = state.data.find((t) => t.id === action.payload.id)
      todo.completed = !todo.completed
    },
    setTodos(state, action) {
      state.data = action.payload
    },
  },
})

export const { add, toggle, remove, setTodos } = slice.actions
export default slice.reducer
