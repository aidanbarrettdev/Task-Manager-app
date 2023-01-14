import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Task Manager</h2>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
