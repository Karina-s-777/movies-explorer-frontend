import "./MoviesCard.css";
import foto1 from "../../../images/foto 1.png";
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";

function MoviesCard({ name }) {

  return (
    <li className="movies-card">
      <div className="movies-card__info">
        {/* потом на месте названия и времени будет пропс, которые тянется из базы, видимо. Пропс title и time например */}
        <div className="movies-card__info-text">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__time">1ч 42м</p>
        </div>
        {name === "movies" ? (
          <LikeButton></LikeButton>
        ) : (
          <DeleteButton></DeleteButton>
        )}
      </div>
      <img className="movies-card__img" alt="Фото фильма" src={foto1} />
    </li>
  );
}

export default MoviesCard;
