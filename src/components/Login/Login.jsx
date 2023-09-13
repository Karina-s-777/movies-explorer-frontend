import "./Login.css";
import Form from "../Form/Form";
import Authorization from "../Authorization/Authorization";

function Login({ name }) {
  return (
    <Authorization>
      <Form
        name={name}
        title="Вход"
        nameButton="Войти"
        // onSubmit={handleSubmit}
      >
        <span className="auth__about-input">Email</span>
        <input
          type="email"
          id="email"
          name="email"
          className="auth__input auth__input-authorization"
          placeholder="Email"
          required=""
          minlength="2"
          maxlength="40"
          // value={values.email ? values.email : ""}
          // onChange={handleChange}
        />
        <span className="auth__input-error auth__input-error-noactive">Что-то пошло не так...</span>
        <span className="auth__about-input">Пароль</span>
        <input
          type="password"
          id="password"
          name="password"
          className="auth__input auth__input-authorization"
          placeholder="Пароль"
          required=""
          minlength="2"
          maxlength="40"
          // value={values.password ? values.password : ""}
          // onChange={handleChange}
        />
        <span className="auth__input-error auth__input-error-noactive">Что-то пошло не так...</span>
      </Form>
    </Authorization>
  );
}

export default Login;
