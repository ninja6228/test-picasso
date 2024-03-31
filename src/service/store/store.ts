import { configureStore } from "@reduxjs/toolkit";
import { apiPost } from "../api/apiPost";

const store = configureStore({
  reducer: { [apiPost.reducerPath]: apiPost.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPost.middleware),
});

export default store;