import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../features/post/PostSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
