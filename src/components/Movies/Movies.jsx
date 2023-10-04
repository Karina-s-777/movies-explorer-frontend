import MoviesCardList from "./MoviesCardList/MoviesCardList.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import "./Movies.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import apiMovies from "../../utils/MoviesApi.js";
import { useCallback, useEffect, useState } from "react";

function Movies({ onLikeOrDeleteMovie, savedMovies }) {
  // первоначальный массив данных фильмов с сервера
  const [allMoviesData, setAllMoviesData] = useState([]);
  // отфильтрованный массив данных фильмов
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedSearch, setSavedSearch] = useState("");
  const [serverError, setServerError] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  // функция берет поиск, который в неё пришел
  const filter = useCallback((search, isCheck, movies) => {
    // функция берет поиск, который в неё пришел из формы поиска (фильм, который искали, и его длину), сохраняя в состояние
    setSavedSearch(search);
    localStorage.setItem("movie", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isCheck));
    localStorage.setItem("allmovies", JSON.stringify(movies));
    // и далее осуществляем саму фильтрацию
    setFilteredMovies(
      movies.filter((movie) => {
        const searchName =
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(search.toLowerCase());
        // если мы ищем короткометражки, то проверяем и имя и продолжительность, иначе только имя
        return isCheck ? searchName && movie.duration <= 40 : searchName;
      }),
    );
  }, []);

  // getingFilms - запрашиваем с сервера данные и отрисовываем их
  const getingFilms = (search) => {
    if (allMoviesData.length === 0) {
      setIsLoading(true);
      apiMovies
        .getMovies()
        .then((res) => {
          setAllMoviesData(res);
          setServerError(false);
          setFirstEntrance(false);
          filter(search, isCheck, res);
        })
        .catch((err) => {
          setServerError(true);
          console.error(`Ошибкак при поске фильмов ${err}`);
        })
        .finally(() => setIsLoading(false));
    } else {
      filter(search, isCheck, allMoviesData);
    }
  };

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies);
      const search = JSON.parse(localStorage.movie);
      const isCheck = JSON.parse(localStorage.shorts);
      setServerError(false);
      setFirstEntrance(false);
      setSavedSearch(search);
      setIsCheck(isCheck);
      setAllMoviesData(movies);
      filter(search, isCheck, movies);
    }
  }, [filter]);

  function changeShort() {
    // Если isCheckесть true, то становится false, и наоборот.
    const updatedIsCheck = !isCheck;
    // устанавливаем состояние, вызываем filter обновленное значение и обновляем локальное хранилище
    setIsCheck(updatedIsCheck);
    filter(savedSearch, updatedIsCheck, allMoviesData);
    localStorage.setItem("shorts", JSON.stringify(updatedIsCheck));
  }

  return (
    <>
      <Header name="movies" />
      <main className="movies">
        <SearchForm
          savedSearch={savedSearch}
          getingFilms={getingFilms}
          changeShort={changeShort}
          firstEntrance={firstEntrance}
          isCheck={isCheck}
        />
        <MoviesCardList
          name="movies"
          cards={filteredMovies}
          onLikeOrDeleteMovie={onLikeOrDeleteMovie}
          savedMovies={savedMovies}
          isLoading={isLoading}
          serverError={serverError}
          firstEntrance={firstEntrance}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
