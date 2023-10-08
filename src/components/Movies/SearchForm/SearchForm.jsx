import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useEffect } from "react";
import useFormValidation from "../../../hooks/useFormValidation";
import { useLocation } from "react-router-dom";

function SearchForm({
  savedMovies,
  isCheck,
  getingFilms,
  firstEntrance,
  moviesData,
  setIsCheck,
  filter,
  name
}) {
  
  const { values, handleChange, reset } = useFormValidation();

// Загрузка значения из localStorage при первой загрузке компонента
  useEffect(() => {
    const savedSearch = localStorage.getItem("searchInputValue");
    if (savedSearch && name ==='movies') {
      reset({ searchInput: savedSearch });
    } else {
      reset({ searchInput: '' });
    }
  }, [reset, name]);

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      filter(values.searchInput, false, moviesData)
      } else {
      setIsCheck(true)
      filter(values.searchInput, true, moviesData)
      }
       // Сохраняем значение поиска в localStorage при изменении чекбокса
       if (name === 'movies') {
        localStorage.setItem("searchInputValue", values.searchInput || "");
       }
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const searchInputValue = evt.target.searchInput.value;
    getingFilms(evt.target.searchInput.value);
    if (searchInputValue && name === 'movies') {
       // Сохраняем значение поиска в localStorage
      localStorage.setItem("searchInputValue", searchInputValue);
    }
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <div className="search__form-input-container">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="search__form-input"
            placeholder="Фильм"
            value={values.searchInput || ""}
            required
            onChange={(evt) => {
              handleChange(evt);
            }}
          />
          <button className="search__form-button-submit" type="submit" />
        </div>
        <FilterCheckbox
          changeShort={changeShort}
          firstEntrance={firstEntrance}
          isCheck={isCheck}
        />
      </form>
    </section>
  );
}

export default SearchForm;
