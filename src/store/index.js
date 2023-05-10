import { configureStore } from "@reduxjs/toolkit";
import reposSlice from "./reposSlice";

const store = configureStore({
  reducer: {
    repos: reposSlice,
  },
});

export default store;
