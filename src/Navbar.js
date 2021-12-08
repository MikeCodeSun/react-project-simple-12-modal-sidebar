import React from "react";
import { FaTimes } from "react-icons/fa";
import logo from "./logo.png";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { isNavbarOpen, closeNavbar } = useGlobalContext();
  return (
    <nav className={`${isNavbarOpen ? "navbar show-navbar" : "navbar "}`}>
      <div className=" nav-container">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="btn navbar-close-btn" onClick={closeNavbar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, icon, text } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map((socailIcon) => {
            const { id, url, icon } = socailIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
