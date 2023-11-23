import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface userState {
  userAuth: boolean;
}

const initialState: userState = {
  userAuth: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth: (state, { payload }: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userAuth = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setUserAuth } = userSlice.actions;

export default userSlice;
