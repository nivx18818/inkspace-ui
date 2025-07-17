import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authSlice from "./slices/auth.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    logger,
  ],
});

setupListeners(store.dispatch);

export default store;
