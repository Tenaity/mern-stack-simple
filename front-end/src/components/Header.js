import React, { useContext } from "react";
import AppContext from "./AppContext";
import "../css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const { user } = state;
  const signOut = () => {
    localStorage.removeItem("token");
    dispatch({ type: "CURRENT_USER", payload: null });
  };
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">Twitter</Link>
      </h1>
      <nav>
        <ul className="main-nav">
          {user ? (
            <>
              <li>
                <span className="user-name">Hello, {user.userName}</span>
              </li>
              <li onClick={() => signOut()}>
                <a>Sign out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {/* <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <span className="user-name">Hello, TenCapy</span>
          </li>
          <li>
            <Link to="/">Sign Out</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
