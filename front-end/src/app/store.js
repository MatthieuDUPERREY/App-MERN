import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // ...d'autres reducers
  },
});

export default store;
