import { createAsyncThunk } from "@reduxjs/toolkit";

import bcrypt from "bcryptjs";

import { CURRENT_API } from "../../../constants/Api";
import { AUTH_TOKEN } from "../../../constants/authConstants";

import axios from "../../../utils/axios";



export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ userName, surname, email, phone, password, photoUrl, gender }) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { data } = await axios.get(CURRENT_API);

    let uniqueUser = [];

    if (data) {
      uniqueUser = data?.filter(
        (el) => el.phone === phone || el.email === email
      );
    }

    try {
      if (uniqueUser.length > 0) {
        throw false;
      }

      const { data } = await axios.post(
        CURRENT_API,
        {
          userName,
          surname,
          email,
          phone,
          password: hashedPassword,
          photoUrl,
          gender,
          contacts: [],
        },
        { headers: { "content-type": "application/json; charset=utf-8" } }
      );

      if (data._id) {
        localStorage.setItem(AUTH_TOKEN, data._id);
      }

      return data;
    } catch (error) {
      return {};
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ mailOrPhone, password }) => {
    const { data } = await axios.get(CURRENT_API);

    const user = data.filter(
      (el) => el.phone === mailOrPhone || el.email === mailOrPhone
    );

    try {
      if (user[0]._id) {
        const isPasswordCorrect = await bcrypt.compare(
          password,
          user[0].password
        );
        if (isPasswordCorrect) {
          localStorage.setItem(AUTH_TOKEN, user[0]._id);
          return user[0];
        } else throw false;
      }
    } catch (error) {
      return {};
    }
  }
);

export const getMe = createAsyncThunk("auth/getMe", async () => {
  const { data } = await axios.get(CURRENT_API);

  const user = data.filter((el) => el._id === localStorage.getItem(AUTH_TOKEN));

  return user[0];
});

export const edituser = createAsyncThunk(
  "auth/editUser",
  async ({
    id,
    userName,
    surname,
    email,
    phone,
    password,
    newPassword,
    photoUrl,
    gender,
    contacts,
  }) => {
    try {
      const { data } = await axios.get(CURRENT_API);

      const user = data.filter(
        (el) => el._id === localStorage.getItem(AUTH_TOKEN)
      );

      if (user[0]._id) {
        const isPasswordCorrect = await bcrypt.compare(
          password,
          user[0].password
        );

        if (isPasswordCorrect) {
          const hashedPassword = await bcrypt.hash(newPassword, 10);

          const { data } = await axios.put(
            CURRENT_API + "/" + id,
            {
              userName,
              surname,
              email,
              phone,
              password: hashedPassword,
              photoUrl,
              gender,
              contacts,
            },
            { headers: { "content-type": "application/json; charset=utf-8" } }
          );

          return {message:"Change user sucsess"};
        }return {message:"Change user faeil"}
      }
    } catch (error) {
      return {
        message: "Incorrect password",
      };
    }
  }
);

export const checkIsAuth = (state) => !!state.auth?.token;

export const authStatus = (state) => state.auth?.status;

export const loadingState = (state) => state.auth?.isLoading;

export const userInfo = (state) => state.auth?.user;
