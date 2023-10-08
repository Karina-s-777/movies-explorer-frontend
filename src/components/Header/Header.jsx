import React from "react";
import vectorLogo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ name, isLoggedIn }) {
  return (
    <header className={`${name === "promo" ? "header" : "header__movies"}`}>
      <Link to="/">
        <img
          src={vectorLogo}
          alt="логотип социальной сети"
          className="header__logo"
        />
      </Link>
      <Navigation name={name} isLoggedIn={isLoggedIn}></Navigation>
    </header>
  );
}

export default Header;
