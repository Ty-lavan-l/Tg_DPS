import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-brand">Data Processing Software Application</h1>

        <li className="logoutlink">
          <ul>
            <button>
              <img
                alt="logout"
                className="user"
                src="https://img.icons8.com/office/30/000000/change-user-male--v1.png"
              />
            </button>
            <br />
            <Link to="/login">
              <span id="logout_button"> Logout</span>
            </Link>
          </ul>
        </li>
      </nav>
    </div>
  );
}
