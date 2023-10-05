import React from "react";
import BakeryLogo from "../images/bakery_logo.jpg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={BakeryLogo} alt="Bakery Logo" />
      </div>
      <ul className="nav-links">
        <a href="/"><li className="nav-link">Home</li></a>
        <a href="/about"><li className="nav-link">About</li></a>
        <a href="/menu"><li className="nav-link">Menu</li></a>
      </ul>
    </nav>
  );
}

export default Navbar;