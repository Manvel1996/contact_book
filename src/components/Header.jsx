import React, { useState } from "react";

import Navbar from "./UI/navbar/Navbar";
import BurgerMenu from "./UI/burgerMenu/BurgerMenu";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ModalConfirm from "./UI/confirmModal/ModalConfirm";

import { checkIsAuth } from "../redux/features/auth/AuthActions";
import { logOut } from "../redux/features/auth/AuthSlice";

import { ROUTE } from "../constants/routConstants";
import { AUTH_TOKEN } from "../constants/authConstants";

import "../assets/styles/components/Header.scss";

export default function Header() {
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navLinks = isAuth
    ? [
        { value: "Home", href: ROUTE.HOME },
        { value: "My Profile", href: ROUTE.PROFILE },
        { value: "Groups", href: ROUTE.GROUPS },
        { value: "All Contacts", href: ROUTE.ALL_CONTACTS },
      ]
    : [];

  const logger = {
    value: isAuth ? "Logout" : "Login",
    href: isAuth ? null : ROUTE.LOGIN,
  };

  function confirmFunc() {
    dispatch(logOut());
    localStorage.removeItem(AUTH_TOKEN);
    toast("Уou are logged out");
    navigate(ROUTE.LOGIN);
  }

  function openConfirm() {
    setVisibleConfirm(true);
  }

  return (
    <header className="header">
      <NavLink to="/" className="header-link">
        <img
          className="header__logo"
          src="https://aparg.com/wp-content/uploads/2023/07/logo-black.png"
          alt="aparg"
        />
      </NavLink>

      <Navbar navLinks={navLinks} logger={logger} openConfirm={openConfirm} />

      <div
        className={
          activeMobileMenu ? "mobile-menu mobile-menu--close" : "mobile-menu"
        }
        onClick={() => setActiveMobileMenu(!activeMobileMenu)}
      >
        <span />
      </div>

      <BurgerMenu
        navLinks={navLinks}
        menuHeader="Contacts list"
        activeMobileMenu={activeMobileMenu}
        setActiveMobileMenu={setActiveMobileMenu}
      />

      <ModalConfirm
        title="Are you sure you want to log out?"
        visibleConfirm={visibleConfirm}
        setVisibleConfirm={setVisibleConfirm}
        confirmFunc={confirmFunc}
      />
    </header>
  );
}
