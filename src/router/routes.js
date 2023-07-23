import { ROUTE } from "../constants/routConstants";

import ContactsBook from "../pages/ContactsBook";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const privateRoutes = [
  { path: ROUTE.LOGIN, element: Login },
  { path: ROUTE.REGISTER, element: Register },
  { path: ROUTE.HOME, element: ContactsBook },
  { path: ROUTE.PROFILE, element: Profile },
  { path: ROUTE.GROUPS, element: ContactsBook },
  { path: ROUTE.ALL_CONTACTS, element: ContactsBook },
  { path: "*", element: Error },
];

export const publishRoutes = [
  { path: ROUTE.LOGIN, element: Login },
  { path: ROUTE.REGISTER, element: Register },
];
