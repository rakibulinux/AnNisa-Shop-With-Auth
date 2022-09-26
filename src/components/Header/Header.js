import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="Header">
      <img src={logo} alt="" />
      <div className="Links">
        <li>
          <a href="/shop">Order</a>
        </li>
        <li>
          <a href="/order">Order Review</a>
        </li>
        <li>
          <a href="/inventory">Manage Inventory</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </div>
    </nav>
  );
};

export default Header;
