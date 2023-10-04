import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import { useEffect } from "react";
import useFormValidation from "../../../hooks/useFormValidation";

function SearchForm({
  savedSearch,
  isCheck,
  getingFilms,
  changeShort,
  firstEntrance,
}) {
  const { values, handleChange, reset } = useFormValidation();

  useEffect(() => {
    reset({ search: savedSearch });
  }, [savedSearch, reset]);

  function onSubmit(evt) {
    evt.preventDefault();
    if (evt.target.searchInput.value) {
      getingFilms(evt.target.searchInput.value);
    } else {
      console.log("Не получилось");
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
