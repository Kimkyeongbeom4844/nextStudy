import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Counter {
  value: number;
}

const initialState: Counter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Counter) => {
      state.value += 1;
    },
    decrement: (state: Counter) => {
      state.value -= 1;
    },
    incrementByAmount: (state: Counter, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
