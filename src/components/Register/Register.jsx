import './Register.css'
import Form from '../Form/Form';
import Authorization from '../Authorization/Authorization';

function Register({name}) {
  return (
    <Authorization
    name = "signup">
        <Form
          name={name}
          title="Регистрация"
          nameButton="Зарегистрироваться"
          // onSubmit={handleSubmit}
        >
            <h3 className='auth__about-input'>Имя</h3>
           <input
            type="nameUser"
            id="nameUser"
            name="nameUser"
            className="auth__input"
            placeholder="Имя"
            required=""
            minlength="2"
            maxlength="40"
            
            // value={values.email ? values.email : ""}
            // onChange={handleChange}
          />
          <span className="auth__input-error auth__input-error-noactive" disable >Что-то пошло не так...</span>
          <h3 className='auth__about-input'>Email</h3>
          <input
            type="email"
            id="email"
            name="email"
            className="auth__input"
            placeholder="Email"
            required=""
            minlength="2"
            maxlength="40"
            // value={values.email ? values.email : ""}
            // onChange={handleChange}
          />
          <span className="auth__input-error auth__input-error-noactive" >Что-то пошло не так...</span>
          <h3 className='auth__about-input'>Пароль</h3>
          <input
            type="password"
            id="password"
            name="password"
            className="auth__input"
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
  )
}

export default Register