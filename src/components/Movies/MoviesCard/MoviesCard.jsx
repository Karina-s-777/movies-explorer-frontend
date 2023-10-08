import "./MoviesCard.css";
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MoviesCard({
  name,
  movieData,
  savedMovies,
  onLikeOrDeleteMovie,
  onDeleteMovie,
}) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (name === "movies")
      setClick(savedMovies.some((element) => movieData.id === element.movieId));
  }, [savedMovies, movieData.id, setClick, name]);

  function onClick() {
    if (savedMovies.some((element) => movieData.id === element.movieId)) {
      setClick(true);
      onLikeOrDeleteMovie(movieData);
    } else {
      setClick(false);
      onLikeOrDeleteMovie(movieData);
    }
  }

  function setTime(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    // проверяем, больше ли ноль hours и minutes, прежде чем включать их в выходную строку, а также удаляем любые ведущие или конечные пробелы с помощью .trim()
    return `${hours > 0 ? `${hours}ч` : ""} ${
      minutes > 0 ? `${minutes}м` : ""
    }`.trim();
  }

  return (
    <>
      <div className="movies-card__info">
        {/* потом на месте названия и времени будет пропс, которые тянется из базы, видимо. Пропс title и time например */}
        <div className="movies-card__info-text">
          <h2 className="movies-card__title">{movieData.nameRU}</h2>
          <p className="movies-card__time">{setTime(movieData.duration)}</p>
        </div>
        {name === "movies" ? (
          <LikeButton
            onClick={onClick}
            click={click}
            savedMovies={savedMovies}
          ></LikeButton>
        ) : (
          <DeleteButton
            onDeleteMovie={onDeleteMovie}
            movieData={movieData}
          ></DeleteButton>
        )}
      </div>
      <Link to={movieData.trailerLink} target="_blank">
        <img
          className="movies-card__img"
          alt="Фото фильма"
          src={
            name === "movies"
              ? `https://api.nomoreparties.co${movieData.image.url}`
              : movieData.image
          }
        />
      </Link>
    </>
  );
}

export default MoviesCard;
