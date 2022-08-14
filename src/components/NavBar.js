import React from "react";
import NavLogo from "../images/vista-logo-horizontal-white.svg";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo-box">
        <img src={NavLogo} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
