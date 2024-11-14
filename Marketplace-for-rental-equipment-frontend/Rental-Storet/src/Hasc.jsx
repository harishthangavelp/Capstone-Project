import React from "react";
import { NavLink } from "react-router-dom";
import '../src/Hasc.css';
import cart from '../src/images/pink-cart.png'

function Hasc() {
  return (
    <>


    <div className="topnav1">
      <NavLink to="/" className="topbut">Home</NavLink>
      <hr className="nav-divider" />
      <NavLink to="/about" className="topbut">About</NavLink>
      <hr className="nav-divider" />
      <NavLink to="/service" className="topbut">Service</NavLink>
      <hr className="nav-divider" />
      <NavLink to="/contact" className="topbut">Contact</NavLink>
      <hr className="nav-divider" />
      <NavLink to="/login" className="topbut">Login</NavLink>
      <hr className="nav-divider" />
      {/* <img src={cart} style={{width:'70px'}} alt="" /> */}
    </div>
    </>
  );
}

export default Hasc;
