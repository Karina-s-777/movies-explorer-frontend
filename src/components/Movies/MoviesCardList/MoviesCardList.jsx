import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';
import MovieNotFound from '../MovieNotFound/MovieNotFound';

function MoviesCardList({name}) {
    return (
      <section className="page__movies-card-list movies-card-list"  aria-label="Галерея">
        {/* Далее будет условие, при котором появляется либо MovieNotFound, либо Preloader. либо фильмы  */}
        {/* <MovieNotFound></MovieNotFound> */}
         {/* <Preloader></Preloader> */}
        <ul className="movies-list">
        <MoviesCard name={name}/>
        <MoviesCard name={name}/>
        <MoviesCard name={name}/>
        <MoviesCard name={name}/>
        <MoviesCard name={name}/>
        <MoviesCard name={name}/>
        <MoviesCard name={name}/>
        </ul>
        <button className="movies-card-list__button" type="button">Ещё</button>
      </section>
    )
  }
  
  export default MoviesCardList