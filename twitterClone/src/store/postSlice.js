import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: null
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload.posts
    },
  }
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;