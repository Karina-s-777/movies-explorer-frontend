import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  // пока что через disabled мы регулирем активность и неактивность кнопки
  const disabled = false;
  return (
    <>
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__container">
          <div className="profile__container-info">
            <h2 className="profile__info-text">Имя</h2>
            <input
              className="profile__info-text"
              type="text"
              placeholder="Карина"
              minlength="2"
              maxlength="40"
            />
          </div>
          <div className="profile__container-info">
            <h2 className="profile__info-text profile__info-text-last">
              E-mail
            </h2>
            <input
              className="profile__info-text profile__info-text-last"
              type="text"
              placeholder="cat@gmail.com"
              minlength="2"
              maxlength="40"
            />
          </div>
        </div>
        <Link to="/" className="profile__link-transition">
          Редактировать
        </Link>
        <Link to="/signin" className="profile__link-exit">
          Выйти из аккаунта
        </Link>
        {/* кнопка настроена, далее по логике мы будем менять её видимость и видимость ссылкок Редактировать и Выйти из аккаунта */}
        {/* {!disabled ? <button
              type="submit"
              className="auth__button-retention"
            >
              Сохранить
            </button> : <button
              type="submit"
              className="auth__button-submit_disabled"
            >
              Сохранить
            </button>} */}
      </main>
    </>
  );
}

export default Profile;
