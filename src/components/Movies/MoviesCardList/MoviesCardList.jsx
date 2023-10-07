import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CARDS_TO_ADD, MAX_CARDS_LARGE_SCREEN, MAX_CARDS_MEDIUM_SCREEN, MAX_CARDS_SMALL_SCREEN } from "../../../utils/constants";

function MoviesCardList({
  name,
  firstEntrance,
  serverError,
  isLoading,
  cards,
  onDeleteMovie,
  onLikeOrDeleteMovie,
  savedMovies,
}) {
  const { pathname } = useLocation();
  const [visibleCards, setVisibleCards] = useState(0);

  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setVisibleCards(MAX_CARDS_LARGE_SCREEN);
      } else if (screenWidth >= 768) {
        setVisibleCards(MAX_CARDS_MEDIUM_SCREEN);
      } else if (screenWidth >= 480) {
        setVisibleCards(MAX_CARDS_SMALL_SCREEN);
      } else {
        setVisibleCards(MAX_CARDS_SMALL_SCREEN);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  const handleShowMore = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setVisibleCards(visibleCards + CARDS_TO_ADD);
    } else if (screenWidth >= 768) {
      setVisibleCards(visibleCards + CARDS_TO_ADD - 1);
    } else if (screenWidth >= 480) {
      setVisibleCards(visibleCards + CARDS_TO_ADD - 1);
    } else {
      setVisibleCards(visibleCards + CARDS_TO_ADD - 1);
    }
  };

  return (
    <section
      className="page__movies-card-list movies-card-list"
      aria-label="Галерея"
    >
      <ul className="movies-list">
        {isLoading ? (
          <Preloader />
        ) : name === "movies" && cards.length !== 0 ? (
          cards.slice(0, visibleCards).map((movieData) => {
            return (
              <li className="movies-card" key={movieData.id}>
                <MoviesCard
                  movieData={movieData}
                  name={name}
                  savedMovies={savedMovies}
                  onLikeOrDeleteMovie={onLikeOrDeleteMovie}
                />
              </li>
            );
          })
        ) : name === "saved-movies" && cards.length !== 0 ? (
          // здесь пока отрисовывается весь массив, который НЕ фильтровался
          cards.map((movieData) => {
            return (
              <li className="movies-card" key={movieData._id}>
                <MoviesCard
                  movieData={movieData}
                  name={name}
                  savedMovies={savedMovies}
                  onDeleteMovie={onDeleteMovie}
                />
              </li>
            );
          })
        ) : serverError ? (
          <span className="movies-card-list__serch-error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </span>
        ) : !firstEntrance ? (
          <span className="movies-card-list__serch-error">
            Ничего не найдено
          </span>
        ) : pathname === "/movies" ? (
          <span className="movies-card-list__serch-error">Выполните поиск</span>
        ) : (
          <span className="movies-card-list__serch-error">
            Нет сохранённых фильмов
          </span>
        )}
      </ul>
      {name === "movies" && !firstEntrance  && visibleCards < cards.length && (
        <button
          className="movies-card-list__button"
          type="button"
          onClick={handleShowMore}
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;