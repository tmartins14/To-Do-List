import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addTodo(state, action) {
      state.date.push({
        name: action.payload.name,
        notes: action.payload.notes,
        id: nanoid(),
      });
    },
    removeTodo(state, action) {
      const updated = state.data.filter((todo) => {
        return todo.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
