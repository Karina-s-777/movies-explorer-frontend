import "./Login.css";
import Form from "../Form/Form";
import Authorization from "../Authorization/Authorization";
import useFormValidation from "../../hooks/useFormValidation";

function Login({ name, onLogin, isError, setIsError }) {
  const { values, isValid, handleChange, errors } = useFormValidation();

  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onLogin(values.password, values.email);
  }

  return (
    <Authorization>
      <Form
        name={name}
        title="Вход"
        nameButton="Войти"
        isValid={isValid}
        onSubmit={handleSubmit}
        isError={isError}
      >
        <span className="auth__about-input">Email</span>
        <input
          type="email"
          id="email"
          name="email"
          className={`${!isValid ? "auth__input_with-error" : "auth__input"}`}
          placeholder="Email"
          required
          minLength="2"
          value={values.email ? values.email : ""}
          onChange={(evt) => {
          handleChange(evt)
          setIsError(false)
        }}
        />
        <span
          className={`${
            !isValid ? "auth__input-error" : "auth__input-error-noactive"
          }`}
        >
          {errors.email}
        </span>
        <span className="auth__about-input">Пароль</span>
        <input
          type="password"
          id="password"
          name="password"
          className={`${!isValid ? "auth__input_with-error" : "auth__input"}`}
          placeholder="Пароль"
          required
          minLength="2"
          value={values.password ? values.password : ""}
          onChange={(evt) => {
            handleChange(evt)
            setIsError(false)
          }}
        />
        <span
          className={`${
            !isValid ? "auth__input-error" : "auth__input-error-noactive"
          }`}
        >
          {errors.password}
        </span>
      </Form>
    </Authorization>
  );
}

export default Login;
