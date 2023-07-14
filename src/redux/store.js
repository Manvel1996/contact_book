import { createStore, combineReducers } from "redux";

import {
  ContactsReducer,
  initialContacts,
} from "./features/contacts/ContactsReducer";

const store = createStore(
  combineReducers({
    contacts: ContactsReducer,
  }),
  {
    contacts: initialContacts,
  }
);

export default store;
