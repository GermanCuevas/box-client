import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { userApi } from './services/userApi';
// import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer
  // Agrega otros slices según sea necesario
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefoultMiddleware) => getDefoultMiddleware().concat([userApi.middleware])
});

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
