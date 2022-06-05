import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {API} from '@services';
import {Credentials} from '@types';

import {AuthState} from './type';

export const authInitialState: AuthState = {
  accessToken: null,
  currentUser: null,
  error: null,
  loading: false,
};

const login = createAsyncThunk(
  'auth/loginUser',
  async (credentials: Credentials, {rejectWithValue}) => {
    try {
      const response: any = await API.login(credentials);
      const data = response.data.data;
      console.log(data);
      return {
        accessToken: data?.accessToken || null,
        currentUser: data?.user || null,
        error: response.data?.message || null,
      } as AuthState;
    } catch (error) {
      console.log('error ', error);
      return rejectWithValue('Login failed');
    }
  },
);

const {actions, reducer} = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    signOut(state) {
      state.accessToken = null;
      state.currentUser = null;
      state.error = null;
    },
    clearErrors(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [login.fulfilled.type]: (
      state,
      {payload: {accessToken, currentUser}}: PayloadAction<AuthState>,
    ) => {
      state.accessToken = accessToken;
      state.currentUser = currentUser;
      state.error = null;
      state.loading = false;
    },
    [login.rejected.type]: (state, {payload}: PayloadAction<AuthState>) => {
      state.error = payload?.error || 'Error';
      state.loading = false;
    },
    [login.pending.type]: state => {
      state.loading = true;
    },
  },
});

export const authActions = {
  ...actions,
  login,
};

export const authReducer = reducer;
