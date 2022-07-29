import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cardsReducer from "./features/cards";
import columnsReducer from "./features/columns";
import commentsReducer from "./features/comments";
import userReducer from "./features/user";

const reducers = combineReducers({
  user: userReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  comments: commentsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
