import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Img11 from '../../Assets/img11.png';

function Header() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src={Img11} alt='logo' height="34px" style={{marginRight:"10px"}} />ProctorPro
        </Link>
        <div
          className="menu-icon"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? "x" : "+"}
        </div>
        <ul className={click ? "nav-menu nat" : "nav-menu nav-menu.active2"}>
          <li className="nav-items">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-links ${isActive ? "active" : "inactive"}`
              }
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-items">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-links ${isActive ? "active" : "inactive"}`
              }
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>

          <li className="nav-items">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `nav-links ${isActive ? "active" : "inactive"}`
              }
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Features
            </NavLink>
          </li>

          <li className="nav-items">
            <NavLink
              to="/system"
              className={({ isActive }) =>
                `nav-links ${isActive ? "active" : "inactive"}`
              }
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              System
            </NavLink>
          </li>

          {/* <li className="nav-items">
            <NavLink
              to="/benefits"
              className={({ isActive }) =>
                `nav-links ${isActive ? "active" : "inactive"}`
              }
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Benefits
            </NavLink>
          </li> */}

          <li className="nav-items">
            <NavLink
              to="/signUp"
              className={({ isActive }) =>
                `nav-links-mobile ${isActive ? "active" : "inactive"}`
              }
              activeClassName="active"
              onClick={closeMobileMenu}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
