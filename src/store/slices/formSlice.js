import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "./todoSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    notes: "",
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeNotes(state, action) {
      state.notes = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action) => {
      state.name = "";
      state.notes = "";
    });
  },
});

export const { changeName, changeNotes } = formSlice.actions;
export const formReducer = formSlice.reducer;
