import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "./features/cards";
import columnsReducer from "./features/columns";
import commentsReducer from "./features/comments";
import userReducer from "./features/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
