import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";
import close from "./images/icon-close-menu.svg";
import arrowUp from "./images/icon-arrow-up.svg";
import arrowDown from "./images/icon-arrow-down.svg";

function Dropdown({ buttonText, children }) {
  return (
    <div className="dropdown__wrapper">
      <button className="dropdown__button">
        {buttonText} <img src={arrowDown} alt="arrow down" />
      </button>
      <ul className="dropdown__content">{children}</ul>
    </div>
  );
}

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`backdrop ${!isOpen ? "hidden" : ""}`}>
      <nav className={`sidebar ${!isOpen ? "hidden" : ""} flex-col`}>
        <button
          className="sidebar__toggle_button desktop-hidden"
          onClick={onClose}
        >
          <img src={close} alt="Menu" />
        </button>
        <nav className="sidebar__navigation flex-col">
          <ol className="sidebar__links flex-col">
            <li>
              <Dropdown buttonText="Features">
                <span>Todo List</span>
                <span>Calendar</span>
                <span>Reminders</span>
                <span>Planning</span>
              </Dropdown>
            </li>
            <li>
              <Dropdown buttonText="Company" />
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ol>
        </nav>
        <nav className="sidebar__auth flex-col">
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
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
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
        className="header__toggle_button desktop-hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <img src={menu} alt="Menu" />
      </button>
    </header>
  );
}

export default Header;
