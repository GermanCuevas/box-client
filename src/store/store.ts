import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { userApi } from './services/userApi';
import { packageApi } from './services/packageApi';
// import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [packageApi.reducerPath]: packageApi.reducer
  // Agrega otros slices según sea necesario
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefoultMiddleware) =>
    getDefoultMiddleware().concat([userApi.middleware, packageApi.middleware])
});

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
