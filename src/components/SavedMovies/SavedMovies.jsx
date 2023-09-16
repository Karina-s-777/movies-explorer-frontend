import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm.jsx";
import './SavedMovies.css'

function SavedMovies() {
  return (
    <>
      <main className="saved-movies">
      <SearchForm/>
       <MoviesCardList/>
      </main>
    </>
  )
}

export default SavedMovies