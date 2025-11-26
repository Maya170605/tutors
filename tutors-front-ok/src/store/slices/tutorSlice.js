import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TutorService } from '../../api/TutorService';

export const fetchTutors = createAsyncThunk(
  'tutors/fetchTutors', //
  async function (query, { rejectWithValue }) {
    try {
      return await TutorService.getAllTutors(query);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchSingleTutor = createAsyncThunk(
  'tutors/fetchSingleTutor', //
  async function (id, { rejectWithValue }) {
    try {
      return await TutorService.getTutor(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createTutor = createAsyncThunk(
  'tutors/createTutor', //
  async function (tutor, { rejectWithValue, dispatch }) {
    try {
      const data = await TutorService.addTutor(tutor);
      dispatch(tutorActions.addTutor(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeTutor = createAsyncThunk(
  'tutors/removeTutor', //
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const data = await TutorService.removeTutor(id);
      dispatch(tutorActions.removeTutor(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTutor = createAsyncThunk(
  'tutors/updateTutor', //
  async function (tutor, { rejectWithValue, dispatch }) {
    try {
      const data = await TutorService.updateTutor(tutor.id, tutor);
      dispatch(tutorActions.updateTutor(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const initialState = {
  tutors: [],
  tutor: {},
  isLoading: false,
  error: null,
};
const setStart = (state) => {
  state.isLoading = true;
  state.error = null;
};
const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tutorSlice = createSlice({
  name: 'tutors',
  initialState,
  reducers: {
    addTutor(state, action) {
      state.tutors.push(action.payload);
    },
    removeTutor(state, action) {
      state.tutors = state.tutors.filter((tutor) => tutor.id !== action.payload);
    },
    updateTutor(state, action) {
      const found = state.tutors.find((tutor) => tutor.id == action.payload.id);
      found = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTutors.pending, setStart);
    builder.addCase(fetchTutors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tutors = action.payload;
    });
    builder.addCase(fetchTutors.rejected, setError);

    builder.addCase(fetchSingleTutor.pending, setStart);
    builder.addCase(fetchSingleTutor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tutor = action.payload;
    });
    builder.addCase(fetchSingleTutor.rejected, setError);
  },
});

export const { reducer: tutorReducer, actions: tutorActions } = tutorSlice;
