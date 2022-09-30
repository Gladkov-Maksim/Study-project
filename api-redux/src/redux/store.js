import { configureStore, combineReducers } from '@reduxjs/toolkit';
import slice from './slise'

const rootReducer = combineReducers({
  response: slice,
})

export const store = configureStore({
  reducer: rootReducer,
});
