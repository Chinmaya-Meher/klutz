// src/components/Navbar.jsx

import "./Navbar.css";

import {
  FiUser,
  FiShoppingCart,
  FiMoon,
} from "react-icons/fi";

export default function Navbar({
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        <div className="logo">
          <h1>KLTUZ.</h1>
        </div>

        {/* LINKS */}

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#contact">
            Contact Us
          </a>

          <a href="#faq">
            FAQs
          </a>

        </div>

        {/* ICONS */}

        <div className="nav-icons">

          <FiMoon
            className="theme-icon"
            onClick={() =>
              setDarkMode(!darkMode)
            }
          />


        </div>

      </nav>

    </header>
  );
}