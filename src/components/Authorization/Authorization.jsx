import "./Authorization.css";
import vectorLogo from "../../images/logo.svg";

function Authorization({ name, children }) {
  return (
    <main className="auth">
      <div
        className="auth__container auth__container_authorization"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={vectorLogo}
          alt="логотип социальной сети"
          className="auth__logo"
        />
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
