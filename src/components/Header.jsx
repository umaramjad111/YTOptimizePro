// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold" to="/">
        YTOptimize Pro
      </Link>
      <nav className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/privacy-policy">
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
