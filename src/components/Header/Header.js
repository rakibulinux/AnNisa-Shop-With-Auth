import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="Header">
      <img src={logo} alt="" />
      <div className="Links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/order"
          >
            Order
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/order-review"
          >
            Order Review
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/inventory"
          >
            Manage Inventory
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : undefined)}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </div>
    </nav>
  );
};

export default Header;
