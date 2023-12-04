import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";

function Sidebar({ isOpen }) {
  return (
    <div className={`backdrop ${!isOpen ? "hidden" : ""}`}>
      <nav className={`sidebar ${!isOpen ? "hidden" : ""} flex-row`}>
        <button
          className="header__toogle_button desktop-hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <img src={menu} alt="Menu" />
        </button>
        <nav className="header__navigation flex-row">
          <img src={logo} alt="snap logo" className="header__logo" />
          <ol className="header__links mobile-hidden flex-row">
            <li>
              <button>Features</button>
            </li>
            <li>
              <button>Company</button>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ol>
        </nav>
        <nav className="header__auth flex-row">
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </nav>
      </nav>
    </div>
  );
}

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="header flex-row">
      <Sidebar isOpen={isSidebarOpen} />
      <nav className="header__navigation flex-row">
        <img src={logo} alt="snap logo" className="header__logo" />
        <ol className="header__links mobile-hidden flex-row">
          <li>
            <button>Features</button>
          </li>
          <li>
            <button>Company</button>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ol>
      </nav>
      <nav className="header__auth flex-row mobile-hidden">
        <a href="#login">Login</a>
        <a href="#register">Register</a>
      </nav>
      <button
        className="header__toogle_button desktop-hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <img src={menu} alt="Menu" />
      </button>
    </header>
  );
}

export default Header;
