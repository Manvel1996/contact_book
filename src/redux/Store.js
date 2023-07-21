import { configureStore } from "@reduxjs/toolkit";

import contactSlice from "./features/contacts/ContactSlice";
import authSlice from "./features/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    auth: authSlice,
  },
});
