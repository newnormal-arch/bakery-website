import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Bakery Logo" />
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