import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";
import close from "./images/icon-close-menu.svg";
import arrowUp from "./images/icon-arrow-up.svg";
import arrowDown from "./images/icon-arrow-down.svg";
import todoList from "./images/icon-todo.svg";
import calendar from "./images/icon-calendar.svg";
import reminders from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";

function DropdownHeader({ buttonText, children, position }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="dropdown-header__wrapper">
      <button className="dropdown-header__button" onClick={handleToggle}>
        {buttonText} <img src={isOpen ? arrowUp : arrowDown} alt="arrow down" />
      </button>
      <ul
        className={`dropdown-header__content ${
          !isOpen ? "dropdown-header__content-hidden" : ""
        } ${
          position == "left"
            ? "-dropdown-header__content-left"
            : "dropdown-header__content-right"
        }`}
      >
        {children.map((child) => (
          <li>
            <a href="#">{child}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DropdownSidebar({ buttonText, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="dropdown__wrapper">
      <button className="dropdown__button" onClick={handleToggle}>
        {buttonText} <img src={arrowDown} alt="arrow down" />
      </button>
      <ul
        className={`dropdown__content ${
          !isOpen ? "dropdown__content-hidden" : ""
        }`}
      >
        {children.map((child) => (
          <li>
            <a href="#">{child}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`backdrop ${!isOpen ? "hidden" : ""} desktop-hidden `}>
      <div className={`sidebar ${!isOpen ? "hidden" : ""} flex-col`}>
        <button
          className="sidebar__toggle_button desktop-hidden"
          onClick={onClose}
        >
          <img src={close} alt="Menu" />
        </button>
        <nav className="sidebar__navigation flex-col">
          <ol className="sidebar__links flex-col">
            <li>
              <DropdownSidebar buttonText="Features">
                <span className="dropdown__feature">
                  <img src={todoList} alt="todo icon" />
                  Todo List
                </span>
                <span className="dropdown__feature">
                  <img src={calendar} alt="calendar icon" />
                  Calendar
                </span>
                <span className="dropdown__feature">
                  <img src={reminders} alt="bell icon" />
                  Reminders
                </span>
                <span className="dropdown__feature">
                  <img src={planning} alt="clock icon" />
                  Planning
                </span>
              </DropdownSidebar>
            </li>
            <li>
              <DropdownSidebar buttonText="Company">
                <span>History</span>
                <span>Our Team</span>
                <span>Blog</span>
              </DropdownSidebar>
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
          <a href="#register" className="button-outline">
            Register
          </a>
        </nav>
      </div>
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
            <DropdownHeader buttonText="Features" position="right">
              <span className="dropdown__feature">
                <img src={todoList} alt="todo icon" />
                Todo List
              </span>
              <span className="dropdown__feature">
                <img src={calendar} alt="calendar icon" />
                Calendar
              </span>
              <span className="dropdown__feature">
                <img src={reminders} alt="bell icon" />
                Reminders
              </span>
              <span className="dropdown__feature">
                <img src={planning} alt="clock icon" />
                Planning
              </span>
            </DropdownHeader>
          </li>
          <li>
            <DropdownHeader buttonText="Company" position="left">
              <span>History</span>
              <span>Our Team</span>
              <span>Blog</span>
            </DropdownHeader>
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
        <a href="#register" className="button-outline">
          Register
        </a>
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
