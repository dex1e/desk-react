import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { IRenameColumnPayload } from "./types";

export const columnsSlice = createSlice({
  name: "columns",
  initialState,

  reducers: {
    renameColumn: (state, action: PayloadAction<IRenameColumnPayload>) => {
      const { columnId, newTitle } = action.payload;
      state.columns[columnId].title = newTitle;
    },
  },
});

export const { renameColumn } = columnsSlice.actions;

export default columnsSlice.reducer;
