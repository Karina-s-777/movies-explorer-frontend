import "./DeleteButton.css";

function DeleteButton({ onDeleteMovie, movieData }) {
  return (
    <button
      className="movies-card__button-delete"
      type="button"
      onClick={() => onDeleteMovie(movieData._id)}
    ></button>
  );
}

export default DeleteButton;
