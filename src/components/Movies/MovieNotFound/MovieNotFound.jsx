// import { useState } from "react";
import "./MovieNotFound.css";

function MovieNotFound() {

  return (
    <>
    {/* далее здесь будет условие, при котором будет выводиться либо 1, либо 2 вариант */}
       <p className="movieNotFound__report">Ничего не найдено</p>
       <p className="movieNotFound__report">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
       </>
    );
}

export default MovieNotFound;