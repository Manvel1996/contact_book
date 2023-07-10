export function contactsReducer(state = [], action) {
  if (action.type === "add-contact") {
    return [action.payload, ...state];
  } else if (action.type === "edit-contact") {
    return state.map((el) => {
      if (el.id === action.payload.id) {
        return action.payload;
      }
      return el;
    });
  } else if(action.type === "remove-contact"){
    return state.filter((el) => el.id !== action.payload);
  }
  return state;
}

export const initialContacts = [];

export function contacts(state) {
  return state.contacts;
}

export function addContact(contact) {
  return {
    type: "add-contact",
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
