import React, { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";
import Main from "./Main/Main.jsx";
import Movies from "./Movies/Movies.jsx";
import SavedMovies from "./SavedMovies/SavedMovies.jsx";
import Profile from "./Profile/Profile.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";
import NotFound from "./NotFound/NotFound.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
import apiMain from "../utils/MainApi.js";
import Preloader from "./Movies/Preloader/Preloader.jsx";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  // на этом этапе мы также проверям отрисовку прелоадера
  const [isCheckToken, setIsCheckToken] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    navigate(JSON.parse(window.sessionStorage.getItem("lastRoute") || "{}"))
    window.onbeforeunload = () => {
      window.sessionStorage.setItem(
        "lastRoute",
        JSON.stringify(window.location.pathname),
      );
    };
  }, []);

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        apiMain.getUser(localStorage.jwt),
        apiMain.getMovies(localStorage.jwt),
      ])
        .then(([dataUser, dataMovies]) => {
          setSavedMovies(dataMovies.reverse());
          setCurrentUser(dataUser);
          setIsLoggedIn(true);
          setIsCheckToken(false);
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`);
          setIsCheckToken(false);
          localStorage.clear();
        });
    } else {
      setIsLoggedIn(false);
      setIsCheckToken(false);
      localStorage.clear();
    }
  }, [isLoggedIn]);

  function handleRegister(nameUser, email, password) {
    setIsError(false);
    apiMain
      .auth(nameUser, email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(false);
          apiMain
            .authorization(password, email)
            .then((res) => {
              localStorage.setItem("jwt", res.token);
              setIsLoggedIn(true);
              navigate("/movies");
              window.scrollTo(0, 0);
            })
            .catch((err) => {
              setIsError(true);
              console.error(`Ошибка авторизации после регистрации ${err}`);
            });
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.error(`Ошибка регистрации ${err}`);
      });
  }

  function handleLogin(password, email) {
    setIsError(false);
    apiMain
      .authorization(password, email)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        window.scrollTo(0, 0);
        navigate("/movies");
      })
      .catch((err) => {
        setIsError(true);
        setIsLoggedIn(false);
        console.error(`Ошибка авторизации ${err}`);
      })
  }

  /* Функция запрос. Сохраняем данные в API. Функция получает данные юзера dataUser и reset в полях инпутов */
  function handleUpdateUser(username, email) {
    apiMain
      .setUserInfo(username, email, localStorage.jwt)
      .then((res) => {
        /* Пришедшие данные мы сразу записали в состояние стейта - после завершения запроса обновляем стейт currentUser из полученных данных и закрываем все модальные окна. */
        setCurrentUser(res);
        setIsSuccess(true)
      })
      .catch((err) => {
        setIsError(true)
        console.error(`Ошибка редактирования профиля ${err}`);
      }) 
  }

  // удаление фильма из списка сохраненных
  function handleMovieDelete(deleteMovieId) {
    // делаем запрос DELETE по id фильма
    apiMain
      .deleteMovies(deleteMovieId, localStorage.jwt)
      // если все успешно, то возравщаем массив ещё не удаленных фильмов
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deleteMovieId;
          }),
        );
      })
      .catch((err) => console.error(`Ошибка при удалении фильма ${err}`));
  }

  //  функция комбинация логики установки лайка и удаления фильмов в списке сохраненных фильмов.
  function toggleLikeAndDeleteMovie(data) {
    const isMovieLiked = savedMovies.some((movie) => movie.movieId === data.id);

    if (isMovieLiked) {
      // Если фильм уже лайкнут, удаляем его
      const clickedMovie = savedMovies.find(
        (movie) => movie.movieId === data.id,
      );
      if (clickedMovie) {
        handleMovieDelete(clickedMovie._id);
      }
    } else {
      // Если фильм не лайкнут, добавляем лайк
      apiMain
        .setNewMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((err) => console.error(`Ошибка при установке лайка ${err}`));
    }
  }

  function logOut() {
    localStorage.clear();
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      {isCheckToken ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <div className="App">
            <div className="page">
              <div className="page__content">
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route
                    path="/signup"
                    element={
                      isLoggedIn ? (
                        <Navigate to="/movies" replace />
                      ) : (
                        <>
                          <Register name="signup" onRegister={handleRegister} />
                        </>
                      )
                    }
                  />
                  <Route
                    path="/signin"
                    element={
                      isLoggedIn ? (
                        <Navigate to="/movies" replace />
                      ) : (
                        <>
                          <Login
                            name="signin"
                            onLogin={handleLogin}
                            isError={isError}
                            setIsError={setIsError}
                          />
                        </>
                      )
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <>
                        <Header name="promo" isLoggedIn={isLoggedIn} />
                        <Main />
                        <Footer />
                      </>
                    }
                  ></Route>

                  <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                    <Route
                      path="/movies"
                      element={
                        <Movies
                          onLikeOrDeleteMovie={toggleLikeAndDeleteMovie}
                          savedMovies={savedMovies}
                        />
                      }
                    />
                    <Route
                      path="/saved-movies"
                      element={
                        <SavedMovies
                          onDeleteMovie={handleMovieDelete}
                          savedMovies={savedMovies}
                        />
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <Profile
                          editUserData={handleUpdateUser}
                          logOut={logOut}
                          isError={isError}
                          isSuccess={isSuccess}
                          setIsSuccess={setIsSuccess}
                          setIsError={setIsError}
                        />
                      }
                    />
                  </Route>

                  <Route
                    path="/notfound"
                    element={
                      <>
                        <NotFound />
                      </>
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </CurrentUserContext.Provider>
      )}
    </>
  );
}

export default App;