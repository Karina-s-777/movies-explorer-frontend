import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm.jsx";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import { shortFilmDuration } from "../../utils/constants";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  // отфильтрованный массив данных фильмов
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  // стейт запроса поиска - какой фильм ищем и его длину
  const [savedSearch, setSavedSearch] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [firstEntrance, setFirstEntrance] = useState(true);

  const filter = useCallback((search, isCheck, movies) => {
    setSavedSearch(search)
    setFilteredMovies(
     
      movies.filter((movie) => {
        const searchName =
        (movie.nameRU.toLowerCase().includes(search.toLowerCase())) ||
        (movie.nameEN.toLowerCase().includes(search.toLowerCase()));
       
        // если мы ищем короткометражки, то проверяем и имя и продолжительность, иначе только имя
        return isCheck ? searchName && movie.duration <= shortFilmDuration : searchName;
      }),
    )
  }, [])

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstEntrance(true)
    } else {
      setFirstEntrance(false)
    }
    filter(savedSearch, isCheck, savedMovies)
  }, [filter, savedMovies, isCheck, savedSearch])

  function getingFilms(search) {
    setFirstEntrance(false);
    setSavedSearch(search);
    filter(search, isCheck, savedMovies);
  }


  return (
    <>
      <Header name="movies" />
      <main className="saved-movies">
        <SearchForm
          isCheck={isCheck}
          getingFilms={getingFilms}
          savedSearch={savedSearch}
          // changeShort={changeShort}
          firstEntrance={firstEntrance}
          savedMovies={savedMovies}
          moviesData={savedMovies}
          filter={filter}
          setIsCheck={setIsCheck}
        />
        <MoviesCardList
          name="saved-movies"
          cards={filteredMovies}
          onDeleteMovie={onDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;