import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Navigate } from "react-router-dom";

// import { checkIsAuth, logOut } from "../redux/features/auth/AuthSlice";
// import { toast } from "react-toastify";

import "./Navbar.scss";
import { ROUTE } from "../../../constants/routConstants";

export default function Navbar() {
  //   const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();

  const isAuth = true;

  function logOutHandler() {
    dispatch(logOut());
    localStorage.removeItem("token");
    // toast("Уou are logged out")
  }
  return (
    <div className="navbar">
      <a className="navbar-link" href="https://aparg.com/">
        <img
          className="navbar__logo"
          src="https://aparg.com/wp-content/uploads/2023/07/logo-black.png"
          alt="aparg"
        />
      </a>
      {isAuth && (
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink to={ROUTE.HOME} className="navbar-link">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to={ROUTE.PROFILE} className="navbar-link">
              My Profile
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to={ROUTE.GROUPS} className="navbar-link">
              Groups
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to={ROUTE.ALL_CONTACTS} className="navbar-link">
              All Contacts
            </NavLink>
          </li>
        </ul>
      )}
      <div className="">
        {isAuth ? (
          <Link to={ROUTE.LOGIN} onClick={logOutHandler} className="navbar-link">
            Logout
          </Link>
        ) : (
          <Link to={ROUTE.LOGIN} className="navbar-link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
