import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import imgProfile from "../../images/icon__COLOR_icon-main.svg";
import { useState } from "react";

function Navigation({ name }) {
  // function onSignOut() {
  //   localStorage.removeItem("jwt");
  // }

  // пока такая логика, на 3 этапе переделаю уже в app вместе с остальной логикой
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  // логикой потом перекину setIslogedIn в нужные места для смены false на true и обратно
  const [islogedIn, setIslogedIn] = useState(false);

  function openBurgerMenu() {
    setIsOpenBurger(true);
  }

  function openBurger() {
    const burgerElementButten = document.querySelector(
      ".navigation__button-burger-open",
    );
    burgerElementButten.addEventListener("click", openBurgerMenu);
  }

  function closeBurgerMenu() {
    setIsOpenBurger(false);
  }

  function closeopenBurger() {
    const burgerElementButtenClose = document.querySelector(
      ".navigation__button-burger",
    );
    burgerElementButtenClose.addEventListener("click", closeBurgerMenu);
  }

  return (
    <nav className="navigation">
      {name === "promo" && !islogedIn ? (
        <>
          <ul className="navigation__container navigation__container_promo">
            <li>
              <Link
                to="/signup"
                // onClick={onSignOut}
                className="navigation__butten navigation__butten-no-authorization"
              >
                Регистрация
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                // onClick={onSignOut}
                className="navigation__butten navigation__butten-login navigation__butten-no-authorization"
              >
                Войти
              </Link>
            </li>
          </ul>
        </>
      ) : name === "promo" && islogedIn ? (
        <>
          <div className="navigation__container navigation__container-authorization">
            <ul className="navigation__grid">
              <li>
                {" "}
                <Link
                  to="/movies"
                  // onClick={onSignOut}
                  className="navigation__butten"
                >
                  Фильмы
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/saved-movies"
                  // onClick={onSignOut}
                  className="navigation__butten"
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <div className="navigation__profile">
              <Link
                to="/profile"
                // onClick={onSignOut}
                className="navigation__butten"
              >
                Аккаунт{" "}
                <img
                  className="navigation__profile-img navigation__profile-img_promo"
                  alt="логотип профиля"
                  src={imgProfile}
                ></img>
              </Link>
            </div>
          </div>

          <button
            className={`navigation__button-burger-open navigation__button-burger-open_promo ${
              isOpenBurger && "navigation__button-burger-open-inactive"
            }`}
            onClick={openBurger}
            type="button"
          ></button>

          {/* меню бургер */}
          <div
            className={`navigation__burger-menu ${
              isOpenBurger && "navigation__burger-menu-activ"
            }`}
          >
            <div className="navigation__burger-shadow">
              <div className="navigation__burger-content">
                <button
                  className="navigation__button-burger"
                  onClick={closeopenBurger}
                ></button>
                <ul className="navigation__menubox">
                  <li className="navigation__menubox-line ">
                    <Link to="/" className="navigation__menubox-text">
                      Главная
                    </Link>
                  </li>
                  <li className="navigation__menubox-line ">
                    <Link to="/movies" className="navigation__menubox-text">
                      Фильмы
                    </Link>
                  </li>
                  <li className="navigation__menubox-line ">
                    <Link
                      to="/saved-movies"
                      className="navigation__menubox-text"
                    >
                      Сохранённые фильмы
                    </Link>
                  </li>
                  <li className="navigation__menubox-line">
                    <Link
                      to="/profile"
                      // onClick={onSignOut}
                      className="navigation__butten"
                    >
                      Аккаунт{" "}
                      <img
                        className="navigation__profile-img"
                        alt="логотип профиля"
                        src={imgProfile}
                      ></img>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="navigation__container navigation__container-authorization">
            <ul className="navigation__grid">
              <li>
                <Link
                  to="/movies"
                  // onClick={onSignOut}
                  className="navigation__butten"
                >
                  Фильмы
                </Link>
              </li>
              <li>
                <Link
                  to="/saved-movies"
                  // onClick={onSignOut}
                  className="navigation__butten"
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <div className="navigation__profile">
              <Link
                to="/profile"
                // onClick={onSignOut}
                className="navigation__butten"
              >
                Аккаунт{" "}
                <img
                  className="navigation__profile-img"
                  alt="логотип профиля"
                  src={imgProfile}
                ></img>
              </Link>
            </div>
          </div>

          <button
            className={`navigation__button-burger-open ${
              isOpenBurger && "navigation__button-burger-open-inactive"
            }`}
            onClick={openBurger}
            type="button"
          ></button>

          {/* меню бургер */}
          <div
            className={`navigation__burger-menu ${
              isOpenBurger && "navigation__burger-menu-activ"
            }`}
          >
            <div className="navigation__burger-shadow">
              <div className="navigation__burger-content">
                <button
                  className="navigation__button-burger"
                  onClick={closeopenBurger}
                ></button>
                <ul className="navigation__menubox">
                  <li className="navigation__menubox-line ">
                    <Link to="/" className="navigation__menubox-text">
                      Главная
                    </Link>
                  </li>
                  <li className="navigation__menubox-line ">
                    <Link to="/movies" className="navigation__menubox-text">
                      Фильмы
                    </Link>
                  </li>
                  <li className="navigation__menubox-line ">
                    <Link
                      to="/saved-movies"
                      className="navigation__menubox-text"
                    >
                      Сохранённые фильмы
                    </Link>
                  </li>
                  <li className="navigation__menubox-line">
                    <Link
                      to="/profile"
                      // onClick={onSignOut}
                      className="navigation__butten"
                    >
                      Аккаунт{" "}
                      <img
                        className="navigation__profile-img"
                        alt="логотип профиля"
                        src={imgProfile}
                      ></img>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navigation;
