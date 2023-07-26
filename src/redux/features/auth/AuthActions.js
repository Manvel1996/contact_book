import { createAsyncThunk } from "@reduxjs/toolkit";

import bcrypt from "bcryptjs";

import { CURRENT_API } from "../../../constants/Api";
import { AUTH_TOKEN } from "../../../constants/authConstants";
import { CONTACT_GROUP } from "../../../constants/contactConstants";

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
        return { message: "User with the same email or phone already exists" };
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
          groups: [CONTACT_GROUP.ALL, CONTACT_GROUP.FAVORITE],
        },
        { headers: { "content-type": "application/json; charset=utf-8" } }
      );

      if (data._id) {
        localStorage.setItem(AUTH_TOKEN, data._id);
      }

      return data;
    } catch (error) {
      return { message: "Server error" };
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
        }

        return { message: "Incorrect login or password" };
      }
    } catch (error) {
      return { message: "Server error" };
    }
  }
);

export const getMe = createAsyncThunk("auth/getMe", async () => {
  const { data } = await axios.get(
    CURRENT_API + "/" + localStorage.getItem(AUTH_TOKEN)
  );

  return data;
});

export const editUser = createAsyncThunk(
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
      const { data } = await axios.get(CURRENT_API + "/" + id);

      if (data) {
        const isPasswordCorrect = await bcrypt.compare(password, data.password);

        if (isPasswordCorrect) {
          let hashedPassword = null;
          if (newPassword.length > 0) {
            hashedPassword = await bcrypt.hash(newPassword, 10);
          }

          await axios.put(
            CURRENT_API + "/" + id,
            {
              userName,
              surname,
              email,
              phone,
              password: hashedPassword ? hashedPassword : data.password,
              photoUrl,
              gender,
              contacts,
              groups: data.groups,
            },
            { headers: { "content-type": "application/json; charset=utf-8" } }
          );

          return { message: "Change user success" };
        }
        return { message: "Change user fail" };
      }
    } catch (error) {
      return {
        message: "Incorrect user",
      };
    }
  }
);

export const addContact = createAsyncThunk(
  "auth/addContact",
  async ({ newContact, userId }) => {
    try {
      const { data } = await axios.get(CURRENT_API + "/" + userId);

      if (data) {
        const newUser = {
          userName: data.userName,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          password: data.password,
          photoUrl: data.photoUrl,
          gender: data.gender,
          contacts: [newContact, ...data.contacts],
          groups: data.groups,
        };

        await axios.put(CURRENT_API + "/" + userId, newUser, {
          headers: { "content-type": "application/json; charset=utf-8" },
        });

        return { message: "Add contact success" };
      }
    } catch (error) {
      return { message: "Add contact fail" };
    }
  }
);

export const editContact = createAsyncThunk(
  "auth/editContact",
  async ({ newContact, userId }) => {
    try {
      const { data } = await axios.get(CURRENT_API + "/" + userId);

      const contacts = data?.contacts?.map((el) => {
        if (el.id === newContact.id) {
          return newContact;
        }
        return el;
      });

      if (data) {
        const newUser = {
          userName: data.userName,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          password: data.password,
          photoUrl: data.photoUrl,
          gender: data.gender,
          contacts,
          groups: data.groups,
        };

        await axios.put(CURRENT_API + "/" + userId, newUser, {
          headers: { "content-type": "application/json; charset=utf-8" },
        });

        return { message: "Edit contact success" };
      }
    } catch (error) {
      return { message: "Edit contact fail" };
    }
  }
);

export const removeContact = createAsyncThunk(
  "auth/removeContact",
  async ({ id, userId }) => {
    try {
      const { data } = await axios.get(CURRENT_API + "/" + userId);

      const contacts = data?.contacts?.filter((el) => el.id !== id);

      if (data) {
        const newUser = {
          userName: data.userName,
          surname: data.surname,
          email: data.email,
          phone: data.phone,
          password: data.password,
          photoUrl: data.photoUrl,
          gender: data.gender,
          contacts,
          groups: data.groups,
        };

        await axios.put(CURRENT_API + "/" + userId, newUser, {
          headers: { "content-type": "application/json; charset=utf-8" },
        });

        return { message: "Remove contact success" };
      }
    } catch (error) {
      return { message: "Remove contact fail" };
    }
  }
);

export const checkIsAuth = (state) => !!state.auth?.token;

export const authStatus = (state) => state.auth?.status;

export const loadingState = (state) => state.auth?.isLoading;

export const userInfo = (state) => state.auth?.user;

export const getContacts = (state) => state.auth?.contacts;

export const getContactsGroups = (state) => state.auth?.groups;

export const getUserId = (state) => state.auth?.user?._id;
