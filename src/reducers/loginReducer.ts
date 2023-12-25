import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface LoginState {
  logOn: boolean;
}

const initialState = { logOn: false } as LoginState;

export const getlogin = createAsyncThunk(
  "login/getlogin",

  async (a, { rejectWithValue }) => {
    const res = await fetch("httt://ggoogle.com");
    const data = await res.json();
    return data;
  }
);
const loginSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login(state) {
      state.logOn = true;
    },
    logoff(state) {
      state.logOn = false;
    },
  },
  extraReducers: {
    [getlogin.fulfilled.toString()]: (
      state: LoginState,
      action: LoginState
    ) => {
      state.logOn = action.logOn;
    },
  },
});

export const { login, logoff } = loginSlice.actions;
export default loginSlice.reducer;
