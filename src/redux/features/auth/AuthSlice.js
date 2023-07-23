import { createSlice } from "@reduxjs/toolkit";

import { registerUser, loginUser, getMe, edituser } from "./AuthActions";

const initialState = {
  user: null,
  isLoading: false,
  status: null,
  token: null,
  contacts: [],
};

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
      state.status = action.payload?._id
        ? "Success"
        : "User with the same email or number already exists";
      state.token = action.payload?._id ? action.payload?._id : null;
      state.user = action.payload?._id ? action.payload : null;
    },
    [registerUser.rejected]: (state) => {
      state.status = "Server error";
      state.isLoading = false;
    },

    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?._id
        ? "Success"
        : "Incorrect login or password";
      state.token = action.payload?._id ? action.payload?._id : null;
      state.user = action.payload?._id ? action.payload : null;
      state.contacts = action.payload?._id ? action.payload.contacts : [];
    },
    [loginUser.rejected]: (state) => {
      state.status = "Server error";
      state.isLoading = false;
    },

    [getMe.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getMe.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = null;
      state.user = action.payload;
      state.token = action.payload?._id;
    },
    [getMe.rejected]: (state) => {
      state.status = "Server error";
      state.isLoading = false;
    },

    [edituser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [edituser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = null;
    },
    [edituser.rejected]: (state) => {
      state.status = "Server error";
      state.isLoading = false;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
