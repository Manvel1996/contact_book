import React from "react";

import { NavLink } from "react-router-dom";

import "./BurgerMenu.scss";

export default function BurgerMenu({
  menuHeader,
  navLinks,
  activeMobileMenu,
  setActiveMobileMenu,
}) {
  const activeStyles = {
    color: "rgb(0, 172, 238)",
  };

  return (
    <div
      className={
        activeMobileMenu ? "burger-menu  burger-menu--active" : "burger-menu"
      }
    >
      <div className="burger-menu-content">
        <div className="burger-menu__header">{menuHeader}</div>
        <ul>
          {navLinks?.map((item) => (
            <li key={item.href} onClick={() => setActiveMobileMenu(false)}>
              <NavLink
                className="burger-menu__link"
                to={item.href}
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
