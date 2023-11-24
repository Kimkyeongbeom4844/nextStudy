import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: number } = {
  value: 0,
};

const todoListReducer = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement } = todoListReducer.actions;

export default todoListReducer.reducer;
