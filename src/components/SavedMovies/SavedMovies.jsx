import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm.jsx";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  // отфильтрованный массив данных фильмов
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  // стейт запроса поиска - какой фильм ищем и его длину
  const [savedSearch, setSavedSearch] = useState({ movies: "", shorts: false });
  const [isCheck, setIsCheck] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);

  function filter(search, isShort) {
    const filteredMovies = savedMovies.filter((movie) => {
      const searchName =
        typeof search === "string" &&
        (movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(search.toLowerCase()));
      return isShort ? searchName && movie.duration <= 40 : searchName;
    });
    setFilteredMovies(filteredMovies);
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstEntrance(true);
      setFilteredMovies([]);
    } else {
      setFirstEntrance(false);
      if (isCheck) {
        const shortMovies = savedMovies.filter((movie) => movie.duration <= 40);
        setFilteredMovies(shortMovies);
      } else {
        setFilteredMovies(savedMovies);
      }
    }
  }, [savedMovies, isCheck]);

  function getingFilms(search) {
    setFirstEntrance(false);
    setSavedSearch(search);
    filter(search, isCheck);
  }

  function changeShort() {
    setIsCheck(!isCheck);
    setFirstEntrance(false);
    filter(savedSearch, !isCheck);
  }

  return (
    <>
      <Header name="movies" />
      <main className="saved-movies">
        <SearchForm
          isCheck={isCheck}
          getingFilms={getingFilms}
          savedSearch={savedSearch}
          changeShort={changeShort}
          firstEntrance={firstEntrance}
          savedMovies={savedMovies}
        />
        <MoviesCardList
          name="saved-movies"
          cards={filteredMovies.length > 0 ? filteredMovies : savedMovies}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
