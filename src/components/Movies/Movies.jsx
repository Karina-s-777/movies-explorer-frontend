import MoviesCardList from "./MoviesCardList/MoviesCardList.jsx";
import SearchForm from "./SearchForm/SearchForm.jsx";
import './Movies.css'

function Movies() {
  return (
    <>
      <main className="movies">
       <SearchForm/>
       <MoviesCardList name="movies"/>
      </main>
    </>
  )
}

export default Movies