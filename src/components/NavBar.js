import React from "react";
import logo from "./waveless-logo.svg";

export default function NavBar({ openMenu }) {
  return (
    <nav>
      <img id="logo" src={logo} alt="logo" />
      <i className="fa-solid fa-bars hamburger-menu" onClick={openMenu}></i>
      <div className="menu-items">
        <a href="#">Item1</a>
        <a href="#">Item2</a>
        <a href="#">Item3</a>
        <a href="#">Item4</a>
      </div>
    </nav>
  );
}
