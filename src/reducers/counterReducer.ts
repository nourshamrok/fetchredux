import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState = { value: 2 } as CounterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.value += 1;
    },
    decrease(state) {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
