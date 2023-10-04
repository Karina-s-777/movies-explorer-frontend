import "./Register.css";
import Form from "../Form/Form";
import Authorization from "../Authorization/Authorization";
import useFormValidation from "../../hooks/useFormValidation";

function Register({ name, onRegister }) {
  const { values, isValid, handleChange, errors } = useFormValidation();

  //  // при нажатии кнопки «Сохранить» данные должны отправляться на сервер
  function handleSubmit(event) {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onRegister(values.nameUser, values.email, values.password);
  }

  return (
    <Authorization name="signup">
      <Form
        name={name}
        title="Регистрация"
        nameButton="Зарегистрироваться"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <span className="auth__about-input">Имя</span>
        <input
          type="nameUser"
          id="nameUser"
          name="nameUser"
          className={`${!isValid ? "auth__input_with-error" : "auth__input"}`}
          placeholder="Имя"
          required
          minLength="2"
          value={values.nameUser ? values.nameUser : ""}
          onChange={handleChange}
        />

        <span
          className={`${
            !isValid ? "auth__input-error" : "auth__input-error-noactive"
          }`}
        >
          {errors.nameUser}
        </span>
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
          onChange={handleChange}
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
          onChange={handleChange}
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

export default Register;
