import React from "react";
import "./Navber.css";
import { NavLink } from "react-router-dom";

function Navber() {
  return (
    <nav>
      <div className="logo">
        <img src={require("../../../Asists/images/logos/logo.png")} alt="" />
      </div>
      <ul>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/protfolio" className="nav-link">Our Protfolio</NavLink>
        <NavLink to="/team" className="nav-link">Our Team</NavLink>
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        <button className="btn">Login</button>
      </ul>
    </nav>
  );
}

export default Navber;
