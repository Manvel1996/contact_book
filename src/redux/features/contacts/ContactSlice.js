import { createSlice } from "@reduxjs/toolkit";

import {
  CONTACT_PAGE_GET_COUNT,
  CONTACT_TYPE,
} from "../../../constants/contactConstants";

const testUsers = [
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da",
    userName: "wwwwwwww0",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da1",
    userName: "wwwwwwww1",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da2",
    userName: "wwwwwwww2",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3",
    userName: "wwwwwwww3",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da4",
    userName: "wwwwwwww4",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3as",
    userName: "wwwwwwww5",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da36",
    userName: "wwwwwwww6",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "ONLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da37452",
    userName: "wwwwwwww7",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da388",
    userName: "wwwwwwww8",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "FAVORITE",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3584",
    userName: "wwwwwwww9",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da310",
    userName: "wwwwwwww10",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da311",
    userName: "wwwwwwww11",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31213",
    userName: "wwwwwwww13",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3125641",
    userName: "wwwwwwww14",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31215",
    userName: "wwwwwwww15",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31216",
    userName: "wwwwwwww16",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "OFFLINE",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da318",
    userName: "wwwwwwww17",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da318451",
    userName: "wwwwwwww18",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3166662",
    userName: "wwwwwwww19",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31220",
    userName: "wwwwwwww20",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31221goi",
    userName: "wwwwwwww21",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31222",
    userName: "wwwwwwww22",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da312236",
    userName: "wwwwwwww23",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31224",
    userName: "wwwwwwww24",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },

  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31225",
    userName: "wwwwwwww25",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31226",
    userName: "wwwwwwww26",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31227",
    userName: "wwwwwwww27",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31228",
    userName: "wwwwwwww28",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31229",
    userName: "wwwwwwww29",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },

  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31230",
    userName: "wwwwwwww30",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31231",
    userName: "wwwwwwww31",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31232",
    userName: "wwwwwwww32",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31233",
    userName: "wwwwwwww33",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31234",
    userName: "wwwwwwww34",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31235",
    userName: "wwwwwwww35",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3123265",
    userName: "wwwwwwww36",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31237",
    userName: "wwwwwwww37",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3123538",
    userName: "wwwwwwww38",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da31239",
    userName: "wwwwwwww39",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3123540",
    userName: "wwwwwwww40",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3123541",
    userName: "wwwwwwww41",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
  {
    id: "37c20544-2925-4b2a-41e5-c2fea77a78da3123542",
    userName: "wwwwwwww42",
    surname: "wwwwwww11",
    email: "d11asdsa@mail.ru",
    phone: "+(374)30322222",
    photoUrl:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    status: "true",
    type: "ALL",
  },
];

const initialState = {
  contacts: testUsers,
  currentPage: 1,
  totalPage: CONTACT_PAGE_GET_COUNT,
  type: CONTACT_TYPE.ALL,
  search: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    changeContactsType: (state, action) => {
      state.type = action.payload;
      state.currentPage = 1;
    },

    changeContactsSearch: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1;
    },

    addContact: (state, action) => {
      state.contacts.unshift(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter((el) => el.id !== action.payload);
    },

    editContact: (state, action) => {
      state.contacts = state.contacts.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload;
        }
        return el;
      });
    },

    contactPageChange: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  changeContactsType,
  changeContactsSearch,
  addContact,
  removeContact,
  editContact,
  contactPageChange,
} = contactSlice.actions;

export default contactSlice.reducer;
