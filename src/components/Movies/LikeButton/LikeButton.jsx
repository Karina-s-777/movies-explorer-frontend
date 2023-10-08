// import { useState } from "react";
import "./LikeButton.css";

function LikeButton({ onClick, click }) {
  return (
    <button
      className={`movies-card__button ${
        click ? "movies-card__button_active" : ""
      }`}
      type="button"
      onClick={onClick}
    ></button>
  );
}

export default LikeButton;
