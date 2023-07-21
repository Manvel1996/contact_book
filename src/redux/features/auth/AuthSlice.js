import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { registerUser, loginUser } from "./AuthActions";

import axios from "../../../utils/axios";

import { API } from "../contacts/Api";

const initialState = {
  user: null,
  isLoading: false,
  status: null,
  token: null,
  contacts: [],
};

export const getMe = createAsyncThunk("auth/getMe", async () => {
  try {
    const { data } = await axios.get(API.AUTH);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.status = null;
      state.contacts = [];
    },
  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = "Success";
      state.token = action.payload?._id;
      state.user = action.payload;
    },
    [registerUser.rejected]: (state) => {
      state.status = "FAIL";
      state.isLoading = false;
    },

    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?._id !== 0 ? "Success" : "User not a found";
      state.token = action.payload?._id !== 0 ? action.payload?._id : null;
      state.user = action.payload?._id !== 0 ? action.payload : null;
    },
    [loginUser.rejected]: (state) => {
      state.status = "FAIL";
      state.isLoading = false;
    },

    [getMe.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
      state.info = null;
    },
    [getMe.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload?.user;
      state.token = action.payload?.token;
    },
    [getMe.rejected]: (state) => {
      state.status = "FAIL";
      state.isLoading = false;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
