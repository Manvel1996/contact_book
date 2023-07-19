import { configureStore } from "@reduxjs/toolkit";

import contactSlice from "./features/contacts/ContactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});
