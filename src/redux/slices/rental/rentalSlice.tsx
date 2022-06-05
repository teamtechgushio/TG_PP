import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {API} from '@services';
import {RentalContractPayload} from '@types';

import {RentalState} from './type';

export const rentalInitialState: RentalState = {
  rentalContract: null,
  error: null,
  loading: false,
};

const rentalContract = createAsyncThunk(
  'rental/contract',
  async (payload: RentalContractPayload, {rejectWithValue}) => {
    try {
      const response: any = await API.getRentalContract();
      const data = response.data.data;
      return {
        rentalContract: response.data.data,
        error: response.data?.message || null,
      } as RentalState;
    } catch (error) {
      console.log('error ', error);
      return rejectWithValue('Get Rental Contract failed');
    }
  },
);

const {actions, reducer} = createSlice({
  name: 'rentalState',
  initialState: rentalInitialState,
  reducers: {
    clearErrors(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [rentalContract.fulfilled.type]: (
      state,
      {payload}: PayloadAction<RentalState>,
    ) => {
      state.rentalContract = payload?.rentalContract;
      state.error = null;
      state.loading = false;
    },
    [rentalContract.rejected.type]: (
      state,
      {payload}: PayloadAction<RentalState>,
    ) => {
      state.error = payload?.error || 'Error';
      state.loading = false;
    },
    [rentalContract.pending.type]: state => {
      state.loading = true;
    },
  },
});

export const rentalActions = {
  ...actions,
};

export const rentalReducer = reducer;
