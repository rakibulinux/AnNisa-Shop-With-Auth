import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="Header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
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
        {user?.uid ? (
          <button onClick={logOut} className="logout-btn">
            SignOut
          </button>
        ) : (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "isActive" : undefined
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "isActive" : undefined
                }
                to="/signup"
              >
                SignUp
              </NavLink>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
