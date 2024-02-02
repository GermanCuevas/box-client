import { convertDateToString } from '@/utils/convertDateToString';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AdminSlice {
  selectedDateCalendar: string | Date;
  deliveryDetails: any;
}
const initialState: AdminSlice = {
  selectedDateCalendar: convertDateToString(new Date()),
  deliveryDetails: null
};

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setSelectedDateCalendar: (state, { payload }: PayloadAction<string>) => {
      state.selectedDateCalendar = payload;
    },
    setDeliveryDetails: (state, { payload }: PayloadAction<any>) => {
      state.deliveryDetails = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setSelectedDateCalendar, setDeliveryDetails } = adminSlice.actions;

export default adminSlice;
