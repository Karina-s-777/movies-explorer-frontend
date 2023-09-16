import "./Authorization.css";
import vectorLogo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Authorization({ name, children }) {
  return (
    <main className="auth">
      <div
        className="auth__container"
        onClick={(event) => event.stopPropagation()}
      >
        <Link to="/">
      <img
        src={vectorLogo}
        alt="логотип социальной сети"
        className="auth__logo"
      />
      </Link>
        <h1 className="auth__title">
          {" "}
          {name === "signup" ? "Добро пожаловать!" : "Рады видеть!"}
        </h1>
        {children}
      </div>
    </main>
  );
}

export default Authorization;
