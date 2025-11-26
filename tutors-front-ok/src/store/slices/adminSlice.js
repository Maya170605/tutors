import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthService } from '../../api/AuthService';

export const authAction = createAsyncThunk(
  'auth/authAction', //
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthService.auth(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const regAction = createAsyncThunk(
  'auth/regAction', //
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isAuth: false,
  error: null,
  user: null,
  editId: null,
};
const adminSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setTutorToEdit(state, action) {
      state.editId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authAction.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(authAction.rejected, (state, action) => {
      state.isAuth = false;
      state.user = null;
      state.error = action.payload;
    });
    builder.addCase(regAction.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(regAction.rejected, (state, action) => {
      state.isAuth = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

export const selectAdmin = (state) => state.admin;
export const { reducer: adminReducer, actions: adminActions } = adminSlice;
