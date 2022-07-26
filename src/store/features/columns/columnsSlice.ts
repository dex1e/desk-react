import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IColumn } from "types";

import { initialState } from "./initialState";

export const columnsSlice = createSlice({
  name: "columns",
  initialState,

  reducers: {
    setColumns: (state, action: PayloadAction<IColumn>) => {
      state.column = action.payload;
    },
  },
});

export const { setColumns } = columnsSlice.actions;

export default columnsSlice.reducer;
