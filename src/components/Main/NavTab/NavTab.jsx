import React from "react";
import './NavTab.css'
import { HashLink } from "react-router-hash-link";

function NavTab() {

  return (
<section className="nav-tab">
  <div className="nav-tab__container">
    <ul className="nav-tab__links">
      {/* Скорее всего тут будет роутинг */}
      <li className="nav-tab__card">
        <HashLink smooth to="/#about-project" className="nav-tab__link">
          О проекте
        </HashLink>
      </li>
      <li className="nav-tab__card">
        <HashLink smooth to="/#techs" className="nav-tab__link">
          Технологии
        </HashLink>
      </li>
      <li className="nav-tab__card">
        <HashLink smooth to="/#about-me" className="nav-tab__link">
          Студент
        </HashLink>
      </li>
    </ul>
  </div>
</section>
  );
}

export default NavTab;