import { CONTACT_TYPE } from "../../../constants/contactConstants";

export function getCurrentPage(state) {
  return state.contacts.currentPage;
}

export function getContacts(state) {
  let contacts = [];

  if (state.contacts.type !== CONTACT_TYPE.ALL || state.contacts.search) {
    contacts = state.contacts.contacts.filter((el) => {
      if (
        (el.type === state.contacts.type ||
          state.contacts.type === CONTACT_TYPE.ALL) &&
        (el.userName
          .toLowerCase()
          .includes(state.contacts.search.toLowerCase()) ||
          el.surname
            .toLowerCase()
            .includes(state.contacts.search.toLowerCase()) ||
          el.email
            .toLowerCase()
            .includes(state.contacts.search.toLowerCase()) ||
          el.phone.toLowerCase().includes(state.contacts.search.toLowerCase()))
      ) {
        return true;
      }
    });
  } else {
    contacts = state.contacts.contacts;
  }

  return contacts;
}

export function getContactsType(state) {
  return state.contacts.type;
}
