import React from "react";
import { Link } from "react-router-dom";
import './Form.css'

export default function Form({
    name,
    nameButton,
    children,
    isValid = true,
    onSubmit,
  }) {
// пока что через disabled мы регулирем активность и неактивность кнопки
    const disabled = false;

    return (
      <>
      <form
        className="auth__form"
        name={`auth-form-${name}`}
        noValidate
        onSubmit={onSubmit}
      >
        <fieldset className="auth__contact-info">
          {children}
          {!disabled ? (
            <button
              type="submit"
              className={`${
                name === "signup"
                  ? "auth__button-retention"
                  : "auth__button-retention-login"
              }`}
            >
              {nameButton}
            </button>
          ) : (
            <button
              type="submit"
              className={`${
                name === "signup"
                  ? "auth__button-submit-disabled"
                  : "auth__button-submit-disabled-login"
              }`}
            >
              {nameButton}
            </button>
          )}
    
          {name === "signup" && (
            <Link to="/signin" className="auth__link-transition">
              Уже зарегистрированы?{" "}
              <p className="auth__link-transition-text">Войти</p>
            </Link>
          )}
          {name === "signin" && (
            <Link to="/signup" className="auth__link-transition">
              Ещё не зарегистрированы?
              <p className="auth__link-transition-text">Регистрация</p>
            </Link>
          )}
        </fieldset>
      </form>
    </>
    );
  }