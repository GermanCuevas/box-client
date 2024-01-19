import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  userInfo: object | null;
  userAuth: boolean | null;
}
// const loadUserAuthFromLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const storedUserAuth = localStorage.getItem('userAuth');
//     return storedUserAuth ? JSON.parse(storedUserAuth) : true;
//   }
//   return false;
// };

const initialState: userState = {
  userInfo: null,
  userAuth: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.userAuth = true;

      localStorage.setItem('userAuth', JSON.stringify(payload));
    },
    setUserInfo: (state, { payload }: PayloadAction<object>) => {
      state.userInfo = payload;

      state.userAuth = true;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUserAuth, setUserInfo } = userSlice.actions;

export default userSlice;
