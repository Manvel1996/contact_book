export function ContactsReducer(state = {}, action) {
  if (action.type === "add-contact") {
    return {
      ...state,
      all: [action.payload, ...state.all],
    };
  } else if (action.type === "add-contact-favorite") {
    return {
      ...state,
      all: [action.payload, ...state.all],
      favorite: [action.payload, ...state.favorite],
    };
  } else if (action.type === "edit-contact") {
    return state.map((el) => {
      if (el.id === action.payload.id) {
        return action.payload;
      }
      return el;
    });
  } else if (action.type === "remove-contact") {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === "contact-page-change") {
    return state;
  }
  return state;
}

export const initialContacts = {
  all: [],
  favorites: [],
  currentPage: 1,
  totalPage: 20,
  list: "All",
};
