import { createStore, combineReducers } from "redux";

import { contactsReducer, initialContacts } from "./features/contacts/ContactsSlice";




const store = createStore(
  combineReducers({
    contacts: contactsReducer,
  }),
  {
    contacts: initialContacts,
  }
);

export default store;
