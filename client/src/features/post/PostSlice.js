import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PostAPI from './PostAPI';

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

const responseErrorMessage = (error) => {
  const isErrorResponse = error.response;
  const isResponseData = error.response.data && error.response.data.message;
  const isErrorResponseData = isErrorResponse || isResponseData;
  const message = isErrorResponseData || error.message || error.toString;
  return message;
};

export const createPost = createAsyncThunk(
  'posts/create',
  async (postData, thunkAPI) => {
    try {
      return await PostAPI.createPost(postData);
    } catch (error) {
      const message = responseErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPosts = createAsyncThunk('posts/getAll', async (thunkAPI) => {
  try {
    return await PostAPI.getPosts();
  } catch (error) {
    const message = responseErrorMessage(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const getPost = createAsyncThunk(
  'posts/getOne',
  async (id, thunkAPI) => {
    try {
      return await PostAPI.getPost(id);
    } catch (error) {
      const message = responseErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePost = createAsyncThunk(
  'posts/updateOne',
  async (id, thunkAPI) => {
    try {
      return await PostAPI.updatePost(id);
    } catch (error) {
      const message = responseErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deleteOne',
  async (id, thunkAPI) => {
    try {
      return await PostAPI.deletePost(id);
    } catch (error) {
      const message = responseErrorMessage(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Create post builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // Read all post builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.push(action.payload);
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;

export default postSlice.reducer;
