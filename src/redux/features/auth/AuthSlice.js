import { createSlice } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  getMe,
  editUser,
  addContact,
  editContact,
  removeContact,
  addNewGroup,
} from "./AuthActions";

const initialState = {
  user: null,
  isLoading: false,
  status: null,
  token: null,
  contacts: [],
  groups: [],
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
      state.groups = [];
    },
    clearStatus: (state) => {
      state.status = null;
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
        ? `Welcome ${action.payload?.userName}`
        : action.payload?.message;
      state.token = action.payload?._id ? action.payload?._id : null;
      state.user = action.payload?._id ? action.payload : null;
      state.groups = action.payload?._id ? action.payload?.groups : [];
      state.contacts = [];
    },
    [registerUser.rejected]: (state, action) => {
      state.status = action.payload?.message;
      state.isLoading = false;
    },

    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?._id
        ? `Welcome ${action.payload?.userName}`
        : action.payload?.message;
      state.token = action.payload?._id ? action.payload?._id : null;
      state.user = action.payload?._id ? action.payload : null;
      state.contacts = action.payload?._id ? action.payload?.contacts : [];
      state.groups = action.payload?._id ? action.payload?.groups : [];
    },
    [loginUser.rejected]: (state, action) => {
      state.status = action.payload?.message;
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
      state.contacts = action.payload?.contacts;
      state.groups = action.payload?.groups;
    },
    [getMe.rejected]: (state) => {
      state.status = "Server error";
      state.isLoading = false;
    },

    [editUser.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [editUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = null;
    },
    [editUser.rejected]: (state) => {
      state.status = "Server error";
      state.isLoading = false;
    },

    [addContact.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = null;
    },
    [addContact.rejected]: (state, action) => {
      state.status = action.payload?.message;
      state.isLoading = false;
    },

    [editContact.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [editContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = null;
    },
    [editContact.rejected]: (state, action) => {
      state.status = action.payload?.message;
      state.isLoading = false;
    },

    [removeContact.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [removeContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = null;
    },
    [removeContact.rejected]: (state, action) => {
      state.status = action.payload?.message;
      state.isLoading = false;
    },

    [addNewGroup.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [addNewGroup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload?.message;
      state.user = null;
    },
    [addNewGroup.rejected]: (state, action) => {
      state.status = action.payload?.message;
      state.isLoading = false;
    },
  },
});

export const { logOut, clearStatus } = authSlice.actions;

export default authSlice.reducer;
