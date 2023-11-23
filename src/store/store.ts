import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer
  // Agrega otros slices según sea necesario
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
