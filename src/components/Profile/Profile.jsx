import { Link, useLocation } from "react-router-dom";
import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import useFormValidation from "../../hooks/useFormValidation";

import CurrentUserContext from '../../contexts/CurrentUserContext'
import { EmailRegex } from "../../utils/constants";

function Profile({ editUserData, logOut, isError, isSuccess, setIsSuccess, setIsError }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, isValid, handleChange, reset } = useFormValidation();
  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);
  const [isUserDataChanged, setIsUserDataChanged] = useState(false);
  // Добавляем состояние для режима редактирования
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email });
    setIsUserDataChanged(false); // Сбросить isUserDataChanged при сбросе значений
  }, [reset, currentUser]);

  const location = useLocation();

  useEffect(() => {
    // Проверить, было ли успешное сообщение отображено
    const isSuccessDisplayed = localStorage.getItem("successMessageDisplayed");
    if (isSuccessDisplayed === "true") {
      setIsSuccess(false); // Скрыть сообщение "Успешно"
    }
  
    // Скрывать сообщение "Успешно" при каждом изменении маршрута
    setIsSuccess(false);
  }, [location]);

  useEffect(() => {
    if (values.username !== currentUser.name || values.email !== currentUser.email) {
      setIsUserDataChanged(true);
    } else {
      setIsUserDataChanged(false);
    }
  }, [values.username, values.email, currentUser.name, currentUser.email]);

  function onSubmit(evt) {
    evt.preventDefault();
    editUserData(values.username, values.email);
    setIsVisibleSubmit(false);
    setIsSuccess(false);
    setIsError(false);
  }

  function makeButtonVisible() {
    setIsVisibleSubmit(true);
    setIsUserDataChanged(false);  // Сбрасываем isUserDataChanged, когда кнопка становится видимой
    setIsEditing(true); // Включаем режим редактирования при нажатии "редактировать"
  }

  return (
    <>
      <Header name="movies"/>
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form className="profile__container" onSubmit={onSubmit}>
          <div className={`profile__container-info ${(isError || isSuccess) && 'profile__container-info_status'}`} >
            <span className="profile__info-text">Имя</span>
            <input
              className="profile__info-text"
              type="text"
              id="nameUser"
              name="username"
              placeholder="Карина"
              required
              minLength="2"
              value={values.username ? values.username : ""}
              onChange={(evt) => { handleChange(evt); setIsUserDataChanged(true); }}
              disabled={!isEditing}
            />
          </div>
          <div className="profile__container-info">
            <span className="profile__info-text profile__info-text-last">E-mail</span>
            <input
              className="profile__info-text profile__info-text-last"
              type="email"
              id="email"
              name="email"
              pattern={EmailRegex}
              required
              placeholder="cat@gmail.com"
              minLength="2"
              value={values.email ? values.email : ""}
              onChange={(evt) => { handleChange(evt); setIsUserDataChanged(true); }}
              disabled={!isEditing}
            />
          </div>
        </form>
        {isVisibleSubmit ? (
          <>
            <button
              type="submit"
              className={`profile__button-retention ${(!isValid || !isUserDataChanged || isError) && "profile__button-retention_disabled"}`}
              onClick={onSubmit}
              disabled={!isValid || !isUserDataChanged}
            >
              Сохранить
            </button>
          </>
        ) : (
          <>
            <span className={`profile__error-request ${(isError || isSuccess) && 'profile__error-request_status'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Успешно'}</span>
            <button type="button" className="profile__button-transition" onClick={makeButtonVisible}>
              Редактировать
            </button>
            <Link to="/signin" className="profile__link-exit"  onClick={logOut}>
              Выйти из аккаунта
            </Link>
          </>
        )}
      </section>
    </>
  );
}

export default Profile;