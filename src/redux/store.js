import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";

export default configureStore({
  reducer: {
    cars: carsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
