import { configureStore } from "@reduxjs/toolkit";
import {
  todoReducer,
  addTodo,
  removeTodo,
  changeSearchTerm,
} from "./slices/todoSlice";
import { formReducer, changeName, changeNotes } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    form: formReducer,
  },
});

export {
  store,
  addTodo,
  removeTodo,
  changeSearchTerm,
  changeName,
  changeNotes,
};
