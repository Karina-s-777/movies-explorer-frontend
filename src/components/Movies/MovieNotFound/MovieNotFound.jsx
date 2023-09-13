// import { useState } from "react";
import "./MovieNotFound.css";

function MovieNotFound() {

  return (
    <>
  {/* далее здесь будет условие, при котором будет выводиться либо 1, либо 2 вариант */}
  <h2 className="movies-card-list__not-found">Ничего не найдено</h2>
  <h2 className="movies-card-list__not-found">
    Во время запроса произошла ошибка. Возможно, проблема с соединением или
    сервер недоступен. Подождите немного и попробуйте ещё раз
  </h2>
</>
    );
}

export default MovieNotFound;