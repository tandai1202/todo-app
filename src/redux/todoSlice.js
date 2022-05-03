import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, name: "Learn Yoga", completed: false },
    { id: 2, name: "Learn Redux", completed: true },
    { id: 3, name: "Learn JavaScript", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((n) => n.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const completedId = state.find((todo) => todo.id === action.payload);
      if (completedId) {
        completedId.completed = !completedId.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = slice.actions;

export default slice.reducer;
