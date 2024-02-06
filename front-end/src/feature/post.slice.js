import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async (_, thunkAPI) => {
  axios
    .get("http://localhost:5700/post/")
    .then((res) => thunkAPI.dispatch(getPostsSucess(res.data)));
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: [],
  },
  reducers: {
    getPostsSucess: (state, { payload }) => {
      state.postsData = payload;
    },
    createPost: (state, { payload }) => {
      state.postsData.push(payload);
    },
    editPost: (state, { payload }) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === payload[1]) {
          return {
            ...post,
            message: payload[0],
          };
        } else {
          return post;
        }
      });
    },
    deletePost: (state, { payload }) => {
      state.postsData = state.postsData.filter((post) => post._id !== payload);
    },
    likePost: (state, { payload }) => {
      state.postsData = state.postsData.map((post) => {
        if (post._id === payload[1]) {
          return {
            ...post,
            likers: [...post.lkers, payload[0]],
          };
        } else {
          return post;
        }
      });
    },
  },
  dislikePost: (state, { payload }) => {
    state.postsData = state.postsData.map((post) => {
      if (post._id === payload[1]) {
        return {
          ...post,
          likers: post.likers.filter((userId) => userId !== payload[0]),
        };
      } else {
        return post;
      }
    });
  },
});

export const {
  getPostsSucess,
  createPost,
  editPost,
  deletePost,
  like,
  dislike,
} = postSlice.actions;
export default postSlice.reducer;
