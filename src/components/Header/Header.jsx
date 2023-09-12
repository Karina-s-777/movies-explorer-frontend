import React from "react";
import vectorLogo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({name}) {

  return (
    <header className={`${name === "promo" ? 'header' : 'header__movies'}`}>
      <img
        src={vectorLogo}
        alt="логотип социальной сети"
        className="header__logo"
      />
      <Navigation name={name}></Navigation>
    </header>
  );
}

export default Header;
