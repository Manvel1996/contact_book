import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ModalConfirm from "../confirmModal/ModalConfirm";

import { checkIsAuth } from "../../../redux/features/auth/AuthActions";
import { logOut } from "../../..//redux/features/auth/AuthSlice";

import { ROUTE } from "../../../constants/routConstants";
import { AUTH_TOKEN } from "../../../constants/authConstants";

import "./Navbar.scss";

export default function Navbar() {
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function confirmFunc() {
    dispatch(logOut());
    localStorage.removeItem(AUTH_TOKEN);
    toast("Уou are logged out");
    navigate(ROUTE.LOGIN);
  }

  const activeStyles = {
    color: "white",
  };

  return (
    <div className="navbar">
      <a className="navbar-link" href="/">
        <img
          className="navbar__logo"
          src="https://aparg.com/wp-content/uploads/2023/07/logo-black.png"
          alt="aparg"
        />
      </a>
      {isAuth && (
        <ul className="navbar-list">
          <li className={"navbar-item"}>
            <NavLink
              to={ROUTE.HOME}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              className="navbar-link"
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to={ROUTE.PROFILE}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              className="navbar-link"
            >
              My Profile
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to={ROUTE.GROUPS}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              className="navbar-link"
            >
              Groups
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to={ROUTE.ALL_CONTACTS}
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              className="navbar-link"
            >
              All Contacts
            </NavLink>
          </li>
        </ul>
      )}
      <div className="">
        {isAuth ? (
          <Link onClick={() => setVisibleConfirm(true)} className="navbar-link">
            Logout
          </Link>
        ) : (
          <Link to={ROUTE.LOGIN} className="navbar-link">
            Login
          </Link>
        )}
      </div>

      <ModalConfirm
        title="Are you sure you want to log out?"
        visibleConfirm={visibleConfirm}
        setVisibleConfirm={setVisibleConfirm}
        confirmFunc={confirmFunc}
      />
    </div>
  );
}
