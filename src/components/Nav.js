import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <label className="logo" onClick={handleHomeClick}>
        THEFEW
      </label>
      <div className="hamburger">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>
      </div>

      <div className="nav">
        <div className="nav_list">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About us
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
