import { createAsyncThunk } from "@reduxjs/toolkit";

import { API } from "../contacts/Api";

import axios from "../../../utils/axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ userName, surname, email, phone, password, photoUrl, gender }) => {
    const { data } = await axios.post(
      API.AUTH,
      {
        userName,
        surname,
        email,
        phone,
        password,
        photoUrl,
        gender,
        contacts: [],
      },
      { headers: { "content-type": "application/json; charset=utf-8" } }
    );

    if (data._id) {
      localStorage.setItem("token", data._id);
    }

    return data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ mailOrPhone, password }) => {
    const { data } = await axios.get(API.AUTH);

    const user = data.filter(
      (el) =>
        (el.phone === mailOrPhone || el.email === mailOrPhone) &&
        password === el.password
    );

    if (user[0]._id) {
      localStorage.setItem("token", user[0]._id);
      return user[0];
    }

    return { _id: 0 };
  }
);

export const checkIsAuth = (state) => !!state.auth.token;

export const authStatus = (state) => state.auth.status;

export const loadingState = (state) => state.auth.isLoading;
