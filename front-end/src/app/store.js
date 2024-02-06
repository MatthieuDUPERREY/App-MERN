import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import postReducer from "../feature/post.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});

export default store;
