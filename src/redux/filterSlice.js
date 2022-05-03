import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "filter",
  initialState: {
    filter: "all",
    filters: ["all", "completed", "uncompleted"],
  },
  reducers: {
    switchFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { switchFilter } = slice.actions;

export default slice.reducer;
