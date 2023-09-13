import { Link } from "react-router-dom";
import "./Profile.css";
import { useState } from "react";

function Profile() {
  // пока что через disabled мы регулирем активность и неактивность кнопки
  const disabled = true;

  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);
  
  function makeButtonVisible() {
    setIsVisibleSubmit(true);
  }

  function makeButtonInvisible() {
    setIsVisibleSubmit(false);
  }

  return (
    <section className="profile">
    <h1 className="profile__title">Привет, Виталий!</h1>
    <div className="profile__container">
      <div className="profile__container-info">
        <span className="profile__info-text">Имя</span>
        <input
          className="profile__info-text"
          type="text"
          placeholder="Карина"
          minlength="2"
          maxlength="40"
        />
      </div>
      <div className="profile__container-info">
        <span className="profile__info-text profile__info-text-last">E-mail</span>
        <input
          className="profile__info-text profile__info-text-last"
          type="text"
          placeholder="cat@gmail.com"
          minlength="2"
          maxlength="40"
        />
      </div>
    </div>
    {isVisibleSubmit ? (
      <button type="submit" className={`${!disabled ? "profile__button-retention" : "profile__button-retention_disabled"}`} onClick={makeButtonInvisible}>
        Сохранить
      </button>
    ) : (
      <>
      <button type="submit" className="profile__button-transition" onClick={makeButtonVisible}>
      Редактировать
      </button>
        <Link to="/signin" className="profile__link-exit">
          Выйти из аккаунта
        </Link>
      </>
    )}
  </section>
  );
}

export default Profile;