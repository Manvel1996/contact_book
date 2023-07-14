export function contacts(state) {
  if (state.contacts.list === "Favorite") {
    return state.contacts.favorite;
  }
  return state.contacts.all;
}

export function addContact(contact) {
  return {
    type: "add-contact",
    payload: contact,
  };
}

export function addContactFavorite(contact) {
  return {
    type: "add-contact-favorite",
    payload: contact,
  };
}

export function editContact(contact) {
  return {
    type: "edit-contact",
    payload: contact,
  };
}

export function removeContact(id) {
  return {
    type: "remove-contact",
    payload: id,
  };
}

export function contactPageChange(num) {
  return {
    type: "contact-page-change",
    payload: num,
  };
}
