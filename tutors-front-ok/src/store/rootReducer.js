import { combineReducers } from 'redux';
import { adminReducer } from './slices/adminSlice';
import { tutorReducer } from './slices/tutorSlice';

export const rootReducer = combineReducers({
  tutors: tutorReducer,
  admin: adminReducer,
});
