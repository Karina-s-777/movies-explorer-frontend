import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

export default function Form({
  name,
  nameButton,
  children,
  isValid = true,
  onSubmit,
  isError,
}) {
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
          <span
            className={`${
              isError ? "auth__error-request_active" : "auth__error-request"
            }`}
          >
            {"При входе произошла ошибка."}
          </span>
          <button
            type="submit"
            className={`${name === "signup" && "auth__button-retention"}
              ${name === "signin" && "auth__button-retention_login"}
              ${
                isValid || name === "signin"
                  ? ""
                  : "auth__button-submit-disabled"
              }
              ${
                isValid || name === "signup"
                  ? ""
                  : "auth__button-submit-disabled_login"
              }`}
            disabled={!isValid || isError}
          >
            {nameButton}
          </button>

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
