import { configureStore } from "@reduxjs/toolkit";
import tripreducer from "./src/Slice/tripSlice";

export const store = configureStore({
  reducer: {
    trip: tripreducer,
  },
});
