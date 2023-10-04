import { Link } from "react-router-dom";
import "./Profile.css";
import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import useFormValidation from "../../hooks/useFormValidation";

import CurrentUserContext from '../../contexts/CurrentUserContext'

function Profile({ editUserData, logOut, isError, isSuccess, setIsSuccess, setIsError }) {
  const currentUser = useContext(CurrentUserContext)
  // пока что через disabled мы регулирем активность и неактивность кнопки
  const { values, isValid, handleChange, reset } = useFormValidation();

  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email })
  }, [reset, currentUser])

  // useEffect(() => {
  //   setIsError(false)
  //   setIsSuccess(false);
  // }, [setIsError, setIsSuccess, values])
  

  function onSubmit(evt) {
    evt.preventDefault()
    editUserData(values.username, values.email)
    setIsVisibleSubmit(false);
    setIsSuccess(false);
    setIsError(false)
  }

  function makeButtonVisible() {
    setIsVisibleSubmit(true);
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
          type="nameUser"
          id="nameUser"
          name="nameUser"
          placeholder="Карина"
          required
          minLength="2"
          value={values.username ? values.username : ""}
          onChange={handleChange}
        />
        {/* <span className={`${!isValid ? "auth__input-error" : "auth__input-error-noactive"}`}>{errors.nameUser}</span> */}
      </div>
      <div className="profile__container-info">
        <span className="profile__info-text profile__info-text-last">E-mail</span>
        <input
          className="profile__info-text profile__info-text-last"
          type="email"
          id="email"
          name="email"
          required
          placeholder="cat@gmail.com"
          minLength="2"
          value={values.email ? values.email : ""}
          onChange={handleChange}
        />
        {/* <span className={`${!isValid ? "auth__input-error" : "auth__input-error-noactive"}`}>{errors.email}</span> */}
      </div>
    </form>
    {isVisibleSubmit ? (
      <>
      <button type="submit" className={`${isValid  ? "profile__button-retention" : (!isValid || isError) ? "profile__button-retention_disabled" : "profile__button-retention" }`} onClick={onSubmit} disabled={!isValid}>
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