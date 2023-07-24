import { ROUTE } from "../constants/routConstants";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Groups from "../pages/Groups";
import AllContacts from "../pages/AllContacts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

export const privateRoutes = [
  { path: ROUTE.LOGIN, element: Login },
  { path: ROUTE.REGISTER, element: Register },
  { path: ROUTE.HOME, element: Home },
  { path: ROUTE.PROFILE, element: Profile },
  { path: ROUTE.GROUPS, element: Groups },
  { path: ROUTE.ALL_CONTACTS, element: AllContacts },
  { path: "*", element: Error },
];

export const publishRoutes = [
  { path: ROUTE.LOGIN, element: Login },
  { path: ROUTE.REGISTER, element: Register },
  { path: "*", element: Error },
];
