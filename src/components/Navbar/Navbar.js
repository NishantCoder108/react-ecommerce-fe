import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3>E-Commerce</h3>
      </div>

      <div className="header-items">
        <div>
          {" "}
          <h4>Cart</h4>
        </div>
        <div className="guest">
          {" "}
          <h4>Guest</h4>
        </div>
        <div>
          {" "}
          <h4>Login</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
