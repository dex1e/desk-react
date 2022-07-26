import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types";

import { initialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserName: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
