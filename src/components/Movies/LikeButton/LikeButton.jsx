// import { useState } from "react";
import "./LikeButton.css";

function LikeButton() {

  // далее в логике будет стейт и функция, которая пререключает по нажатию классы лайка туда-сюда
  const disable = false;

  return (
        <button
          className={` ${disable ? "movies-card__button" : "movies-card__button_active"}`}
          type="button"
        ></button>
  );
}

export default LikeButton;